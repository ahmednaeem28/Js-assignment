let studentNamesLiteral = [];
let studentNamesObject = new Array();
let stringsArray = ["apple", "banana", "orange"];
let numbersArray = [1, 2, 3, 4, 5];
let booleanArray = [true, false, true];
let mixedArray = ["apple", 3, true];
let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("<h2>Educational Qualifications in Pakistan:</h2>");
document.write("<ol>");
qualifications.forEach(function(qualification) {
    document.write("<li>" + qualification + "</li>");
});
document.write("</ol>");
document.write("<br>")
let studentNames = ["Alice", "Bob", "Charlie"];
let scores = [400, 450, 380];

function calculatePercentage(score) {
    return (score / 500) * 100;
}

document.write("Student Scores and Percentages:<br>");
for (let i = 0; i < studentNames.length; i++) {
    let percentage = calculatePercentage(scores[i]);
    document.write(`${studentNames[i]} scored ${scores[i]} out of 500, which is ${percentage.toFixed(2)}% <br>`);
}
document.write("<br>")
let colors = ["Red", "Green", "Blue"];
document.write("<b>Initial array:</b> " + colors.join(", ") + "<br><br>");

let colorToAddBeginning = prompt("Enter a color to add to the beginning of the array:");
colors.unshift(colorToAddBeginning);
document.write("<b>Array after adding color to the beginning:</b> " + colors.join(", ") + "<br><br>");

let colorToAddEnd = prompt("Enter a color to add to the end of the array:");
colors.push(colorToAddEnd);
document.write("<b>Array after adding color to the end:</b> " + colors.join(", ") + "<br><br>");

colors.unshift("Purple", "Yellow");
document.write("<b>Array after adding two colors to the beginning:</b> " + colors.join(", ") + "<br><br>");

colors.shift();
document.write("<b>Array after deleting the first color:</b> " + colors.join(", ") + "<br><br>");

colors.pop();
document.write("<b>Array after deleting the last color:</b> " + colors.join(", ") + "<br><br>");

let indexToAdd = parseInt(prompt("Enter the index at which you want to add a color:"));
let colorToAdd = prompt("Enter the color to add:");
colors.splice(indexToAdd, 0, colorToAdd);
document.write("<b>Array after adding color at index " + indexToAdd + ":</b> " + colors.join(", ") + "<br><br>");

let indexToDelete = parseInt(prompt("Enter the index from which you want to delete color(s):"));
let numberOfColorsToDelete = parseInt(prompt("Enter the number of colors you want to delete:"));
colors.splice(indexToDelete, numberOfColorsToDelete);
document.write("<b>Array after deleting colors:</b> " + colors.join(", ") + "<br><br>");
document.write("<br>")
let studentScores = [85, 72, 94, 65, 78];
studentScores.sort(function(a, b) {
    return a - b;
});
document.write("Sorted student scores (ascending order):", studentScores);
document.write("<br>")
let cities = ["New York", "London", "Paris", "Tokyo", "Sydney"];
let selectedCities = cities.slice(0, 3);
document.write("<p>Cities: " + cities)
document.write("<p>Selected cities: " + selectedCities.join(", ") + "</p>");
document.write("<br>")
let arr = ["This ", " is ", " my ", " cat"];
let singleString = arr.join("");
document.write("array: <br>" + arr + "<br>");
document.write("Single String:<br>" + singleString);
document.write("<br>")
let fifoArray = [];

fifoArray.push("first");
fifoArray.push("second");
fifoArray.push("third");

let firstElement = fifoArray.shift();
let secondElement = fifoArray.shift();
let thirdElement = fifoArray.shift();

document.write(firstElement);
document.write(secondElement);
document.write(thirdElement);
document.write("<br>")
let lifoArray = [];

lifoArray.push("first");
lifoArray.push("second");
lifoArray.push("third");

let lastElement = lifoArray.pop();
let secondLastElement = lifoArray.pop();
let thirdLastElement = lifoArray.pop();

document.write("Last Element: " + lastElement + "<br>");
document.write("Second Last Element: " + secondLastElement + "<br>");
document.write("Third Last Element: " + thirdLastElement + "<br>");
document.write("<br>")
let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<select>");
for (let i = 0; i < manufacturers.length; i++) {
    document.write("<option value='" + manufacturers[i] + "'>" + manufacturers[i] + "</option>");
}
document.write("</select>");







