// - Exercise 1: Write a JavaScript program that takes an array of
//  numbers as input and returns the sum of all the elements in the array.

const findSum = (array) => {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  console.log(sum, " sum of array");
};

const array = [1, 3, 5, 6];
findSum(array);

// - Exercise 2: Create an object representing a person with properties such as name, age, and occupation.
//  Write a function that takes a person object as input and displays their information in a formatted way.

const getInfo = (personInfo) => {
  console.log(
    `Hi, my name is ${personInfo.name}. I am ${personInfo.age} years old, and my full time job is to be a ${personInfo.occupation}`
  );
};

const personInfo = {
  name: "Aidina",
  age: "29",
  occupation: "mother",
};

getInfo(personInfo);

// - Exercise 3: Write a JavaScript program that takes an array of objects, each representing a student with properties such as name and score. Calculate and display the average score of all the students.

const calculateAScore = (studentsData, studentQty) => {
  let averageScore = 0;
  for (let i = 0; i < studentsData.length; i++) {
    averageScore += studentsData[i].score / studentQty;
  }

  console.log(averageScore, " average score");
};

const students = [
  {
    name: "Aidina",
    score: 5,
  },

  {
    name: "Alina",
    score: 4,
  },
  {
    name: "Esma",
    score: "4.5",
  },
  {
    name: "Elnura",
    score: 3,
  },
];

calculateAScore(students, 4);

// Write a JavaScript program that takes an array of objects,
// where each object represents a product with properties like name, price, and quantity.
// Calculate and display the total cost of all the products (price * quantity).
// Additionally, find and display the product with the highest price.
// Ensure that the program handles empty arrays and invalid values for price and quantity gracefully,
// displaying appropriate error messages.

const calculateTotal = (products) => {
  let totalCost = 0;
  let maxNum = 0;

  for (let i = 0; i < products.length; i++) {
    totalCost += products[i].price * products[i].qty;
    if (maxNum < products[i].price) {
      maxNum = products[i].price;
    }
  }
  console.log("max num: ", maxNum);

  if (totalCost === 0) {
    console.log(" Array is empty");
  } else {
    console.log(`This is a total cost ${totalCost}`);
  }
};

const listOfProducts = [
  {
    name: "watermelon",
    price: 10,
    qty: 1,
  },

  {
    name: "apple",
    price: 45,
    qty: 4,
  },

  {
    name: "chocolate bars",
    price: 25,
    qty: 20,
  },
];

calculateTotal(listOfProducts);
