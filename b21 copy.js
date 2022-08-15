var nut =document.querySelector('.n1'),
khoi =document.querySelector('.khoi');
khoi.addEventListener('webkitAnimationEnd',function(){
    console.log("ket thuc chuyendong");
    this.classList.add('dixuong')
})
nut.addEventListener('click',function(){
    khoi.classList.add('chuyendong');
})
if(nut==null){
    console.log("khong co nut nao");
}
