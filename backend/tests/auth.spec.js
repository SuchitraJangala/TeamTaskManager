const request = require('supertest');
const app = require('../app');

describe('Auth API', () => {
  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({
        name: 'Test User',
        email: 'testuser@example.com',
        password: 'password123',
        role: 'Admin'   // 👈 use Admin so projects/tasks can work
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body.message).toBe('User registered successfully');
  });

  it('should login with valid credentials', async () => {
    // Register user first (ensures existence even if DB is cleaned)
    await request(app)
      .post('/api/auth/register')
      .send({
        name: 'Login User',
        email: 'loginuser@example.com',
        password: 'password123',
        role: 'Admin'
      });

    // Then login
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'loginuser@example.com',
        password: 'password123'
      });

    expect(res.statusCode).toEqual(200);
    expect(res.body.token).toBeDefined();
  });
});
