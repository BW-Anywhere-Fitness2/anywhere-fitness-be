const db = require("../data/dbConfig.js");

module.exports = {
  add,
  findBy,
  getClasses,
};

async function add(user) {
  return db("user").insert(user, "id");
}

function findBy(user) {
  return db("user").where(user);
}

function getClasses() {
  return db("class");
}
