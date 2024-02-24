// let arr = [5,10,15,20,30,40,50,60];
// let number = 30;
// function largeNumber(){
//     let newArr=[];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i]>number){
//             newArr.push(arr[i]);
            
//         }
//     }
//     return newArr;
// }
// console.log(largeNumber());

// Q2

// let str = "abcdabcdefggg";

// function uni(str){
//     let newStr = ""
//     for(let i = 0; i < str.length;i++){
//         let current = str[i];
//         if(newStr.indexOf(current)==-1){
//             newStr += current+" ";
//         }
//     }
//     return newStr;
// }
// console.log(uni(str));

// let country = ["Australia" ,"Germany","United States of America"];

// function longestStr(country){
//     let max = 0;
//     let ans ="";
//     for(let i = 0; i < country.length; i++){
//         // console.log(country[i].length);
//         if(country[i].length > max){
//             max = country[i].length;
//             ans = country[i];
//         }
//     }
//     return ans;
// }
// console.log(longestStr(country));


// let str = "abcdefghijklmnopqrstuvwxyz"

// function vowelCount(str){
//     let count = 0;
//     for(let i=0; i<str.length; i++){
//         console.log(str.charAt(i));
//         if(str[i]==("a") || str[i]==("e") || str[i]==("i") || str[i]==("o")||str[i]==("u")){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(vowelCount(str));


// function random(start,end){
//     range = end-start;
//     let number = Math.floor(Math.random()*range)+start;
//     return number;
// }
// console.log(random(100,115));

// const sum = (a,b) => (a + b);

// console.log(sum(24,11));

// const student =  {
//  name: "CK ",
//  marks : 95,
//  prop :this, //global scope 
//  getName : function(){
//     console.log(this) //called by object (object scope)
//     return this.name
//  },
//  getName2 : ()=>{
//     console.log(this) // parents scope
//     return this.name
// },
//  getInfo1 : function (){
//     setTimeout(()=>{
//         console.log(this) //student
//     },2000)
//  },
//  getInfo2 : function (){
//     setTimeout(function(){
//         console.log(this) //window
//     },2000)
//  }
// }

// let sqrt = (n) => n**2;
// console.log(sqrt(25));

// let id = setInterval(()=>{
//    console.log("Hello World");
// },2000);
// setTimeout(()=>{
//    clearInterval(id);
//    console.log("Clear Interval done")
// },10000)

// let arr = [1,2,3,4,5,6,7,8,9,10];
// let arrAvg = (arr)=>{
//    let sum = 0;
//    for (let i=0; i<arr.length; i++){
//       sum+=arr[i];
//    }
//    return sum;
// }
// console.log(arrAvg(arr));

// let isEven = (a) => a%2 === 0? console.log("number is Even"):console.log("number is odd")
// isEven(232);

// const object = {
//     message : "Hello, World!",
    
//     logMessage(){
//         console.log(this.message);
//     }

// };
// setTimeout(object.logMessage,1000);


// let length = 4;
// function callback(){
//     console.log(this.length)
// }

// const object = {
//     length : 5,
//     method(callback){
//         // console.log(this.length)
//         callback();
//     },
// };
// object.method(callback);