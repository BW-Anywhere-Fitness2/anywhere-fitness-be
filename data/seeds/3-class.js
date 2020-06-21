exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("class")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("class").insert([
        {
          class_name: "Slapstick Yoga",
          instructor_name: "Moe",
          class_type: "Yoga",
          date_time: "2020-11-7 7AM",
          duration: 1.0,
          intensity_level: "Low",
          location: "Columbia",
          current_members: 5,
          max_members: 10,
        },
        {
          class_name: "Boxing For Dummies",
          instructor_name: "Moe",
          class_type: "Boxing",
          date_time: "2020-7-11 11AM",
          duration: 1.5,
          intensity_level: "High",
          location: "Da' Gym",
          current_members: 2,
          max_members: 5,
        },
        {
          class_name: "Eye Gouging",
          instructor_name: "Moe",
          class_type: "Self Defense",
          date_time: "2020-11-7 7PM",
          duration: 1.5,
          intensity_level: "High",
          location: "Moe's Garage",
          current_members: 3,
          max_members: 5,
        },
      ]);
    });
};
