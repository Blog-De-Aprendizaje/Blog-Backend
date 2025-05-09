import { Router } from 'express';
import { createPost, getPosts, getPostById } from './post.controller.js';
import { validatePost } from '../middlewares/validate-posts.js';

const router = Router();

router.post('/createPost', validatePost, createPost);
router.get('/getPosts', getPosts);
router.get('/getPostById/:id', getPostById);

export default router;
