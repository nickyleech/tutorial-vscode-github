const request = require('supertest');
const app = require('./index');

describe('Authentication API', () => {
  test('POST /auth/login - successful login', async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({
        username: 'admin',
        password: 'password'
      });
    
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Login successful');
    expect(response.body.token).toBeDefined();
    expect(response.body.user.username).toBe('admin');
  });

  test('POST /auth/login - invalid credentials', async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({
        username: 'admin',
        password: 'wrongpassword'
      });
    
    expect(response.status).toBe(401);
    expect(response.body.error).toBe('Invalid credentials');
  });

  test('POST /auth/login - missing username', async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({
        password: 'password'
      });
    
    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Username and password are required');
  });

  test('POST /auth/login - missing password', async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({
        username: 'admin'
      });
    
    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Username and password are required');
  });
});

describe('API Endpoints', () => {
  test('GET / - root endpoint', async () => {
    const response = await request(app).get('/');
    
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Welcome to the VS Code GitHub Tutorial API!');
    expect(response.body.endpoints).toBeDefined();
  });

  test('GET /health - health check', async () => {
    const response = await request(app).get('/health');
    
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('healthy');
    expect(response.body.timestamp).toBeDefined();
    expect(response.body.uptime).toBeDefined();
  });

  test('GET /users - get all users', async () => {
    const response = await request(app).get('/users');
    
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toHaveProperty('id');
    expect(response.body[0]).toHaveProperty('username');
    expect(response.body[0]).toHaveProperty('email');
  });

  test('GET /nonexistent - 404 handler', async () => {
    const response = await request(app).get('/nonexistent');
    
    expect(response.status).toBe(404);
    expect(response.body.error).toBe('Route not found');
    expect(response.body.path).toBe('/nonexistent');
  });
});