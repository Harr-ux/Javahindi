const myArr = [0,1,2,3,4,5,6]
const myArr2 = new Array(1,3,5,7);
// console.log(myArr2[1]);
myArr2.push(6);
// console.log(myArr2);
myArr2.unshift(56);
// console.log(myArr2);
myArr2.shift(56);
// console.log(myArr2);
const newArr = myArr2.join()
// console.log(myArr2);
// console.log(newArr);
// slice 
console.log("A",myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B" ,myArr);
const myn2 = myArr.splice(1,3);
console.log("C",myArr);
console.log(myn2);