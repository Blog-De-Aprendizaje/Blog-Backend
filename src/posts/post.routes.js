import { Router } from 'express';
import { createPost, updatePost, getPosts, getPostById } from './post.controller.js';
import { uploadPostPicture } from '../middlewares/multer-uploads.js';
import { validatePost } from '../middlewares/validate-posts.js';

const router = Router();

/**
 * @swagger
 * /createPost:
 *   post:
 *     summary: Create a new post
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               course:
 *                 type: string
 *     responses:
 *       201:
 *         description: Post created successfully
 *       400:
 *         description: Validation error
 *       500:
 *         description: Internal server error
 */
router.post('/createPost', uploadPostPicture.single("postPicture"), validatePost, createPost);

/**
 * @swagger
 * /getPosts:
 *   get:
 *     summary: Get all posts
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: List of posts
 *       500:
 *         description: Internal server error
 */
router.get('/getPosts', getPosts);

/**
 * @swagger
 * /getPostById/{id}:
 *   get:
 *     summary: Get a post by ID
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The post ID
 *     responses:
 *       200:
 *         description: Post found
 *       404:
 *         description: Post not found
 *       500:
 *         description: Internal server error
 */
router.get('/getPostById/:id', getPostById);

router.put('/updatePost/:id', uploadPostPicture.single("postPicture"), updatePost);

export default router;
