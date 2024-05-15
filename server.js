const { publicDecrypt } = require('crypto');
const express = require('express');
const path = require('path');
const posts = require('./routes/posts.js');
const port = process.env.PORT || 8000;

const app = express();

// Routes
app.use('/api/posts', posts);

// setup static folder
// app.use(express.static(path.join(__dirname, 'public')));


app.listen(port, () => console.log(`Server is running on PORT ${port}`));