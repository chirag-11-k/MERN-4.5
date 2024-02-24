// let arr = [10,30,20,40];
// let newArr =  arr.every((el)=> el % 10 ===0);
// console.log(newArr);

// let arr2 = [14,22,3,4,10,22,12,11]
// let newArr2 = arr2.reduce((acc, el)=>{
//   if(acc>el){
//     return el;
//   }
//   else{
//     return acc;
//   }
// })
// console.log(newArr2);

// const defaultParameter = (a,b=3) => a + b;

// console.log(defaultParameter(4));

// console.log(..."Chirag Kuriya")
// console.log([1,2,3,4])
// console.log(...[1,2,3,4])
// let arr = [101,30,20,40];

// let min = Math.min(...arr)
// console.log(min)

// let names = ["tony","steve","peter","bruce"]

// let [winner,runnerup, ...losers] = names;

// console.log(winner)
// console.log(runnerup)
// console.log(losers)


// let student = {
//     name : "ck",
//     age : 20,
//     id : 18,
//     username : "acb",
//     password : "134abc",
//     city : "surat"
// };
 
// let {username : user , password:secret , city = "ahmedabad"} = student;

let arr = [1,2,3,4,5]

let newArr = arr.map((el)=>el**2).reduce((acc,el)=>acc+el);
console.log(newArr/arr.length);