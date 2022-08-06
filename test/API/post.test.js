const request = require('supertest')('http://localhost:3000/qa');
const expect = require('chai').expect;

describe('POST /questions', function () {
  it('adds a questions for given product', async function () {
    const response = await request
      .post('/questions')
      .send({
        body: 'Is the quality great??????????????',
        name: 'Quality Checker 101',
        email: 'quality@email.com',
        product_id: 1
      });
    expect(response.status).to.eql(201);
  });
});

describe('POST /questions/:question_id/answers', function () {
  it('adds a questions for given product', async function () {
    const response = await request
      .post('/questions/1/answers')
      .send({
        body: 'Is the quality great??????????????',
        name: 'Quality Checker 101',
        email: 'quality@email.com',
        photos: ['fakePhoto', 'super fake photo no photo available']
      });
    expect(response.status).to.eql(201);
  });
});