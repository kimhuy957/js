console.log("hi");
var anh =document.querySelectorAll('.cacanh img');
for (var i = 0; i < anh.length; i++) {
  anh[i].addEventListener('click',function(){
    console.log("first")
    console.log(this);
  });
}