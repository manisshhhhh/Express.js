const { publicDecrypt } = require('crypto');
const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;

const app = express();

let posts = [
    { id: 1, title: 'Post one' },
    { id: 2, title: 'Post two' },
    { id: 3, title: 'Post three' },
]

// setup static folder
// app.use(express.static(path.join(__dirname, 'public')));


// Get all posts 
app.get('/api/posts', (req, res) => {
    const limit = parseInt(req.query.limit);

    if (!isNaN(limit) && limit > 0) {
        res.json(posts.slice(0, limit));
    } else {
        res.json(posts);
    }
})

// Get a single post 
app.get('/api/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    res.json(posts.filter((post) => id === post.id));
})


app.listen(port, () => console.log(`Server is running on PORT ${port}`));