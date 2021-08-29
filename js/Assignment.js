//  Insert, delete, update in specific Datastructure using Array.
const countries = ["India", "USA", "Russia", "France", "China"];
console.log(countries);

// Inserting data.
countries.push("Japan");
console.log(countries);

// Updating Data.
countries[2] = "Australia";
console.log(countries);

// Deleting Data.
countries.splice(4, 1);
console.log(countries);


// Iterate over array and print the values using a for loop.
var arr = ["This", "is", "an", "array"];
arr.forEach(ele => {
  console.log(ele);
})


// Iterate over map (JSON object) and print the key values using a for loop.
const fruits = new Map();
fruits.set("apple", 500);
fruits.set("mango", 400);
fruits.set("orange", 300);
fruits.set("banana", 200);
fruits.set("grapes", 100);

fruits.forEach((value, key) => console.log(`Key: ${key} and value: ${value}`));


// Write a function to reverse an array.
const marks = [56, 78, 89, 93, 35, 11];

function reverseArray(marks) {
  let newArr = [];
  for (let x of marks) {
    newArr.unshift(x);
  }
  // newArr.reverse();
  console.log(newArr);
}

reverseArray(marks);

