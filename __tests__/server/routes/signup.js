var chai = require("chai"),
  chaiHttp = require("chai-http");
var expect = chai.expect;

const constants = require("../../../server/constants.js");

let users = [];

beforeAll(() => {
  chai.use(chaiHttp);
  users.push(
    {
      email: "email@domain.com",
      password: "password",
      firstName: "FirstName",
      lastName: "LastName",
      nickname: "nick"
    },
    {
      email: " email@domain.com",
      password: "password",
      firstName: "FirstName",
      lastName: "LastName",
      nickname: "nick"
    },
    {
      email: "email@domain.com ",
      password: "password",
      firstName: "FirstName",
      lastName: "LastName",
      nickname: "nick"
    },
    {
      email: " email@domain.com ",
      password: "password",
      firstName: "FirstName",
      lastName: "LastName",
      nickname: "nick"
    }
  );
});

// not working properly

describe("POST users to /api/account/signup", () => {
  test("POST default user", () => {
console.log(users[0]);

    chai
      .request(`http://localhost:${constants.PORT}`)
      .post("/api/account/signup")
      .set("content-type", "application/json")
      .send(users[0])
      .end((err, res) => {
          console.log(expect(res).to.have.status(200));
      });
  });
});
