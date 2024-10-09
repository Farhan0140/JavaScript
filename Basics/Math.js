let num_1 = 24.45
let num_2 = -20
console.log(num_2)

num_2 = Math.abs(num_2)
console.log(num_2)

console.log(Math.ceil(num_1))  //---> 25
console.log(Math.floor(num_1)) //---> 24
console.log(Math.round(num_1)) //---> 24   if(num < 0.5--> Floor) (num >= 0.5 ---> Ceil)

let num_3 = 25
console.log(Math.sqrt(num_3)) // ---> 5
console.log(Math.pow(num_3, 2))  // ---> 625
console.log(Math.pow(num_3, 3))  // ---> 15625

let Random = Math.random() // (0.1> && <=1)
console.log(Random)

Random = Math.round(Math.random() * 100) // (1> && <=100)
console.log(Random)