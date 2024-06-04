document.write("<h1>CH# 12-13</h1>")
document.write("<br>")
let input = prompt("Enter a character(Uppercase or Lowercase)");
let charCode = input.charCodeAt(0);

if (charCode >= 48 && charCode <= 57) {
    document.write("The input is a number.");
} else if (charCode >= 65 && charCode <= 90) {
    document.write("The input is an uppercase letter.");
} else if (charCode >= 97 && charCode <= 122) {
    document.write("The input is a lowercase letter.");
} else {
    document.write("The input is not a number or letter.");
}

let num1 = prompt("Enter the First integer")
let num2 = prompt("Enter the second integer")

if(num1>num2){
    document.write("<br>The First Integer Is Greater")
}
else if(num1<num2){
    document.write("<br>The Second Integer Is Greater")
}
else{
    document.write("<br>Please enter a number")
}
let numb1 = prompt("Enter A Number(Negative, Positive, or Zero)")

if(numb1>0){
    document.write("<br> The number is positive")
}
else if(numb1<0){
    document.write("<br> The number is negative")
}
else{
    document.write("<br> The number is zero")
}

let vowel1 = "a"
let vowel2 = "e"
let vowel3 = "i"
let vowel4 = "o"
let vowel5 = "u"

let input1 = prompt("Enter a character(Vowel = True, Not Vowel = False)")

if (input1 === vowel1 || input1 === vowel2 || input1 === vowel3 || input1 === vowel4 || input1 === vowel5) {
    document.write("<br>True")
    }
else{
    document.write("<br>False")
}
alert("Password = password123")
let correctPassword = "password123";

let userPassword = prompt("Enter your password:");

if (!userPassword) {
    alert("Please enter your password.");
} else if (userPassword === correctPassword) {
    alert("Correct Password!");
} else {
    alert("Incorrect password.");
}
var greeting;
var hour = 13;
if (hour < 18) {
   document.write(greeting = "<br>Good day");
} else {
    document.write(greeting = "<br>Good evening");
}
document.write("<br>")
function convertTo12HourFormat(time) {
    if (time < 0 || time > 2359) {
        return "Invalid time input";
    }

    if (time === 0) {
        return "12:00 AM";
    } else if (time < 1200) {
        let hour = Math.floor(time / 100);
        let minute = (time % 100).toString().padStart(2, "0");
        return hour + ":" + minute + " AM";
    } else if (time === 1200) {
        return "12:00 PM";
    } else {
        let hour = Math.floor(time / 100) - 12;
        let minute = (time % 100).toString().padStart(2, "0");
        return hour + ":" + minute + " PM";
    }
}

function main() {
    let timeInput = parseInt(prompt("Enter time in 24-hour clock format (e.g., 1900 for 7:00 PM): "));
    let convertedTime = convertTo12HourFormat(timeInput);
    document.write("Converted time: ", convertedTime);
}

main();


