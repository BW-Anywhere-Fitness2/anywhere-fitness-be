exports.up = function (knex) {
  return knex.schema
    .createTable("user", (tbl) => {
      tbl.increments();
      tbl.string("name", 255).notNullable();
      tbl.string("email", 255).notNullable().unique();
      tbl.string("username", 255).notNullable().unique();
      tbl.string("password", 255).notNullable();
      tbl.string("role", 255).notNullable();
    })

    .createTable("class", (tbl) => {
      tbl.increments();
      tbl.string("class_name", 255).notNullable().index();
      tbl.string("instructor_name", 255).notNullable();
      tbl.string("class_type", 255).notNullable();
      tbl.dateTime("date_time").notNullable().index();
      tbl.float("duration", 255).notNullable();
      tbl.string("intensity_level", 255).notNullable().index();
      tbl.string("location", 255).notNullable().index();
      tbl.integer("current_members").defaultTo(0);
      tbl.integer("max_members", 255).notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("class").dropTableIfExists("user");
};
