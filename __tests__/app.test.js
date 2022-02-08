const app = require('../src/app');
const request = require('supertest');

describe('App Test', () => {
  it('runs app', () => {
    expect(app).toBeDefined();
  });

  it('checks the status of api', (done) => {
    request(app)
      .get('/api/health')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
