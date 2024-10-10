//------------> For


for(var i=0; i<10; i++) {
    console.log(i)
}


// Even Number

for(var i=0; i<10; i++) {
    if(i%2 != 1) {
        console.log(i)
    }
}



var arr = [1, "nadim", 100, 10.2, "farhan"]

for(var i=0; i<arr.length; i++) {
    console.log(arr[i])
}




var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var sum = 0

for(var i=0; i<nums.length; i++) {
    sum += nums[i]
}
console.log(sum) //----> 55




//--------------> For of Loop & For in Loop --------->ES6

var Arr = [1, 2, 3, 4, 5, "Nadim", 6, 7]

for(Element of Arr) {    // return Array elements one by one 
    console.log(Element) // 1. Element = Arr[0]--> print,, 2. Element = Arr[1]--> Print,, ........ Last Porjonto
}                        // It return objects Value

// but in For(ele in Arr) // return only index number of Array

for(Element in Arr) {
    console.log(Element) //--> 0 1 2 3 4 5 6 7 || return all Index
}                        // it return only Object Names 




//-------------------> While



var i=0
while(i < 10) {
    console.log(i)
    i++
}


var i=0
while(true) {
    i++
    
    if(i == 10) {
        continue
    }

    console.log(i)

    if(i == 20) {
        break
    }
}