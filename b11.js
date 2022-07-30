document.addEventListener('DOMContentLoaded',function(){
    var nut= document.getElementById('n1');
    var khoi = document.getElementsByClassName('container');
    nut.onclick = function(){
        khoi[0].classList.toggle('diphai');
    }
},false)
