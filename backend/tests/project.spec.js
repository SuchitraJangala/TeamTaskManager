const request = require('supertest');
const app = require('../app');

describe('Project API', () => {
  let token;

  beforeAll(async () => {
    // Register + login as Admin
    await request(app)
      .post('/api/auth/register')
      .send({
        name: 'Project Admin',
        email: 'projectadmin@example.com',
        password: 'password123',
        role: 'Admin'
      });

    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'projectadmin@example.com',
        password: 'password123'
      });

    token = res.body.token;
  });

  it('should create a new project', async () => {
    const res = await request(app)
      .post('/api/projects')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'Test Project',
        description: 'Project for testing'
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body.title).toBe('Test Project');
    expect(res.body.description).toBe('Project for testing');
  });

  it('should fetch all projects', async () => {
    const res = await request(app)
      .get('/api/projects')
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
