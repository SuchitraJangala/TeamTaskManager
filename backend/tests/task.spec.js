const request = require('supertest');
const app = require('../app');

describe('Task API', () => {
  let token;

  // Login before running task tests
  beforeAll(async () => {
    // Make sure the test user exists first (register if needed)
    await request(app)
      .post('/api/auth/register')
      .send({
        name: 'Test User',
        email: 'testuser@example.com',
        password: 'password123',
        role: 'Member'
      });

    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'testuser@example.com', password: 'password123' });

    token = res.body.token;
  });

  it('should create a new task', async () => {
    const res = await request(app)
      .post('/api/tasks')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'Test Task',
        description: 'Task for testing',
        status: 'Pending'
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body.title).toBe('Test Task');
    expect(res.body.status).toBe('Pending');
  });

  it('should fetch all tasks', async () => {
    const res = await request(app)
      .get('/api/tasks')
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
