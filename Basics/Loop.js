//------------> For

/*
for(let i=0; i<10; i++) {
    console.log(i)
}
*/

// Even Number
/*
for(let i=0; i<10; i++) {
    if(i%2 != 1) {
        console.log(i)
    }
}
*/

/*
let arr = [1, "nadim", 100, 10.2, "farhan"]

for(let i=0; i<arr.length; i++) {
    console.log(arr[i])
}
*/

/*
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = 0

for(let i=0; i<nums.length; i++) {
    sum += nums[i]
}
console.log(sum) //----> 55
*/


//-------------------> While

/*
let i=0
while(i < 10) {
    console.log(i)
    i++
}
*/

let i=0
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