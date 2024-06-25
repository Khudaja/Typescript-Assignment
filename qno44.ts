// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function sandwitch (ingredients:any[]){
    console.log(`Sandwitch contain following items:`)
     for(let ingredient of ingredients){
     console.log(`${ingredient}`)
    };
     console.log("");  //add empty line after each sandwitch function
}
sandwitch (["Cheese" , "Chicken" , "Mayonise"]);
sandwitch (["Cheese"]);
sandwitch (["Cheese" , "Beef" , "Ketchup"]);