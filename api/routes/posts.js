const express = require('express');
const router = express.Router();

// Mock data
const posts = [
  { id: 1, title: 'First Post', content: 'This is the first post' },
  // ... other posts
];

const blogPosts = [
    { id: 1, title: 'Title 1', subtitle: 'Subtitle '},
    { id: 2, title: 'Title 2', subtitle: 'Subtitle '},
    { id: 3, title: 'Title 3', subtitle: 'Subtitle '},
    { id: 4, title: 'Title 4', subtitle: 'Subtitle '}
];

// Get all posts
router.get('/', (req, res) => {
  res.json(blogPosts);
});

// Get a single post by ID
router.get('/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).send('Post not found');
  res.json(post);
});

module.exports = router;
