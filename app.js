// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } =
//   //     : {
//   //   name: string;
//   //   age: number;
//   // }
//   {
//     name: "Sagun",
//     age: 35,
//     hobbies: ["Sports", "Cooking"],
//     role: [2, "author"],
//   };
//person.role.push("admin");
//person.role[1] = 10;
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role[Role["AUTHOR"] = 500] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Sagun",
    age: 35,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
};
var favoriteActivities;
favoriteActivities = ["Sports"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.role === Role.AUTHOR) {
    console.log(" is author");
}
