import express from 'express';
import { createPost, deletePost, getAllPost, getSinglePost, updatePost } from '../controllers/postController.js';

const router = express.Router();

let posts = [
    { id: 1, title: 'Post one' },
    { id: 2, title: 'Post two' },
    { id: 3, title: 'Post three' },
]

// Get all posts 
router.get('/', getAllPost)

// Get a single post 
router.get('/:id', getSinglePost)

// create a new post 
router.post('/', createPost)

// update a post 
router.put('/:id', updatePost)

router.delete('/:id', deletePost)


export default router;