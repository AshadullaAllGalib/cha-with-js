// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["Ironman", "Superman"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// +++++++++Array methods++++++++

// myArr.push(6) //Push method add element at the end of an array
// myArr.push(7)
// myArr.pop() // pop method remove last element of an array

// myArr.unshift(9) //same as push method but add element first
// myArr.shift() // same ad pop but remove first element 

// console.log(myArr.includes(9));// checking for 9 gives output true or false
// console.log(myArr.indexOf(3)); // check index given array

// const newArr = myArr.join() // join the array and convert in string

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr); //output:[0, 1, 2, 3, 4, 5]

const myn1 = myArr.slice(1, 3)
console.log(myn1);// output: [1, 2] 

console.log("B ", myArr);//output:[0, 1, 2, 3, 4, 5]

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);//output:[0, 4, 5]
console.log(myn2); // output: [1, 2, 3] 

// splice manupulate the original array