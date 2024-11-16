
import { getGreeting } from './greetings/get-greetings.action';
import { getPostLikes } from './posts/get-posts-likes.action';
import { updatePostLikes } from './posts/update-likes.actioon';

export const server = {
    getGreeting,
    //posts
    getPostLikes,
    updatePostLikes,
}