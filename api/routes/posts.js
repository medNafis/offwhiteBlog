const express = require('express');
const router = express.Router();

// Mock data
const posts = [
  { id: 1, title: 'VCs anticipate more exits in 2024', imageUrl: 'http://localhost:3000/tstimg1.jpg', date: Date.now(), content: 'This is the first post' },
  { id: 2, title: 'Title 2', content: 'This is the second post' }
];

const blogPosts = [
    { id: 1, title: 'VCs anticipate more exits', subtitle: 'Some investors are more optimistic about M&A in 2024.', imageUrl: 'http://localhost:3000/testimg1.jpg'},
    { id: 2, title: 'VCs anticipate more exits', subtitle: 'Some investors are more optimistic about M&A in 2024, while others think we will see a rebound in the IPO market.', imageUrl: 'http://localhost:3000/testimg2.jpg'},
    { id: 3, title: 'VCs anticipate more exits', subtitle: 'Some investors are more optimistic about M&A in 2024, while others think we will see a rebound in the IPO market.', imageUrl: 'http://localhost:3000/testimg3.jpg'},
    { id: 4, title: 'Title 4', subtitle: 'Some investors are more optimistic about M&A in 2024.', imageUrl: 'http://localhost:3000/testimg4.jpg'}
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
