var chai = require("chai"),
  chaiHttp = require("chai-http");
var expect = chai.expect;

const constants = require("../../server/constants")

beforeAll(() => {
    chai.use(chaiHttp);
  });

describe("GET invalid routes", () => {
  test("GET /invalidRoute", () => {
    chai
      .request(`http://localhost:${constants.PORT}`)
      .get("/invalidRoute")
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.text).to.be.equal("Invalid route!");
      });
  });
  test("GET /api/invalidRoute", () => {
    chai
    .request(`http://localhost:${constants.PORT}`)
      .get("/api/invalidRoute")
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.text).to.be.equal("Invalid route!");
      });
  });
  test("GET /api/invalidRoute", () => {
    chai
    .request(`http://localhost:${constants.PORT}`)
      .get("/randomApi/randomRoute")
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.text).to.be.equal("Invalid route!");
      });
  });
});
