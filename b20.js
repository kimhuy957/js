document,
  addEventListener("DOMContentLoaded", function () {
    var nut = document.querySelectorAll(".chuyentrang ul li");
    var slides = this.document.querySelectorAll(".cacslide ul li");
    console.log(slides);
    var thoigian = setInterval(function () {autoslide()}, 4000);
    // nut tra ve mot nut
    for (var i = 0; i < nut.length; i++) {
      nut[i].addEventListener("click", function () {
        // truowc tien phai huy di hieu ung
        clearInterval(thoigian);
        // bo tat ca mau den di
        for (var i = 0; i < nut.length; i++) {
          nut[i].classList.remove("kichhoat");
        }
        this.classList.add("kichhoat");
        // console.log(this.previousElementSibling);
        var nutkichhoat = this;
        var vt = 0;
        for (vt = 0; (nutkichhoat = nutkichhoat.previousElementSibling); vt++) {
          //  console.log('ben i '+i);
          //  console.log('phan tu nut kich hoat la '+nutkichhoat);
        }
        //het vong lap nay thi thi bien i= so thu tu
        console.log("vi tri cua phan thu cac class la " + vt);
        for (var i = 0; i < slides.length; i++) {
          slides[i].classList.remove("active");
          slides[vt].classList.add("active");
        }
      });
    }
    autoslide();
    function autoslide() {
      
        var vitrislide = 0;
        var slidehientai = document.querySelector(".cacslide ul li.active");
        // console.log(slidehientai.previousElementSibling);
        // console.log(slidehientai);
        for (
          vitrislide = 0;
          (slidehientai = slidehientai.previousElementSibling);
          vitrislide++
        ) {}
        if (vitrislide < (slides.length - 1)) {
          for (var i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
            nut[i].classList.remove("kichhoat");
          }
          slides[vitrislide].nextElementSibling.classList.add("active");
          nut[vitrislide].nextElementSibling.classList.add("kichhoat");
        } else {
          for (var i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
            nut[i].classList.remove("kichhoat");
          }
          slides[0].classList.add("active");
          nut[0].classList.add("kichhoat");
        }
      
    }
  });
