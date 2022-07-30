document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll',function(){
         console.log(window.pageYOffset);
        if(window.pageXOffset>1000){
            console.log("den roi");
        
        }
    })
})