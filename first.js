// Description: Write a JavaScript program to list the properties of a JavaScript object.
let person ={
    name:"ryuma",
    age:24,
    occupation:"pirate",
}
function details(person){
    for(let x in person){
        console.log(`${x} : ${person[x]}`);
    }
}

details(person);