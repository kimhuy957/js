document.addEventListener("DOMContentLoaded",function(){
var nut=document.getElementById('nutnay');
var khoi=document.getElementById("kcd")
var trangthai="lan1";
nut.onclick=function(){
    if(  trangthai=="lan1"){
        console.log("Click lan 1");
        trangthai="lan2";
        khoi.classList.remove("kocd");
        khoi.classList.add("chieuso1");
        //xu lu code cho viec hieu ung lan1
    }
    else if(trangthai=="lan2"){
        console.log("Click lan 2");
        trangthai="lan1";
        khoi.classList.remove("chieuso1")
        //xu lu lan 2 
    }
}
},false)