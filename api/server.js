const express = require("express");
const authRouter = require("../auth/auth-router");
const userRouter = require("../users/user-router");
const instructorRouter = require("../instructor/instructor-router");
const cors = require("cors");
const helmet = require("helmet");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.send({ server: "up" });
});

server.use("/api/auth", authRouter);
server.use("/api/users/classes", userRouter);
server.use("/api/instructor/classes", instructorRouter);

module.exports = server;
