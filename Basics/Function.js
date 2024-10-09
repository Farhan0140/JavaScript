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



//--------> Type - 2
/*
let Name = function(Name) {
    return "Hello " + Name
}
console.log(Name("Farhan"))
*/



//--------> Type - 3
let Name = (Name) => {
    return "Hello " + Name
}
console.log(Name("Nadim"))