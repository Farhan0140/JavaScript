
var StringType_1 = `Farhan Nadim (Type 1)` // ES6
var StringType_2 = 'Farhan Nadim (Type 2)'
var StringType_3 = "Farhan Nadim (Type 3)"
console.log(StringType_1)
console.log(StringType_2)
console.log(StringType_3)

console.log(typeof StringType_1)  //
console.log(typeof StringType_2)  //  Check Type
console.log(typeof StringType_3)  //


//-------------->Template literals (Template strings) ----------> ES6
var StringType_ES6 = `Farhan Nadim 'Yoo' "hhhddd"`
var String_ES6 = `frahan
 nadim 'Yoo' "tttt"
 "It also possible in ES6"`

// var String_ES5 = 'farhan 'jdjd' "dfd"'   // Error


// in ES5
var Name = "Farhan"
var age = 21
console.log("I am " + Name + " & i am " + age + "Year's Old")

// But in ES6
console.log(`I am ${Name} & I am ${age} Years Old`)



// ----------------> UpperCase, LowerCase

var Text = "Speakers at a roundtable today called for the immediate repeal of the Cyber Security Act (CSA), condemning it as a tool used by the fascist"
Text = Text.toUpperCase()
console.log(Text)
Text = Text.toLowerCase()
console.log(Text)


//----------> Split

var Text = "My Name is Farhan Nadim"
console.log(Text.split("Farhan"))


// ---------------->Index Of

var Text = "My Name is Farhan Nadim"
console.log(Text.indexOf("F"))

console.log(Text.indexOf("Farhan"))


// -----------> Parse Float & Parse Int -----------> String to Number

var num_1 = 55;
var num_2 = 50
console.log((num_1 + num_2)) // ----> 105

var num_1 = "55"
var num_2 = 50
console.log((num_1 + num_2)) // ---> 5550

num_1 = parseInt(num_1)
console.log((num_1 + num_2)) // ---> 105


var num_1 = 10.50
var num_2 = 10.20
console.log(num_1 + num_2)  // ---> 20.7




var num_1 = "10.50"
var num_2 = 10.20
console.log(num_1 + num_2)  // ---> 10.5010.2
//num_1 = parseInt(num_1)
console.log(num_1 + num_2)  // ---> 20.2 Where 0.5 because of Int

num_1 = parseFloat(num_1)
console.log(num_1 + num_2)  // ---> 20.7


// ----------------------> Number to String

var num_1 = 50
var num_2 = 55
console.log(num_1 + num_2)  // ----> 105

num_1 = "" + num_1
console.log(typeof num_1)
console.log(num_1 + num_2)  // ----> 5055
