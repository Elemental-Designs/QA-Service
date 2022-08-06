const request = require('supertest')('http://localhost:3000/qa');
const expect = require('chai').expect;

describe('PUT /questions/:question_id/helpful',()=>{
  it('should update a question to show it was found helpful', async function(){
    const response = await request.put('/questions/1/helpful');
    expect(response.status).to.eql(204);
  });
});

describe('PUT /questions/:question_id/report',()=>{
  it('should update a question to show it was found helpful', async function(){
    const response = await request.put('/questions/1/report');
    expect(response.status).to.eql(204);
  });
});

describe('PUT /answers/:answer_id/helpful',()=>{
  it('should update a answer to show it was found helpful', async function(){
    const response = await request.put('/answers/1/helpful');
    expect(response.status).to.eql(204);
  });
});

describe('PUT /answers/:answer_id/report',()=>{
  it('should update a answer to show it was found helpful', async function(){
    const response = await request.put('/answers/1/report');
    expect(response.status).to.eql(204);
  });
});