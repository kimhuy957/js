//video 54
document.addEventListener("DOMContentLoaded",function(){
    //khai bao cac bien can dung 
    var nut =document.querySelector('.nut');
    menutrai =document.querySelector('menutrai'),
    dem =document.querySelector('.den');
    trang=document.querySelector('.mautrang')
    khoito=document.querySelector('.noidungto'),
    //khi click vao nut xanh 
    nut.onclick = function(){
        dem.classList.add('len');
        // cho ca kho to dich sang phai 
        khoito.classList.add('lenphai');
        trang.classList.add('trangquay');
        menutrai.classList.remove('vetrai');

    }
    dem.onclick=function(){
        dem.classList.remove('len');
        // cho ca kho to dich sang phai 
        khoito.classList.remove('lenphai');
        trang.classList.remove('trangquay');
        menutrai.classList.add('vetrai');
    }
},false )