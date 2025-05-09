import Post from "../posts/posts.model.js";

export const postExists = async (postId = "") => {
    const post = await Post.findById(postId);
    if (!post) {
        throw new Error(`No existe una publicación con el ID proporcionado`);
    }
};
