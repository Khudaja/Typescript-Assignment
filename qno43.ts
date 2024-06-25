// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great()
//  with a copy of the array of magicians’ names. Because the original array will be unchanged, 
// return the new array and store it in a separate array. Call show_magicians() with each array 
// to show that you have one array of the original names and one array with the Great added to 
// each magician’s name.
let Magicians = ['Cihan','Farah','Saira'];
function make_great(Magicians:string[]){
    let great_magican=[''];
    for(let magic of Magicians){
        great_magican.push(`Great ${magic}`);
    }
    return great_magican ;
}
function show_magicians(Magicians:string[]){
    for(let magician of Magicians)
        console.log(magician);
}
let great_magican = make_great([...Magicians]);
console.log(`Original Magicians:`);
show_magicians(Magicians);

console.log('New Magicians:');
show_magicians(great_magican);

