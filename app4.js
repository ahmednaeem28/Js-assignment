let emptyMultiArray = [[]];
document.write(emptyMultiArray);
document.write("<br>")
let matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
  ];
  document.write(matrix);
  document.write("<br>")
  for (let i = 1; i <= 10; i++) {
    document.write(i + "<br>");
}
document.write("<br>")
let tableNumber = parseInt(prompt("Enter the number for multiplication table:"));
let tableLength = parseInt(prompt("Enter the length of the table:"));

document.write("<h2>Multiplication Table of " + tableNumber + "</h2>");

for (let i = 1; i <= tableLength; i++) {
    document.write(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>");
}
document.write("<br>")
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (let i = 0; i < fruits.length; i++) {
    document.write("Index " + i + ": " + fruits[i] + "<br>");
}
document.write("<br>")
document.write("Counting: ");
for (let i = 1; i <= 15; i++) {
    document.write(i + ", ");
}
document.write("<br>");

document.write("Reverse counting: ");
for (let i = 10; i >= 1; i--) {
    document.write(i + ", ");
}
document.write("<br>");

document.write("Even: ");
for (let i = 0; i <= 20; i += 2) {
    document.write(i + ", ");
}
document.write("<br>");

document.write("Odd: ");
for (let i = 1; i <= 19; i += 2) {
    document.write(i + ", ");
}
document.write("<br>");

document.write("Series: ");
for (let i = 2; i <= 20; i += 2) {
    document.write(i + "k, ");
}
document.write("<br>")
let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let userInput = prompt("Enter the item you want to search:");

let found = false;
for (let i = 0; i < A.length; i++) {
    if (userInput.toLowerCase() === A[i]) {
        found = true;
        break;
    }
}

if (found) {
    alert("Yes, the item is found in the list.");
} else {
    alert("No, the item is not found in the list.");
}
document.write("<br>")
let b = [24, 53, 78, 91, 12];
let largest = b[0];

for (let i = 1; i < b.length; i++) {
    if (b[i] > largest) {
        largest = b[i];
    }
}

document.write("The largest number in the array is: " + largest);
document.write("<br>")
let c = [24, 53, 78, 91, 12];
let smallest = c[0];

for (let i = 1; i < c.length; i++) {
    if (c[i] < smallest) {
        smallest = c[i];
    }
}

document.write("The smallest number in the array is: " + smallest);
document.write("<br>")
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        document.write(i + ", ");
    }
}


  