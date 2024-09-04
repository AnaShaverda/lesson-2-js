//for loop
//განვიხილავთ for სტანდარტულ ციკლს, for in for of ციკლებს
//for ციკლი  შედგება სამი ნაწილისგან.
//let i=0 ვახდენთ ცვლადის ინიციალიზებას, ითვლის ციკლს
//i<10 რამდენჯერ უნდა გამეორდეს ციკლი, condicion, როდემდე უნდა იმუშაოს ციკლმა
//increment ან decrement. I უნდა შეიცვალოს

//start loop

console.log("start");
for (let i = 0; i < 5; i++) {
  console.log("hello world");
}
console.log("end");

//გავაკეთოთ loop ლუწებისთვის

for (let i = 2; i < 20; i += 2) {
  console.log(`ლუწი რიცხვები ${i}`);
}

//if else ლუწი კენტი
for (let i = 1; i < 20; i++) {
  if (i % 2 === 0) {
    console.log(`ლუწი ${i}`);
  } else {
    console.log(`კენტი ${i}`);
  }
}

//while loop

let age = 1;
while (age <= 10) {
  console.log(age);
  age++; //უნდა გავზარდოთ თორემ ჩაიციკლება loop და დაიქრაშება კომპ
}

//მეორენაირად როგორ დავწერო while loop
//შემოვიტანეთ break, რომელიც წყვეტს ციკლის მუშაობას
//continue- სანამ 20 არ გახდება, არ დაილოგება
//brak-მთლიან ციკლს აჩერებს
//continue კონკრეტულად იტერაციას ასრულებს და იწყებს თავიდან

let age1 = 0;
while (true) {
  if (age1 < 20) {
    age1++;
    continue;
  }
  if (age1 === 80) {
    break;
  }
  console.log(age1);
  age1++;
}

//დავბეჭდოთ items of arr

const arr = [1, 2, 3, 4, 5, "aniko"];

for (let i = 0; i <= arr.length; i++) {
  console.log(arr[i]);
}

for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}

//for in loop
//logs index
console.log("for in");

for (let index in arr) {
  arr[index]++; //for in-ში გამოყენებული ზრდა და რომ დავლოგაც arr-ის გაიზრდება მნიშვნელობები
  console.log(index);
}

//for of loop
//logs element

console.log("for of");
for (let element of arr) {
  element++; //რომ მინდოდეს ელემენტის გაზრდა for of-ში
  console.log(element);
}
console.log("log eleemnt");
console.log(arr);

//როდესაც of -ს ვიყენებთ elemet-არის რეალურად კლონი და არ მიემართება მეხსიერების უბანში დამახსოვრებულ arr-ელემენტს
//თუ მინდა რომ მნიშვცნელობები შევცვალო უნდა გამოვიენო in ან standart loop

//ფუნქცია არის რეფერენს თაიფი ისევე როპგორც ობიექტი ანდა ერეი

function test() {
  console.log("hello");
}

function testFunction() {
  const names = ["aniko", "pikria", "ana"];
  for (let i = 0; i < names.length; i++) {
    console.log(`hello ${names[i]}`);
  }
}

testFunction();

const numbers = [3, 6, 78, 12];
let max = numbers[0];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log(max);

//თუ მინდა რომ მივესალმო იმის მიხედვით რომ სხვადასხვ სახელები ჰქოდეს
function greeting(name = "მარიამი") {
  //შემიძლია გავუწერო default value და როდესაც არ გადაეცემა პარამეტრი, მაშინ დაიწერება ეს default value
  console.log(`hello ${name}`);
}
greeting("aniko");
greeting("pikria");
greeting();
//სანამ არ მოვახდეენ მის გამოძახებას, მანამ არ დამილოგავს

//მარტივი ფუნქცია
//function  declaration

function sum(a, b) {
  return a + b;
}

console.log(sum(5, 5));

//function expression

const multi = function (a, b) {
  return a * b;
};

console.log(multi(2, 6));

//განსხვავება funciton declaration და function expression-ს შორის
//declaration-ის დროს შემიძლია ფუბქციის გამოძახება მანამ, სანამ ფუნქცია არის შექმნილი. expression-მუშაობს ისე, როგორც ცვლადი და მისი გამოძახება არ შეიძლება დეკლარაციამდე
//return-მნიშვნელოვანია და უნდა გამოვიყენოთ

//arrow function

const arro = () => {};

const arrow = (a, b) => {
  return a / b;
};
console.log(arrow(6, 3));

//this გამოიყენება მხოლოდ funciton declaration-ში

const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person.fullName());
//როდესაც function-ს გადავცემ იმაზე მეტ არგუმენტს, ვიდრე ის იღებს
//arguments-გვჭირდება იმისთვის, რომ გავიიგოთ თუ რა არგუმენტები მაქვს გადაცემული ფუბნქციაში. ჩაშენებული keyword ეს aarguments
//[Arguments] { '0': 2, '1': 5, '2': 8 } დალოგავს ასეთ რამეს

function summery(a, b) {
  console.log(arguments);
  //   console.log(a, b, m); //m is not defined
  return a + b;
}
console.log(summery(2, 5, 8));

//იგივენაირად მუშაობს function expression-შიც

const multiplication = function (a, b) {
  console.log(arguments);
  return a * b;
};
console.log(multiplication(1, 3, 8));

//arrow function-ში arguments ცაშენებუყლი keyword არ მუშაობს

const arrowFunc = (a, b) => {
  console.log(arguments);
  return a + b;
};
console.log(arrowFunc(1, 2, 3));
