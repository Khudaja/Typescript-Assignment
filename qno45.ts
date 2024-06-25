// Cars: Write a function that stores information about a car in a Object.
//  The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments. 
// Call the function with the required information and two other name-value pairs, 
//  as a color or an optional feature. Print the Object that’s returned to make sure 
// all the information was stored correctly.

function car(
    manufacturer:string,
    modelname:string,
    ...options: [string, any][]
){
    let car = {manufacturer, modelname};
    options.forEach(([key , value]) => (car[key] = value));
    return car;
}
console.log(car("Toyota" , "Corolla" , ["colour","Red"] , ["Year","2020"]));

// options is a list of special features you want to add to the car.
// forEach means we look at each feature one by one.
// ([key, value]) means each feature has a name (key) and a detail (value).










