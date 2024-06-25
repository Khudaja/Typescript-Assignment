// More Conditional Tests: You don’t have to limit the number of tests you create to 10.
//  If you want to try more comparisons, write more tests. Have at least one True and one 
//  result for each of the following:

// test#1 • Tests for equality and inequality with strings
let raining = "raincoat";
console.log("if raining == raincoat then i consider it true")
console.log(raining == "raincoat")

console.log("if raining != raincoat then i consider it false")
console.log(raining != "raincoat")
 
// test#2 • Tests using the lower case function
let namee = "KHUDAJA";
console.log("if name is in to.lowercase() i predict true!");
console.log(namee.toLowerCase() == "khudaja");

// test#3 • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
//  and less than or equal to
let num1 = 10
let num2 = 5
console.log("if num1==num2 then i predict false!!")
console.log(num1==num2);

console.log("if num1 is greater than num2 .i predict true")
console.log(num1>num2);

console.log("if num1 is less than or equal to  num2 .i predict false")
console.log(num1<=num2);

// test#4 • Tests using "and" and "or" operators
let rain = "raincoat";
let sunshine ="umbrella";
console.log("if rain= raincoat && sunshine = juice i predict false!")
console.log(rain== "raincoat" && sunshine== "juice")

console.log("if rain= raincoat || sunshine = umbrella i predict true!")
console.log(rain== "raincoat" || sunshine== "umbrella")

// test#5 • Test whether an item is in a array
// • Test whether an item is not in a array
let list = ["mango", "apple", "guave", "banana"]
console.log("if apple is present in list then i predict true")
console.log(list.includes("apple"))

console.log("if peach is present in list then i predict false")
console.log(list.includes("peach"));