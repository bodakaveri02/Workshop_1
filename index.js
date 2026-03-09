//console.log("JS loaded");
let btn1Obj = document.getElementById("btn1");
let btn2Obj = document.getElementById("btn2");
//let para1Obj= document.createElement("p");
//let divObj=document.getElementById("container");
//let divObj= document.createElement("div");
//console.log(typeof btn1Obj);
//let bodyObj1=document.getElementsByTagName("body");
//console.log(btn1Obj,"body Object");
let bodyCollection =document.getElementsByTagName("body");
let bodyObj=bodyCollection[0];
let pElement=document.createElement("p");

//click
//addEventListener listens the event whenever a click take automatic function callesd callbackFun
btn1Obj.addEventListener("click", function() {
    pElement.innerHTML="bearish view on STCUSDD";
    pElement.style.color="blue";
    pElement.style.fontSize="40px";
    bodyObj.appendChild(pElement);
    //console.log("Btn 1 is clicked");
   // let para1Obj = document.createElement("p");
   // console.log(para1Obj);
    //para1Obj.innerHTML="bearish view on STCUSDD";
    //para1Obj.style.color="blue";
    //para1Obj.style.fontSize="40px";
    //document.body.appendChild(divObj);
    //divObj.appendChild(para1Obj);
  //  console.log(para1Obj);
  //  bodyObj.appendChild(para1Obj);
   // document.body.appendChild(para1Obj);
    //appendChild
    //innerHTML
    //innerText
});
//how to creat an event dynamically
//createElement() use to create a elemnet inside a document
btn2Obj.addEventListener("click", function (){
    pElement.innerHTML="Global stock exchange";
    pElement.style.color="red";
    pElement.style.fontSize="40px";
    document.body.appendChild(pElement);
    //  para1Obj.innerHTML="Global stock exchange";
    //  para1Obj.style.color="orange";
    //  para1Obj.style.fontSize="40px";
    //  document.body.appendChild(para1Obj);
});