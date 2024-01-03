const express = require('express');
const postsRouter = require('./routes/posts');
const server = express();
const port = 3000;

server.use('/posts', postsRouter);

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
