//Question 15: Changing Guest List: One of your guests can't make it to the dinner,
//so you need to send out a new set of invitations with a replacement guest.
//removing a guest

let Guests:string[] = ["faris", "hashim", "saadi"];
for(let guest of Guests){
    console.log(`${guest.toUpperCase()}\t, you are invited for dinner at my place!`)
}

let willnotattened = Guests[2];
    console.log(`unfortunately ${willnotattened} is not able to attened the dinner`);
Guests.splice(2,2,"hunain\t");
for(let guest of Guests){
    console.log(`${guest.toUpperCase()}, you are invited for dinner at my place!`)
}