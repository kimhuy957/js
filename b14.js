//video 43
document.addEventListener("DOMContentLoaded",function(){
    var nut = document.getElementsByClassName('nuttq');
        for (var i = 0; i < nut.length; i++) {
           nut[i].onclick=function(){
            console.log(this.getAttribute('data-pass'));

           }
            
        }
//     nut.onclick=function(){
//     var pass=nut.getAttribute('data-pass');
//     console.log(pass);
// }
},false)