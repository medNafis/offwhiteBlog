const express = require('express');
const router = express.Router();

// Mock data
const posts = [
  { id: 1, title: 'First Post', content: 'This is the first post' },
  // ... other posts
];

// Get all posts
router.get('/', (req, res) => {
  res.json(posts);
});

// Get a single post by ID
router.get('/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).send('Post not found');
  res.json(post);
});

module.exports = router;
