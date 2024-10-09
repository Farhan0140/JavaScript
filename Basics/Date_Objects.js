let date = new Date();


console.log(date.toTimeString()) // --> 09:57:19 GMT+0600 (Bangladesh Standard Time)
console.log(date.toLocaleString()) // --> 10/9/2024, 9:58:59 AM
console.log(date.toLocaleTimeString()) // ---> 10:00:07 AM
console.log(date.toLocaleDateString()) // ---> 10/9/2024
console.log(date.getMonth()) //---> 9 // start from 0
console.log(date.getDate()) // ---> 9 --> start from 1
console.log(date.getFullYear()) // ---> 2024
console.log(date.getSeconds()) // ---> 15
console.log(date.getMilliseconds()) //---> 499