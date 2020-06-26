const supertest = require("supertest");
const server = require("./server");
const db = require("../data/dbConfig");

describe("server.js", () => {
  it("should be testing env", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
});

describe("GET /", () => {
  it("return 200 status", async () => {
    const res = await supertest(server).get("/");
    expect(res.status).toBe(200);
  });
});

describe("Testing register endpoint", () => {
  it("should return status code 500 and undefined", async () => {
    const res = await supertest(server).post("/api/auth/register").send({
      name: "John",
      username: "doe",
      email: "john@gmail.com",
      password: "john",
      role: "client",
    });
    // console.log(res);
    expect(res.status).toBe(500);
    expect(res.name).toBe(undefined);
  });
});

describe("Testing login endpoint", () => {
  it("should return status code 201 and welcome message", async () => {
    const res = await supertest(server).post("/api/auth/login").send({
      username: "John",
      password: "john",
    });
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({ message: "Welcome to our API" });
  });
});

describe("Testing auth GET /", () => {
  it("should return status code 402 and auth message", async () => {
    const res = await supertest(server).get("/api/instructor/classes/");
    expect(res.status).toBe(402);
    expect(res.body).toMatchObject({
      message: "Please provide login credentials",
    });
  });
});
