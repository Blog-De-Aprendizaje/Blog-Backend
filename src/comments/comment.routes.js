import { Router } from 'express';
import { addComment, getComments, getLatestComment } from './comment.controller.js';
import { validateComment } from '../middlewares/validate-comment.js';

const router = Router();

router.post('/addComment/:id', validateComment, addComment);

router.get('/getComments/:id', getComments);

router.get('/getLatestComment/:id', getLatestComment);

export default router;
