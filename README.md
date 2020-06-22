# anywhere-fitness-be

API
https://bw-anywhere-fitness-be.herokuapp.com

//---//

Auth Endpoints

Post Method - Register
Path /api/auth/register

Required Information ||
name: "Example" ||
username: "Example" ||
email: "Example@gmail.com" ||
password: "Example" ||
role: cannot be blank and must be either "instructor" or "client"

---

Post Method - Login
Path /api/auth/login

Required Information ||
username: "Example"||
password: "Example"

//---//

Instructor Endpoints

Get Method - List of classes
Path /api/instructor/classes/

---

Get Method - Classby id
Path /api/instructor/classes/:id

---

Post Method - Create a class
Path /api/instructor/classes/

Required Information ||
class_name: "Example" ||
instructor_name: "Example" ||
class_type: "Example" ||
date_time: "7-11-2020 7AM" ||
duration: must be a number and not a string ||
intensity_level: "Low" ||
location: "Example" any address as a string ||
current_members: must be a number and not a string ||
max_members: must be a number and not a string

---

Put Method - Update a class
Path /api/instructor/classes/:id

---

Delete Method - Delete a class
Path /api/instructor/classes/:id

//---//

Client Endpoints

Get Method - List of classes
Path /api/users/classes/
