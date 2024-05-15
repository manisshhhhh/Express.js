import express from 'express';
import path from 'path';
import posts from './routes/posts.js'
const port = process.env.PORT || 8000;

const app = express();

// Body parser middleware 
app.use(express.json());  // This will take care of being able to submit row json
app.use(express.urlencoded({ extended: false })); //...able to submit url encoded data 

// Routes
app.use('/api/posts', posts);

// setup static folder
// app.use(express.static(path.join(__dirname, 'public')));


app.listen(port, () => console.log(`Server is running on PORT ${port}`));