let myarr = ['advertisement', 'apple', 'aftershave', 'safe', 'ant', 'alphabet', 'asparagus', 'aardvark', 'aeronautics', 'aficionado',
'safari', 'affluent', 'saffron', 'aflame', 'safari', 'affect', 'safety', 'affix', 'aftershock', 'aflatoxin',
'salmon', 'artifact', 'aft', 'affable', 'scaffold', 'affectation', 'salad', 'affirmation', 'safeguard', 'affectionate',
'safety', 'safflower', 'aforementioned', 'aardwolf', 'saffron', 'salvation', 'affluent', 'safari', 'aftershock', 'aflame',
'affix', 'sage', 'aesthetic', 'aftermath', 'salutary', 'aftershave', 'salubrious', 'affinity', 'safeguard', 'salvage',
'affirmative', 'affliction', 'sagebrush', 'aficionado', 'saga', 'salvador', 'aflatoxin', 'aflame', 'saffron', 'aeronautics',
'aft', 'affable', 'affectation', 'salad', 'affirmation', 'safety', 'affix', 'aftershock', 'aflatoxin', 'salmon',
'artifact', 'aft', 'affable', 'scaffold', 'affectation', 'salad', 'affirmation', 'safeguard', 'affectionate', 'safety',
'safflower', 'aforementioned', 'aardwolf', 'saffron', 'salvation', 'affluent', 'safari', 'aftershock', 'aflame', 'affix',
'sage', 'aesthetic', 'aftermath', 'salutary', 'aftershave', 'salubrious', 'affinity', 'safeguard', 'salvage', 'affirmative',
'affliction', 'sagebrush', 'aficionado', 'saga', 'salvador']
// for (let index = 0; index < myarr.length; index++) {
//     const element = myarr[index];
//     console.log(element);
// }


// for (let index = 0; index < myarr.length; index++) {
//     if(index === 1){
//         break
//     }
//     const element = myarr[index];
//     console.log(element);
// }


// let i = 0;

// while (i < myarr.length && myarr[i] !== 'salutary') {
//     console.log(myarr[i]);
//     i++;
// }


// for (const iterator of myarr) {
//     console.log(iterator);
// }

// const map = new Map()
// map.set("1","adi")
// map.set("2", "john")
// map.set("3", "sara")
// map.set("4", "alex")
// map.set("5", "emma")
// map.set("6", "ryan")
// map.set("7", "lily")
// map.set("8", "michael")
// map.set("9", "olivia")
// map.set("10", "david")
// map.set("11", "grace")


// for (const [key,values] of map) {
//     console.log(key,":-",values);
// }


// const myarr = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const key in myarr) {
//    console.log(key.valueOf);
// }


// for (const key in myarr) {
//     console.log(`${key} is for ${myarr[key]}`);
// }



// for (const key in myarr) {
//     console.log(myarr[key]);
// }

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }


// const newarr = myarr.forEach( (item) => (console.log(item)));

// let newarray = [1,2,3,4,5,6,7,8,9,10]

// let ft = newarray.filter((item) => item >= 5)
// console.log(ft);


// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

//   let bk_usr = books.filter((item) => item.genre === "Science")
//   console.log(bk_usr);
//   bk_usr = books.filter((item) => (item.genre === "Non-Fiction")).filter((item) => item.edition > 1999)
//   console.log(bk_usr);

// let newarey = [1,2,3,4,5,6,7,8,9,10]

// let newops = newarey
//                     .map((item) => item * 10 )
//                     .map((item) => (((item  + 1) * 4) - 13))
//                     .filter((item) => item > 38 )
// console.log(newops);

const newobj = [
    {
        COURSE:"JS",
        PRICE:538
    },
    {
        COURSE:"REACT",
        PRICE:299
    },
    {
        COURSE:"ML",
        PRICE:100
    },
]
let PRICE = newobj.reduce((acc,cv) => acc + cv.PRICE , 0)
console.log(PRICE);