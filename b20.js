document,addEventListener('DOMContentLoaded',function(){
    var nut =document.querySelectorAll('.chuyentrang ul li');
    // nut tra ve mot nut 
    for (var i=0;i<nut.length;i++){
        nut[i].addEventListener('click',function(){
            // bo tat ca mau den di 
            for(var i=0;i<nut.length;i++){
                nut[i].classList.remove('kichhoat');
            }
            this.classList.add('kichhoat');
            // console.log(this.previousElementSibling);
            var nutkichhoat=this;
            var vt=0;
            for(vt=0;nutkichhoat=nutkichhoat.previousElementSibling;vt++){
                //  console.log('ben i '+i);
                //  console.log('phan tu nut kich hoat la '+nutkichhoat);
            }
            //het vong lap nay thi thi bien i= so thu tu
            console.log("vi tri cua phan thu cac class la "+vt)
        })
    }
})