import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import posts from './routes/posts.js'
import logger from './middleware/logger.js'
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';
const port = process.env.PORT || 8000;

// Get the directory name 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Body parser middleware 
app.use(express.json());  // This will take care of being able to submit row json
app.use(express.urlencoded({ extended: false })); //...able to submit url encoded data


// middleware 
app.use(logger);

// setup static folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/posts', posts);

// catch all error Middleware 
app.use(notFound);

// Error handler 
app.use(errorHandler);




app.listen(port, () => console.log(`Server is running on PORT ${port}`));