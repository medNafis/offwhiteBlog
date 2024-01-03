const express = require('express');
const postsRouter = require('./routes/posts');
const server = express();
const cors = require('cors');

server.use(cors({
    origin: 'http://localhost:8080' // Allow only this origin to access
  }));

const port = 3000;

server.use('/posts', postsRouter);

server.use(express.static('public')); // Serve static files from the 'public' directory

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
