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

enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 100,
  AUTHOR = 500,
}

const person = {
  name: "Sagun",
  age: 35,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};
let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
  console.log(" is author");
}
