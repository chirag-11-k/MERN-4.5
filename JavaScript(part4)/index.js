// let arr=[1,2,3,4,5,6,2,3];
// let num = 3;

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] === num){
//         arr.splice(i, 1);
//     }
// }
// console.log(arr);

// Write a JS program to find the no of digits in a number
// let number = 28152;
// let numberofDigits=0;
//  while(number != 0){
//     // reminder = number % 10;
//     numberofDigits++;
//     number = Math.floor(number/10);
//  }
//  console.log(numberofDigits);

//  Write a JS program to find the sum of digits in a number

// let number = 2871523111;
// let sum = 0;
// while(number != 0){
//     reminder = number % 10;
//     sum += reminder;
//     number = Math.floor(number/10);
// }
// console.log(sum);

//  let number =5;
//  for(let i = number-1; i >0 ; i--){
//     number *= i;
//  }
//  console.log(number);

//  let arr = [1,14,8,2,11,13];
//  let largest = arr[0];
//  for(let i = 0; i < arr.length; i++){
//     if(largest<arr[i]){
//         largest = arr[i];
//     }
//  }
//  console.log(largest);

// const car =  {
//    name : "Mercedes",
//    model : "Maybech",
//    color : "white"
// }
// console.log(car["name"]);

const person = {
   name : "Virat kohli",
   age : 35,
   city :"Delhi"
}
person.city = "Banglore";
person["country"]= "Bharat"
console.log(person );