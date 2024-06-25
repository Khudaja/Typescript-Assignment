// q16 -  More Guests: You've found a bigger dinner table, so there's room for more guests.
//inviting more guests
let guestt = ["minhaj", "hashim", "ahsan"];
console.log(`great news ${guestt}! i have got a bigger table for you guys.`)
 guestt.splice(0,0,'saadi');
 guestt.splice(2,0, 'faris');
 guestt.splice(5,0,'aas');
 for (let Guest of guestt){
console.log(`i have invited ${Guest.toUpperCase()} for dinner`) 
 }
// q17 -  Shrinking guest list: Unfortunately your new table wont arrive in time,
//and you can only invite two guests.
console.log("sorry for the inconvenience, i can only invite two people for dinner.");
while (guestt.length > 2){
    let guestremoved = guestt.pop() 
    console.log(`sorry ${guestremoved}, you are not invited.`)
}
for (let Guest of guestt){
    console.log(`${Guest}, you are still invited for dinner!`)
}
guestt.splice(0,guestt.length)
    console.log(guestt)