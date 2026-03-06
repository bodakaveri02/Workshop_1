// //object is nothing but paring of keys and values key:value
// let laptopObj={
//     name:"lenovo",
//     core: "ryzen",
//     cost:350000,
//     executeFn:()=>{
//         console.log("obj is executed");

//     },
// };
// // laptopObj.name="HP";
// // laptopObj["cost"]= 500000;
// // console.log(laptopObj);
// // //dot notation and [] notation
// // console.log(laptopObj.name);
// // console.log(laptopObj["core"]);
// // console.log(laptopObj.executeFn);
// // console.log();
// // laptopObj.executeFn();
// // let arr2=[1,2,3,4,5,6];
// // console.log(arr2.length); 
// for(let eachkey in laptopObj){ 
//     // console.log(eachkey);
//     console.log(laptopObj[eachkey]);
// }
// let arr2=[1,2,3,4,5];
// arr2.forEach((eachEle)=>{
//     console.log(eachEle);
// });
//es6 concept
//let,arrow function
//destructuring  extracting values from the array
// let arr3=[1,2,3,4,5,6];
// let[firstValue,secondVlue]=arr3;
// console.log(firstValue,secondVlue);
let laptopObj1={
    name:"lenovo",
    core: "ryzen",
    cost:350000,
    executeFn:()=>{
        console.log("obj is executed");

    },
};
let{core}=laptopObj1;

//templete literals
 let num1=1;
 let num2=4;
 console.log(`the sum of num1 & num2 is ${num1+num2}`);// used to  store and combine ....
 //rest operator convert an arry into individual elements
 let arr1=[1,2,3];
 let arr2=[4,5,6];
 let newArr=[...arr1, ...arr1, ...arr2];
 //spread operator it convert an indivdual elements into arrays ...
 function sum(...nums){
    console.log(nums);
 }
 sum(1,2);


