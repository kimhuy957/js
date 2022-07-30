//video 32
// var x= document.querySelectorAll('.n1');
// x[0].classList.remove('btn-outline-info');
// x[0].classList.add('btn');
// x[0].classList.add('btn-block');
// x[0].classList.add('btn-warning');
 
// var x3=document.querySelectorAll('.n3');
// x3[0].classList.toggle('btn');
document.addEventListener("DOMContentLoaded",function(){

    var x=document.getElementById('n1');
    console.log(x);
    x.onclick=function(){
        console.log("ban vua cham vao toi"+x);
        x.classList.add('dixuong');
    }
},false)
