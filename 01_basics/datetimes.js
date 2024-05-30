let myDate = new Date()
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString());

let CreatedDate = new Date("01-12-23")
console.log(CreatedDate.toDateString())

let myTimeStam = Date.now()
console.log(myTimeStam);
console.log(CreatedDate.getDate());
console.log(Math.floor(Date.now()/1000));