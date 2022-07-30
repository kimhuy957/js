document.addEventListener("DOMContentLoaded", function(){
    var trangthai='duoi300';
    window.addEventListener('scroll',function(){
         console.log(window.pageYOffset);
        if(window.pageXOffset>300){
            ìf(trangthai=='duoi300')
            {
                console.log('duoi 300');
                trangthai='tren300';
            }
            // console.log('den roi');
        
        }
    })
})