import Post from '../posts/post.model.js';

export const addComment = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, content } = req.body;

        if (!name || !content) {
            return res.status(400).json({ message: "Nombre y contenido son requeridos" });
        }

        const post = await Post.findById(id);
        if (!post) {
            return res.status(404).json({ message: "Publicación no encontrada" });
        }

        post.comments.unshift({ name, content });
        await post.save();

        res.status(201).json({ message: "Comentario agregado exitosamente", comments: post.comments });
    } catch (err) {
        console.error("Error al agregar comentario:", err);
        res.status(500).json({ message: "Error interno", error: err.message });
    }
};

export const getComments = async (req, res) => {
    try {
        const { id } = req.params;

        const post = await Post.findById(id);
        if (!post) {
            return res.status(404).json({ message: "Publicación no encontrada" });
        }

        res.status(200).json({ message: "Comentarios obtenidos", comments: post.comments });
    } catch (err) {
        console.error("Aún no hay comentarios:", err);
        res.status(500).json({ message: "Error interno", error: err.message });
    }
};

export const getLatestComment = async (req, res) => {
    try {
        const { id } = req.params;

        const post = await Post.findById(id);
        if (!post) {
            return res.status(404).json({ message: "Publicación no encontrada" });
        }

        if (post.comments.length === 0) {
            return res.status(404).json({ message: "No hay comentarios en esta publicación" });
        }

        const latestComment = post.comments[0];

        res.status(200).json({ message: "Comentario más reciente obtenido", comment: latestComment });
    } catch (err) {
        res.status(500).json({ message: "Error interno", error: err.message });
    }
};
