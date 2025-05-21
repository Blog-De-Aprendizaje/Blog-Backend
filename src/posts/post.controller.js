import Post from './post.model.js';

export const createPost = async (req, res) => {
    try {
        const { title, content, course, createdAt } = req.body;

        let postPicture = '';
        if (req.file) {
            postPicture = req.file.filename;
        }

        const post = new Post({
            title,
            content,
            course,
            createdAt,
            postPicture
        });

        await post.save();

        res.status(201).json({
            message: "Publicación creada exitosamente",
            post
        });
    } catch (err) {
        console.error("Error al crear la publicación:", err);
        res.status(500).json({
            message: "Error interno",
            error: err.message
        });
    }
};

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 });
        res.status(200).json({ message: "Publicaciones obtenidas", posts });
    } catch (err) {
        res.status(500).json({ message: "Error al obtener publicaciones", error: err.message });
    }
};

export const getPostById = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.findById(id);

        if (!post) {
            return res.status(404).json({ message: "Publicación no encontrada" });
        }

        res.status(200).json({ message: "Publicación encontrada", post });
    } catch (err) {
        res.status(500).json({ message: "Error al buscar publicación", error: err.message });
    }
};

export const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content, course, createdAt } = req.body;

        const post = await Post.findById(id);
        if (!post) {
            return res.status(404).json({ message: "Publicación no encontrada" });
        }

        if (title) post.title = title;
        if (content) post.content = content;
        if (course) post.course = course;
        if (createdAt) post.createdAt = createdAt;

        if (req.file) {
            post.postPicture = req.file.filename;
        }

        await post.save();

        res.status(200).json({
            message: "Publicación actualizada correctamente",
            post
        });

    } catch (err) {
        console.error("Error al actualizar la publicación:", err);
        res.status(500).json({
            message: "Error interno",
            error: err.message
        });
    }
};