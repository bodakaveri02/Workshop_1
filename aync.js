console.log("executed -1");//1

setTimeout(()=>{
    console.log("Inside the set timeout");//4
},100);
console.log("executed -2");//2
console.log("executed -3");//3 
//javascript is a single threaded language -> it will execute the task one by one
//because of evenrt loop the tasks are executed simultaneously
 //synchronous one by one the code will be executed
 //asynchronous tasks are executed simultaneously (example: setTiomeout, setInterval, api calling)
