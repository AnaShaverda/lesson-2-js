function person(firstName, lastname, age) {
  return {
    firstName: firstName,
    lastname: lastname,
    age: age,
  };
}
const user1 = person("aniko", "shaverda", 22)["firstName"]; //შემიძლია ამოვიღო მარტო firstName
const user2 = person("pikria", "pilishvili", 35);
user2.lastname = "test"; //შემიიძლია შეცვალო
console.log(user1);
console.log(user2);
