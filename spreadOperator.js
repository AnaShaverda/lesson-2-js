const arr = [1, 2, 3];
const arr2 = [1, 2, 3];
console.log(arr);
console.log(arr2);
console.log(arr === arr2); //false arr aris ref type

//როცა მინდა ერეის კოპირება რომ პირვბელი ერეი დარჩეს უცვლელი

const cloneArr = arr; //arr და cloneArr ტოლია
console.log(arr === cloneArr);
cloneArr.push(8);
console.log(cloneArr); //ჩაიწერა
console.log(arr); //აქაც ჩაიწერა

//იმისთვის, რომ გავაკეთო arr კლონი clone arr-ში

// const arr1 = [1, 2, 3];
// const clone = [];
for (let element of arr1) {
  clone.push(element);
}
console.log(clone);
console.log(arr1);
console.log(clone === arr1); //falses უყურებენ სხვა ადგილს მეხნიერების

//ამის უფრო მარტივი ჩანაწერი არის spread ოპერატორი
const clone = [];
const arr1 = [1, 2, 3];
clone.push(...arr1);
//push-ის ნაცვლად შეგვიძლია პურდაპირ მივანიჭოთ არრ1
console.log(clone);
console.log(clone === arr1); //false
