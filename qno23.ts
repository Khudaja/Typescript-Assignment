// q23 -  Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction 
// for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.


let car: string = 'lexus';

// test#1 //
console.log("if car = lexus then i predicat true.")
console.log(car == "lexus");
// test#2 //
console.log("if car !== lexus then i predicat false")
console.log(car !== "lexus")
// test#3 //
console.log("if car == civic then i predicat false")
console.log(car == "civic")
// test#4 //
console.log("if car !== civic then i predicat true")
console.log(car !== "civic")
// test#5 //
console.log("if car.lenght> 4then i predicat true")
console.log(car.length>4)
// test#6 //
console.log("if car.lenght <4 then i predicat false")
console.log(car.length<4)
// test#7 //
console.log("if car == Lexus then i predicat false")
console.log(car == "Lexus")
// test#8 //
console.log("if car == honda || car ==civic then i predicat true")
console.log(car == "honda" || car == "lexus")
// test#9 //
console.log("if car == civic && car != lexus  then i predicat false")
// @ts-ignore
console.log( car == 'lexus' && car != 'civic' )
// test#10 //
console.log("if car == Lexus then i predicat true")
console.log(car !== "Lexus")
