//primitive data types: string,boolean,number, null, & undefined
//"string" 'string'
//non_primitive : objects
//garbage value is called undefined
let person=null;
console.log(person);

//operators:arithmetic:* +,-,/,%
//logical: &&,||
//comparision: ==(loose equality/compare values),===(strict equality/)

let num1=10;

let num2="10";
console.log(num1==num2);//checks the values
console.log(num1===num2);//checks the data types

//conditional statements
let n=10;
if(n>3){
    console.log("True");
}
else{
    console.log("False");
}
condition? statement1:statement2;//ternanry operator
n1>3? console.log("Yrue"): console.log("False");
