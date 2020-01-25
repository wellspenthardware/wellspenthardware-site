var chai = require("chai"),
  chaiHttp = require("chai-http");
var expect = chai.expect;
const should = require("chai").should();
const request = require("supertest");

const app = require("../server/index.js");

describe("GET invalid routes", () => {
  beforeAll(() => {
    chai.use(chaiHttp);
  });

  test("GET /invalidRoute", () => {
    chai
      .request("http://localhost:5000")
      .get("/invalidRoute")
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
      });
  });
});
