const bcryptjs = require("bcryptjs");

exports.seed = function (knex) {
  return knex("user")
    .truncate()
    .then(function () {
      return knex("user").insert([
        {
          name: "Larry",
          username: "Larry",
          email: "larry@gmail.com",
          password: bcryptjs.hashSync("larry", 8),
          role: "client",
        },
        {
          name: "Curly",
          username: "Curly",
          email: "curly@gmail.com",
          password: bcryptjs.hashSync("curly", 8),
          role: "client",
        },
        {
          name: "Moe",
          username: "Moe",
          email: "moe@gmail.com",
          password: bcryptjs.hashSync("test", 8),
          role: "instructor",
        },
      ]);
    });
};
