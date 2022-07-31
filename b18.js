document.addEventListener('DOMContentLoaded', function() {
    var trangthai='duoi300';
    //lay ve menu
    var doimenu=document.querySelector('.menu');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset >300) {   
            if (trangthai=='duoi300') { 
            trangthai='tren300';    
            doimenu.classList.add('nholai');
        }}
        else if(window.pageXOffset<=300){
            if(trangthai=='tren300'){
                doimenu.classList.remove('nholai');
                trangthai='duoi300';
            
        }}
    })
    })
