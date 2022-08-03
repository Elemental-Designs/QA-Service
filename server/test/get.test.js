const request = require('supertest')('http://localhost:3000/qa');
const expect = require('chai').expect;

describe("GET /questions", function () {
  it("returns questions from product id, limited to 5 per page", async function () {
    const response = await request.get("/questions");



  });
});


describe("GET /questions/:question/answers", function () {
  it("returns all answers, limited to 5 per page", async function () {
    const response = await request.get("/questions/1/answers");


  });
});