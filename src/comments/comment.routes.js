import { Router } from 'express';
import { addComment, getComments, getLatestComment } from './comment.controller.js';
import { validateComment } from '../middlewares/validate-comment.js';

const router = Router();

/**
 * @swagger
 * /addComment/{id}:
 *   post:
 *     summary: Add a comment to a post
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The post ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       201:
 *         description: Comment added successfully
 *       400:
 *         description: Validation error
 *       404:
 *         description: Post not found
 *       500:
 *         description: Internal server error
 */
router.post('/addComment/:id', validateComment, addComment);

/**
 * @swagger
 * /getComments/{id}:
 *   get:
 *     summary: Get all comments for a post
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The post ID
 *     responses:
 *       200:
 *         description: List of comments
 *       404:
 *         description: Post not found
 *       500:
 *         description: Internal server error
 */
router.get('/getComments/:id', getComments);

/**
 * @swagger
 * /getLatestComment/{id}:
 *   get:
 *     summary: Get the latest comment for a post
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The post ID
 *     responses:
 *       200:
 *         description: Latest comment retrieved
 *       404:
 *         description: Post not found or no comments available
 *       500:
 *         description: Internal server error
 */
router.get('/getLatestComment/:id', getLatestComment);

export default router;
