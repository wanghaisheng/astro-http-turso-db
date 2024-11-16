
import { defineAction } from 'astro:actions';
import { db, Post, eq } from 'astro:db';
import { z } from 'astro:schema';

export const getPostLikes = defineAction({
        input: z.string(),
        handler: async (postId) => {

            const [posts] = await db.select().from(Post).where(eq(Post.id, postId));

            if (!posts) {
                return {likes:0,exists:false};
            }
          return {
            likes:posts.likes,
            exists:true
        };
          
        }
      });
