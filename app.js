document.write("<h1>CH# 6-9</h1>")
document.write("Result: <br>The value of A is: 10");
document.write("<br>...................................");

let value2 = 11;
document.write("<br><br><br>The value of ++A is: " + (++value2));
document.write("<br>Now The value of A is: " + value2);

document.write("<br><br><br>The value of A++ is: " + value2++);
let value3 = 12;
document.write("<br>Now The value of A is:  " + value3);

document.write("<br><br><br>The value of --A is: " + (--value2));
document.write("<br>Now The value of A is: " + value2);

document.write("<br><br><br>The value of A-- is: " + (value2--));
let value4 = 10;
document.write("<br>Now The value of A is: " + value4);

document.write("<br><br>Q2:<br>")
var a = 2, b = 1;
var result = --a - --b + ++b + b--;

--a;
--a - --b;
--a - --b + ++b;
--a - --b + ++b + b--;

document.write("a: " + a + "<br>");
document.write("b: " + b + "<br>");
document.write("result: " + result);

let userName = prompt("Whats Your Name?")
alert("Greetings, "+ userName)

function displayMultiplicationTable() {
    var inputNumber = prompt("Enter a number to display its multiplication table:");
    inputNumber = parseInt(inputNumber);
    if (isNaN(inputNumber) || inputNumber === null || inputNumber === "") {
        inputNumber = 5;
    }
    document.write("<h2>Multiplication Table of " + inputNumber + "</h2>");
    document.write("<table border='0'>");
    for (var i = 1; i <= 10; i++) {
        document.write("<tr>");
        document.write("<td>" + inputNumber + " x " + i + " = </td>");
        document.write("<td>" + (inputNumber * i) + "</td>");
        document.write("</tr>");
    }
    document.write("</table>");
}

displayMultiplicationTable();
let colon = ":";
let Sub1 = prompt("Enter First Subject Name");
let Sub2 = prompt("Enter Second Subject Name");
let Sub3 = prompt("Enter Third Subject Name");
alert("Total Marks Are 100");

let TotalSub1Marks = 100;
let TotalSub2Marks = 100;
let TotalSub3Marks = 100;

let Sub1marksobt;
let Sub2marksobt;
let Sub3marksobt;

while (true) {
    Sub1marksobt = prompt("Enter Marks Obtained From " + Sub1);
    if (!isNaN(Sub1marksobt)) {
        Sub1marksobt = parseFloat(Sub1marksobt);
        break;
    } else {
        alert("Please enter only numeric values.");
    }
}

while (true) {
    Sub2marksobt = prompt("Enter Marks Obtained From " + Sub2);
    if (!isNaN(Sub2marksobt)) {
        Sub2marksobt = parseFloat(Sub2marksobt);
        break;
    } else {
        alert("Please enter only numeric values.");
    }
}

while (true) {
    Sub3marksobt = prompt("Enter Marks Obtained From " + Sub3);
    if (!isNaN(Sub3marksobt)) {
        Sub3marksobt = parseFloat(Sub3marksobt);
        break;
    } else {
        alert("Please enter only numeric values.");
    }
}

let totalMarks = Sub1marksobt + Sub2marksobt + Sub3marksobt;
let percentage = (totalMarks / (TotalSub1Marks + TotalSub2Marks + TotalSub3Marks)) * 100;
let Sub1Percentage = (Sub1marksobt / TotalSub1Marks) * 100;
let Sub2Percentage = (Sub2marksobt / TotalSub2Marks) * 100;
let Sub3Percentage = (Sub3marksobt / TotalSub3Marks) * 100;

document.write("<br><table border='0'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + Sub1 + "</td><td>" + TotalSub1Marks + "</td><td>" + Sub1marksobt + "</td><td>" + Sub1Percentage.toFixed(2) + "%</td></tr>");
document.write("<tr><td>" + Sub2 + "</td><td>" + TotalSub2Marks + "</td><td>" + Sub2marksobt + "</td><td>" + Sub2Percentage.toFixed(2) + "%</td></tr>");
document.write("<tr><td>" + Sub3 + "</td><td>" + TotalSub3Marks + "</td><td>" + Sub3marksobt + "</td><td>" + Sub3Percentage.toFixed(2) + "%</td></tr>");
document.write("<tr><td colspan='3'>Total Marks</td><td>" + totalMarks + "</td></tr>");
document.write("<tr><td colspan='3'>Overall Percentage</td><td>" + percentage.toFixed(2) + "%</td></tr>");
document.write("</table>");
