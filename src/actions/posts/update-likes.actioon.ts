
import { actions, defineAction } from 'astro:actions';
import { db, eq, Post } from 'astro:db';
import { z } from 'astro:schema';

export const updatePostLikes = defineAction({
        accept: 'json',
        input: z.object({
          postId: z.string(),
          increment: z.number(),
        }),
        handler: async ({postId, increment}) => {

            
    
    // const posts = await db.select().from(Post).where(eq(Post.id, postId));
    const {data, error} = await actions.getPostLikes(postId);

    if (error) {
        return {msg: error.message};
    }
    
    const {exists, likes} = data;

    if (exists === false) {
        const newPost = {
            id:postId,
            title:'Not Found',
            likes:0
        }

        await db.insert(Post).values(newPost);
        // posts.push(newPost);
    }

    // const post = posts.at(0)!;

    // post.likes =post.likes + increment;

    await db.update(Post).set({
        likes: likes + increment
    }).where(eq(Post.id, postId));

    return true




        },
});
