var x=5;
var  ketqua='';


ketqua=(x<100)?"nho hon 100":"lon hon hoac 100";
console.log(ketqua);



var nutphai = document.querySelector(".nuts b.phai"),
  nuttrai = document.querySelector(".nuts b.trai"),
  slides = document.querySelectorAll(".slides ul li"),
  chisohientai = 0,
  soluongslide = slides.length,
  trangthai = "dangdungyen";

function xacdinh2slide(nutnao) {
  if (trangthai == "dangchuyendong") {
    return false;
  }
  trangthai = "dangchuyendong";
  var trangthaicua2chuyendong = 0;
  var phantuhientai = slides[chisohientai];
  if (nutnao == "trai") {
    console.log("hihi1");
    if (chisohientai > 0) {
      //chua den cuoi
      chisohientai--;
    } else {
      //la phantu cuoi cung
      chisohientai = soluongslide - 1;
    }
   
  } else if (nutnao == "phai") {

    console.log("hihi2");
    if (chisohientai < soluongslide - 1) {
          //chua den cuoi
          chisohientai++;
        } else {
          //la phantu cuoi cung
          chisohientai = 0;
        }
        
  }
  var phantutieptheo = slides[chisohientai];
    var xulyhientaiketthuc = function () {
      console.log("slide hientai da xong roi1");
      this.classList.remove("dangxem");
      if(nutnao == "trai"){
        this.classList.remove("bienmatkhianperv");
      }
      else if(nutnao == "phai"){
        this.classList.remove("bienmatkhian");
      }
      trangthaicua2chuyendong++;
      if (trangthaicua2chuyendong == 2) {
        trangthai = "dangdungyen";
      }
      console.log(slides[chisohientai]);
    }

    var xulytieptheoketthuc = function () {
      console.log("slide tiep theo da xong roi");
      if(nutnao == "trai"){
        this.classList.remove("divaokhianperv");
      }
      else if(nutnao == "phai"){
        this.classList.remove("divaokhian");
      }
      
      this.classList.add("dangxem");
      trangthaicua2chuyendong++;
      if (trangthaicua2chuyendong == 2) {
        trangthai = "dangdungyen";
      }
    }

    phantutieptheo.addEventListener("webkitAnimationEnd", xulytieptheoketthuc);
    phantuhientai.addEventListener("webkitAnimationEnd", xulyhientaiketthuc);
  if(nutnao=="trai"){
        phantuhientai.classList.add("bienmatkhianperv");
    phantutieptheo.classList.add("divaokhianperv");
  }
  else if(nutnao=="phai"){
        phantuhientai.classList.add("bienmatkhian");
    phantutieptheo.classList.add("divaokhian");
  }
}
//goi su kien click vao nut phai
var chuyenslidechonutphai = function () {
  //   //kiem tra luon
  //   if (trangthai == "dangchuyendong") {
  //     return false;
  //   }

  //   trangthai = "dangchuyendong";
  // var trangthaicua2chuyendong = 0;
  //   var phantuhientai = slides[chisohientai];
  //   if (chisohientai < soluongslide - 1) {
  //     //chua den cuoi
  //     chisohientai = chisohientai + 1;
  //   } else {
  //     //la phantu cuoi cung
  //     chisohientai = 0;
  //   }
  //   var phantutieptheo = slides[chisohientai];
  //   var xulyhientaiketthuc = function () {
  //     console.log("slide hientai da xong roi1");
  //     this.classList.remove("dangxem");
  //     this.classList.remove("bienmatkhian");
  //     trangthaicua2chuyendong++;
  //     if (trangthaicua2chuyendong == 2) {
  //       trangthai = "dangdungyen";
  //     }
  //     console.log(slides[chisohientai]);
  //   }

  //   var xulytieptheoketthuc = function () {
  //     console.log("slide tiep theo da xong roi");
  //     this.classList.remove("divaokhian");
  //     this.classList.add("dangxem");
  //     trangthaicua2chuyendong++;
  //     if (trangthaicua2chuyendong == 2) {
  //       trangthai = "dangdungyen";
  //     }
  //   }

  //   phantutieptheo.addEventListener("webkitAnimationEnd", xulytieptheoketthuc);
  //   phantuhientai.addEventListener("webkitAnimationEnd", xulyhientaiketthuc);
  //   phantuhientai.classList.add("bienmatkhian");
  //   phantutieptheo.classList.add("divaokhian");
  xacdinh2slide("phai");
};

//xong nuts phai

var chuyenslidechonuttrai = function () {
  //   if (trangthai == "dangchuyendong") {
  //     return false;
  //   }

  //   trangthai = "dangchuyendong";
  // var trangthaicua2chuyendong = 0;
  //   var phantuhientai = slides[chisohientai];
  //   if (chisohientai >0) {
  //     //chua den cuoi
  //     chisohientai--;
  //   } else {
  //     //la phantu cuoi cung
  //     chisohientai = soluongslide - 1;
  //   }
  //   var phantutieptheo = slides[chisohientai];
  //   var xulyhientaiketthuc = function () {
  //     console.log("slide hientai da xong roi1");
  //     this.classList.remove("dangxem");
  //     this.classList.remove("bienmatkhianperv");
  //     trangthaicua2chuyendong++;
  //     if (trangthaicua2chuyendong == 2) {
  //       trangthai = "dangdungyen";
  //     }
  //     console.log(slides[chisohientai]);
  //   }

  //   var xulytieptheoketthuc = function () {
  //     console.log("slide tiep theo da xong roi");
  //     this.classList.remove("divaokhianperv");
  //     this.classList.add("dangxem");
  //     trangthaicua2chuyendong++;
  //     if (trangthaicua2chuyendong == 2) {
  //       trangthai = "dangdungyen";
  //     }
  //   }

  //   phantutieptheo.addEventListener("webkitAnimationEnd", xulytieptheoketthuc);
  //   phantuhientai.addEventListener("webkitAnimationEnd", xulyhientaiketthuc);
  //   phantuhientai.classList.add("bienmatkhianperv");
  //   phantutieptheo.classList.add("divaokhianperv");
  xacdinh2slide("trai");
};
nuttrai.addEventListener("click", chuyenslidechonuttrai);
nutphai.addEventListener("click", chuyenslidechonutphai);
