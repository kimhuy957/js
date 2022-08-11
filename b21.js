var nutphai = document.querySelector(".nuts b.phai"),
  nuttrai = document.querySelector(".nuts b.trai"),
  slides = document.querySelectorAll(".slides ul li"),
  chisohientai = 0,
  soluongslide = slides.length,
  trangthai = "dangdungyen";
 

//goi su kien click vao nut phai
var chuyenslidechonutphai = function () {
  //kiem tra luon
  if (trangthai == 'dangchuyendong') {
    return false;
  }

  
  trangthai = "dangchuyendong";
var trangthaicua2chuyendong = 0;
  var phantuhientai = slides[chisohientai];
  if (chisohientai < soluongslide - 1) {
    //chua den cuoi
    chisohientai = chisohientai + 1;
  } else {
    //la phantu cuoi cung
    chisohientai = 0;
  }
  var phantutieptheo = slides[chisohientai];
  var xulyhientaiketthuc = function () {
    console.log("slide hientai da xong roi1");
    this.classList.remove('dangxem');
    this.classList.remove('bienmatkhian');
    trangthaicua2chuyendong++;
    if (trangthaicua2chuyendong == 2) {
      trangthai = 'dangdungyen';
    }
  }

  var xulytieptheoketthuc = function () {
    console.log("slide tiep theo da xong roi");
    this.classList.remove("divaokhian");
    this.classList.add("dangxem");
    trangthaicua2chuyendong++;
    if (trangthaicua2chuyendong == 2) {
      trangthai = 'dangdungyen';
    }
  }

  phantutieptheo.addEventListener("webkitAnimationEnd", xulytieptheoketthuc);
  phantuhientai.addEventListener("webkitAnimationEnd", xulyhientaiketthuc);
  phantuhientai.classList.add("bienmatkhian");
  phantutieptheo.classList.add("divaokhian");
};

nutphai.addEventListener("click", chuyenslidechonutphai);
//xong nuts phai

var chuyenslidechonuttrai= function () {
  
}
nuttrai.addEventListener("click", chuyenslidechonuttrai);