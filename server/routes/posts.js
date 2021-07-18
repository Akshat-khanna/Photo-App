import express from 'express'
import { getPosts, createPost, updatePost, updateLikes, getPost, deletePost } from '../functions/posts.js';

const router = express.Router()

router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', getPost);
router.patch('/:id', updatePost)
router.delete('/:id', deletePost);
router.patch('/:id/likes', updateLikes)


export default router;