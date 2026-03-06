// function greet(){
//     console.log("hello good morning");
// }
// greet();
// //function expression
// let callFirstName= function(){
//     console.log("Kaveri");
// };
// callFirstName();

// //arrow funtion 
// let arrowFn=()=>{
//     console.log("this is arrow function");
// };
// arrowFn();

// //parameter and arguments

// function Sum(a,b){
//     console.log(a,b);
// }
// Sum(2,3);
// Sum(3,4);

// //arrays can store any  type of data in js ( is an object )
// let arr1=[1,true,"hello"];
// //console.log(arr1);
// console.log(arr1[0]);
// arr1[0]="2";
// console.log(arr1);
  
// //methos or arrmethods it is the function which re executed on objects
// //push() pop()
// let arr2=[1,2,3,4,5,6];
// //let newArr2=[2,4,6,8,10,12];
// console.log(typeof arr2);
// // arr2.push(7);
// // arr2.pop();
// //let newarr2=arr2.slice(1, 4);
// //console.log(newarr2);
// //function calling functionName()

// //map method is nothing but looping function (it iterate each element in the terminal)
// let newarr2= arr2.map((ele, index)=>{
//     return ele * 2;
//    // console.log(ele,index);

//  });
//  let newarr3=arr2.map((ele,index)=>ele/2); 
//  console.log(newarr3);

//  //filter method use to filter the arry basend on conditons
//  let arr=[1,2,3,4,5,6];
//  //let newarr=[1,2,3,4];
//  let newarr=arr.filter((ele,index)=>{
//     return ele<5;
//  });
//  console.log(newarr);
//  //let newarr=arr.filter((ele,index)=>ele<5);

//  //find method
 let arr4=[1,2,3,4,5,6];
 let newarr4=arr4.find((ele,index)=>{
    return ele ===3;
 });
 console.log(newarr4);
  
