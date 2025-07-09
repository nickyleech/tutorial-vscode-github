const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to the VS Code GitHub Tutorial API!',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      users: '/users',
      auth: '/auth/login'
    }
  });
});

app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

app.post('/auth/login', (req, res) => {
  const { username, password } = req.body;
  
  // Simple validation (in real app, use proper authentication)
  if (!username || !password) {
    return res.status(400).json({ 
      error: 'Username and password are required' 
    });
  }
  
  // Mock authentication
  if (username === 'admin' && password === 'password') {
    res.json({ 
      message: 'Login successful',
      token: 'mock-jwt-token-123',
      user: { id: 1, username: 'admin' }
    });
  } else {
    res.status(401).json({ 
      error: 'Invalid credentials' 
    });
  }
});

app.get('/users', (req, res) => {
  const users = [
    { id: 1, username: 'admin', email: 'admin@example.com' },
    { id: 2, username: 'user1', email: 'user1@example.com' },
    { id: 3, username: 'user2', email: 'user2@example.com' }
  ];
  
  res.json(users);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: err.message 
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ 
    error: 'Route not found',
    path: req.originalUrl 
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
});

module.exports = app;