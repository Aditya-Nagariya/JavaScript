const clock = document.getElementById('clock')

let date = new Date();
console.log(date.toLocaleTimeString());

setInterval(()=>{
    let date = new Date();
    console.log(date.toLocaleTimeString());
},1000);