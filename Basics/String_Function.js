/*
let StringType_1 = `Farhan Nadim (Type 1)`
let StringType_2 = 'Farhan Nadim (Type 2)'
let StringType_3 = "Farhan Nadim (Type 3)"
console.log(StringType_1)
console.log(StringType_2)
console.log(StringType_3)

console.log(typeof StringType_1)  //
console.log(typeof StringType_2)  //  Check Type
console.log(typeof StringType_3)  //
*/

// ----------------> UpperCase, LowerCase
/*
let Text = "Speakers at a roundtable today called for the immediate repeal of the Cyber Security Act (CSA), condemning it as a tool used by the fascist"
Text = Text.toUpperCase()
console.log(Text)
Text = Text.toLowerCase()
console.log(Text)
*/

//----------> Split
/*
let Text = "My Name is Farhan Nadim"
console.log(Text.split("Farhan"))
*/

// ---------------->Index Of
/*
let Text = "My Name is Farhan Nadim"
console.log(Text.indexOf("F"))

console.log(Text.indexOf("Farhan"))
*/

// -----------> Parse Float & Parse Int -----------> String to Number
/*
let num_1 = 55;
let num_2 = 50
console.log((num_1 + num_2)) // ----> 105

let num_1 = "55"
let num_2 = 50
console.log((num_1 + num_2)) // ---> 5550

num_1 = parseInt(num_1)
console.log((num_1 + num_2)) // ---> 105
*/
/*
let num_1 = 10.50
let num_2 = 10.20
console.log(num_1 + num_2)  // ---> 20.7
*/

/*
let num_1 = "10.50"
let num_2 = 10.20
console.log(num_1 + num_2)  // ---> 10.5010.2
//num_1 = parseInt(num_1)
console.log(num_1 + num_2)  // ---> 20.2 Where 0.5 because of Int

num_1 = parseFloat(num_1)
console.log(num_1 + num_2)  // ---> 20.7
*/

// ----------------------> Number to String
/*
let num_1 = 50
let num_2 = 55
console.log(num_1 + num_2)  // ----> 105

num_1 = "" + num_1
console.log(typeof num_1)
console.log(num_1 + num_2)  // ----> 5055
*/