const mySym = Symbol("Key")

const jsuser =  {
    name: "Aditya",
    [mySym]: "myKey",
    "fullname": "Aditya Nagariya",
    age : 20,
    email : "aditya@apple.com"
}

// console.log(jsuser.email);
// console.log(jsuser[mySym])
// console.log(jsuser)
// // Object.freeze(jsuser)
// jsuser.name = "Adi"
// console.log(jsuser);

jsuser.greeting = function() {
    console.log(`Hello Js User ${this.name}`);
}
console.log(jsuser.greeting());


