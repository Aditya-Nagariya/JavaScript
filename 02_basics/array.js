let myarr = ['dad','mahadev','krishna']
let arr = [1,2,3,4,5,6,7,8,9]
console.log(arr[5])

arr.push(10)
console.log(arr);
arr.pop()
console.log(arr);



arr.shift()
console.log(" shift "+ arr);
console.log();
arr.unshift(9)
console.log(' unshift '+arr);
console.log();

arr.includes(5)
console.log(" includes "+arr);
console.log();
arr.indexOf(4)
console.log(" indexof "+arr);
console.log();

arr2 = [10,11,12,13,14]

const newarray = myarr.join()
console.log(newarray);
console.log();

const myarr2 = arr.slice(1,3)
console.log(" Slice " + myarr2);
console.log();

console.log("Splice"  + arr);
let myarr3 = arr.splice(3,6)
console.log();
console.log("splice"+myarr3);
console.log();
console.log(arr);

