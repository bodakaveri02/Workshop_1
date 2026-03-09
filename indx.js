let btn1Obj = document.getElementById("btn1");
let btn2Obj = document.getElementById("btn2");
let para1Obj= document.createElement("p");
let divObj= document.createElement("div");
let bodyCollection =document.getElementsByTagName("body");
let bodyObj=bodyCollection[0];
btn1Obj.addEventListener("click", function () {
    para1Obj.innerHTML = "Bearish view on BTCUSO";
    para1Obj.style.color = "purple";
    para1Obj.style.fontSize = "40px";
    document.body.appendChild(para1Obj);
});

btn2Obj.addEventListener("click", function () {
    para1Obj.innerHTML = "Global Stock Exchange";
    para1Obj.style.color = "orange";
    para1Obj.style.fontSize = "40px";
    document.body.appendChild(para1Obj);
});

