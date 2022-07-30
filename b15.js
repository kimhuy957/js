document.addEventListener("DOMContentLoaded",function(){
     var nut=document.getElementsByClassName("declick");
     console.log(nut);
     var nd =document.getElementsByClassName("dehienthi")
    for (let i = 0; i < nut.length; i++) {
        nut[i].onclick = function () {
            console.log(this.classList[1]);
           if(this.classList[1]=='trang'){
               console.log("day la trg hop dang su ly");
                this.classList.remove('trang');
                var ndhienra=this.getAttribute('data-hienlen');
                var phan_tu_hien_ra=document.getElementById(ndhienra);
                phan_tu_hien_ra.classList.remove('ra1');
            }
            else{
            for(var k=0;k<nut.length;k++){
                nut[k].classList.remove('trang');
            }
            this.classList.toggle("trang");


            var ndhienra=this.getAttribute('data-hienlen');
            var phan_tu_hien_ra=document.getElementById(ndhienra);
                 
            for(var i=0; i<nd.length;i++){
                nd[i].classList.remove('ra1')
            }
             phan_tu_hien_ra.classList.toggle('ra1'); 
            }

            
          }
        
    }
},false)
