//--------> Type - 1
/*
function def(num_1, num_2) {
    let sum = num_1 + num_2
    console.log(sum)
}


let a = 10
let b = 20
def(a, b) // ---> 30

function def(num_1, num_2) {
    return num_1 + num_2
}

let a = 10
let b = 20
console.log(def(a, b)) // ---> 30
*/

//-----------------> Rest Parameters -----> ES6

function def(num) {
    console.log(num);
}
def(1, 2, 3, 4, 5) //----> 1 || 1 parameter 1 output, but i want all of them with 1 parameter

function DEF(...num) {
    console.log(num)
}
DEF(1, 2, 3, 4, 5, 6, 8) //----> [ 1, 2, 3, 4, 5, 6, 8 ]



//--------------------------> Default Parameter  -----> ES6
/*
function def(name){
    console.log(name)
}
def() //-------> Undefined

function Def(name = "") {
    console.log(name)
}
Def() // ---> kicu Ashbe na

function DEF(name = "Nadim"){
    console.log(name)
}
DEF() //------> Nadim
DEF("Hello Nadim") //------> Hello Nadim
*/





//--------> Type - 2
/*
let Name = function(Name) {
    return "Hello " + Name
}
console.log(Name("Farhan"))
*/



//--------> Type - 3
/*
let Name = (Name) => {
    return "Hello " + Name
}
console.log(Name("Nadim"))
*/