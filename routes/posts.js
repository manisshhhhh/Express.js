import express from 'express';
const router = express.Router();

let posts = [
    { id: 1, title: 'Post one' },
    { id: 2, title: 'Post two' },
    { id: 3, title: 'Post three' },
]

// Get all posts 
router.get('/', (req, res) => {
    const limit = parseInt(req.query.limit);

    if (!isNaN(limit) && limit > 0) {
        return res.status(200).json(posts.slice(0, limit));
    }
    res.status(200).json(posts);

})

// Get a single post 
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        return res.status(404).json({ msg: `A Post with a ${id} not present` });
    }
    res.status(200).json(posts.filter((post) => id === post.id));

})

// create a new post 
router.post('/', (req, res) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title
    };

    if (!newPost.title) {
        res.status(400).json({ msg: 'Please add a title field' });
    }

    posts.push(newPost);

    res.status(201).json(posts);
})

// update a post 
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        return res.status(404).json({ msg: `A Post with a ${id} not present` });
    }

    post.title = req.body.title;
    res.status(200).json(posts);
})

router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        return res.status(404).json({ msg: `A Post with a ${id} not present` });
    }

    posts = posts.filter((post) => post.id !== id);
    res.status(200).json(posts);
})


export default router;