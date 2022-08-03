const request = require('supertest')('http://localhost:3000/qa');
const expect = require('chai').expect;

describe("GET /questions", function () {
  it("returns questions from product id, limited to 5 per page", async function () {
    const response = await request.get("/questions").query({product_id: 1});

    expect(response.status).to.eql(200);
    expect(typeof(response.body)).to.eql('object');
    expect(response.body.result.length).to.eql(5);



  });
});


// describe("GET /questions/:question/answers", function () {
//   it("returns all answers, limited to 5 per page", async function () {
//     const response = await request.get("/questions/1/answers");

//     expect(response.status).to.eql(200);
//     expect(typeof(response.body)).to.eql('object');
//     expect(response.body.result.length).to.eql(5);

//   });
// });