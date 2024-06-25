// Great Magicians: Start with a copy of your program from Exercise 39.
//  Write a function called make_great() that modifies the array of magicians by
//  adding the phrase the Great to each magician’s name. Call show_magicians() to see
//  that the list has actually been modified.

let Magicians=['Cihan','Farah','Saira']
function show_magicians(Magician:string[]){
    for(let Magician of Magicians){
        console.log(Magician)};
}
show_magicians(Magicians);


function make_great(Magician:string[]){
    for(let Magician of Magicians){
        console.log(`Hello ${Magician}`)
    };
}
make_great(Magicians);
