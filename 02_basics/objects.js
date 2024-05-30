// const tinderuser = {}

// tinderuser.id = 1
// tinderuser.name = 'naimesh'
// tinderuser.age = 'about to end'

// const newuser = {
//     email: "adi@apple.com",
//     fullname:{
//         userfullname:{
//             firstname:"aditya",
//             lastname:"Nagariya"
//         }
//     }
// }

// console.log(newuser.fullname.userfullname.firstname);

// const obj1 = {1:'a', 2:'b'}
// const obj2 = {3:'c', 4:'d'}
// const obj3 = {5:'e', 6:'f'}

// const obj = {...obj1,...obj2,...obj3}
// console.log(obj);


// const users = [
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
// ]

// console.log((users[1].email))


const course = {
    instructure:'God',
    price:'life',
    coursename:'LiveLifo'
}

const {instructure : inst} = course
console.log(inst);