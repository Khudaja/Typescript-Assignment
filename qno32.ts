// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a
//  unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also
//  in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a 
// message that the person 
// will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let current_users:string[] = ["Eric", "Aas", "Cihan", "Eshal", "Khudaja"];
let new_users:string[] = ["aas", "Henry", "cihan", "Maida", "ESHAL" ,"Rameez"];
let lower_case_new_users = [""];
for (let new_user of new_users){
    new_user.toLowerCase();
    lower_case_new_users.push(new_user)
}
for (let current_user of current_users){
    let lower_case_current_user = current_user.toLowerCase();
    if (lower_case_new_users.indexOf(lower_case_current_user) !== -1){
        console.log(`Username ${current_user} is not available!!`);
    }else{
        console.log(`Username ${current_user} is available!!`);
    }
}
