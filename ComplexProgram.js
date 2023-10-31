/* 
Filename: ComplexProgram.js
Description: A complex JavaScript program incorporating multiple concepts and functionality.
*/

// Generate a random number between two specified values
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Format a string using template literals
function formatString(string, values) {
  return string.replace(/{{([^{}]+)}}/g, (match, key) => values[key.trim()] || "");
}

// Get the length of an array, object, or string
function getLength(item) {
  if (Array.isArray(item) || typeof item === "string") {
    return item.length;
  } else if (typeof item === "object") {
    return Object.keys(item).length;
  } else {
    return 0;
  }
}

// Create a class to represent a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Generate a random color in hexadecimal format
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Perform a deep copy of an object
function deepCopy(obj) {
  let copy;

  if (Array.isArray(obj)) {
    copy = [];
    obj.forEach((item) => {
      copy.push(deepCopy(item));
    });
  } else if (typeof obj === "object") {
    copy = {};
    Object.keys(obj).forEach((key) => {
      copy[key] = deepCopy(obj[key]);
    });
  } else {
    copy = obj;
  }

  return copy;
}

// Example usage of the functions and classes defined above
const randomNumber = getRandomNumber(1, 100);
console.log("Random Number:", randomNumber);

const formattedString = formatString("Hello, {{name}}! Today is {{day}}.", {
  name: "John",
  day: "Monday",
});
console.log("Formatted String:", formattedString);

const array = [1, 2, 3, 4, 5];
console.log("Array Length:", getLength(array));

const person = new Person("Alice", 30);
person.introduce();

const color = getRandomColor();
console.log("Random Color:", color);

const originalObject = {
  name: "Jane",
  age: 25,
  hobbies: ["reading", "painting", "swimming"],
};
const copiedObject = deepCopy(originalObject);
console.log("Copied Object:", copiedObject);