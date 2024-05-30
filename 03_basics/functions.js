// function myname() {
//     console.log('A');
//     console.log('d');
//     console.log('i');
//     console.log('t');
//     console.log('y');
//     console.log('a');
// } 
// myname()

// function addnum(num1,num2){
//     if((typeof num1) == int && (typeof num2) == int){
//         return num1 + num2
//     }
//     else{
//     return console.log("Please Enter Valid Number");
//     }
// }

// addnum(1,2)

function arr(...num){
    return console.log(num);
}

arr(1,2,3,4,5,6,7,8,9)


function usr(anyobject){
    console.log(`${anyobject.username} is the result ${anyobject.age}`);
} 

usr({
    username:"aditya",
    age:"20"
})

mynewarr = [1,2,3,4,5,6,7,8,9]

function user(getarray){
    return getarray[0]
}

console.log(user(mynewarr));