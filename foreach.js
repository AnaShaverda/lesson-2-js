const arr = [1, 2, 3, 4];
let counter = 0; //შეკრებუსთვის
arr.forEach((item) => {
  counter += item; //შეკრებისტვის
  console.log(item);
});
console.log(counter); //შეიკრიბა

//foreach არის სტანსარტული ციკლი რომელიც არის მხლოდ ციკლი, არ გვაქვს საშუალება შევცვალოთ ეს ციკლი და ვერაფერს დავაბრუნებ

const newArr = arr.forEach((item, index) => {
  arr[index] = item * 2;
});

console.log(newArr); //es aris undefined radganac foreach doesnt returns new arr

arr.forEach((item, index) => {
  arr[index] = item * 2;
});

console.log(arr); // This will log the modified original array: [2, 4, 6, 8]

const mapArr = arr.map((value, index, arr) => {
  return value * 2;
});
console.log(mapArr);

// forEach
// What it does: The forEach method in JavaScript is used to execute a function for each element in an array.
// Key Point: It does not return a new array. Instead, it simply loops through the array and performs an action for each element.
// Use Case: Use forEach when you want to do something (like printing values, modifying the original array, etc.) without needing a new array.

const arr = [1, 2, 3];

arr.forEach((item) => {
  console.log(item); // Logs each item: 1, 2, 3
});
// In this example, forEach just loops through the array and logs each item. It doesn’t return anything, and it doesn't create a new array.

// Modifying the array:
const arr = [1, 2, 3];

arr.forEach((item, index) => {
  arr[index] = item * 2; // Modify each item in place
});

console.log(arr); // [2, 4, 6]
// Here, forEach modifies the original array by doubling each value.

// map
// What it does: The map method in JavaScript is used to transform each element of an array and return a new array. It doesn’t modify the original array, but creates a new one based on the result of a function you provide.
// Key Point: It returns a new array, with each element being the result of the function you run on every element of the original array.
// Use Case: Use map when you need a new array with transformed values (e.g., doubling numbers, converting data formats, etc.).
// Example:

const arr = [1, 2, 3];

const newArr = arr.map((item) => item * 2);

console.log(newArr); // [2, 4, 6]
console.log(arr); // [1, 2, 3] - the original array is unchanged
// In this example, map creates a new array where each element is doubled, but the original array remains unchanged.

// Summary:
// forEach: Executes a function for each item but does not return anything.
// map: Transforms each item and returns a new array with the modified values.
const arr = ["Aniko", "Pikria", "Mariami", "Dea"];

console.log(
  arr.map((person) => {
    return person.toLowerCase();
  })
);

console.log(
  arr.forEach((name) => {
    name.toLowerCase();
  })
);

let names = arr.forEach((name) => {
  name.toLowerCase();
});
console.log(names);

let mapNames = arr.map((name) => {
  return name.toLowerCase();
});
console.log(mapNames);
