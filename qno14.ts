// Question 14: Guest List: If you could invite anyone, living or deceased, 
// to dinner, who would you invite? Make a list that includes at least three people 
// you’d like to invite to dinner. Then use your list to print a message to each person, 
// inviting them to dinner.

let guests:string[] = ["faris", "hashim", "saadi"];
for(let guest of guests){
    console.log(`${guest.toUpperCase()}, you are invited for dinner at my place!`)
}
