let arr = [1, "nadim", 100, 10.2, "farhan"]

/*
console.log(arr)  //--> [ 1, 'nadim', 100, 10.2, 'farhan' ]
console.log(arr[1])  //---> nadim
console.log(arr[3])  //---> 10.2
console.log(arr[4])  //---> farhan

arr[1] = 999
console.log(arr)  //--> [ 1, 999, 100, 10.2, 'farhan' ]
*/

//------------------> Push(), pop(), shift(), unshift()
/*
console.log(arr);  //--> [ 1, 'nadim', 100, 10.2, 'farhan' ]

arr.push("Yoo")
console.log(arr);  //--> [ 1, 'nadim', 100, 10.2, 'farhan', 'Yoo' ]
arr.push(0.232)
console.log(arr);  //--> [ 1, 'nadim', 100, 10.2, 'farhan', 'Yoo', 0.232 ]


arr.pop();
arr.pop();
console.log(arr);  //--> [ 1, 'nadim', 100, 10.2, 'farhan' ]

arr.shift()
arr.shift()
console.log(arr)  //--> [ 100, 10.2, 'farhan' ]

arr.unshift("Yooo")
arr.unshift(99.99)
console.log(arr) // ---> [ 99.99, 'Yooo', 100, 10.2, 'farhan' ]
*/

//----------------> slice() and splice()

/*
console.log(arr) //---> [ 1, 'nadim', 100, 10.2, 'farhan' ]
console.log(arr.slice(2,3)) //---> 100 // (2-3) = 1
console.log(arr.slice(0,3)) //---> [ 1, 'nadim', 100 ] // (0-3) = 3
console.log(arr.slice(3, 5)) //---> [ 10.2, 'farhan' ] // (5-3) = 2
console.log(arr.slice(2)) //---> [ 100, 10.2, 'farhan' ] // (2 to last+1)
*/

console.log(arr) //---> [ 1, 'nadim', 100, 10.2, 'farhan' ]
arr.splice(0, 2, "Farhan Nadim")
console.log(arr) //---> [ 'Farhan Nadim', 100, 10.2, 'farhan' ]
arr.splice(0, 2)
console.log(arr) //---> [ 10.2, 'farhan' ]
arr.splice(1, 2, 99, 9.99, "Yoo", 99999)
console.log(arr) //---> [ 10.2, 99, 9.99, 'Yoo', 99999 ]

console.log(arr.length) //---> 5