document.addEventListener("DOMContentLoaded", function () {
  //khai bao mot so bien can dung
  var menudo = document.querySelector(".menu");
  var trangthai = "duoi100";
  var chungtoi = document.querySelector(".chungtoi");
  var vtkhoi = chungtoi.offsetTop;
  var trangthaivang = "duoi";
  var khoangcachhienthi = 1000;
  var chancuoi = vtkhoi + khoangcachhienthi;
  //hieu uwng load = js
  var phantuload = document.querySelector(".s3");
  var trangthais3 = "duoi";
  var vts3 = phantuload.offsetTop - 200;
  window.addEventListener("scroll", function () {
    // console.log(window.pageYOffset);
    if (window.pageYOffset > 100) {
      if (trangthai == "duoi100") {
        trangthai = "tren100";
        menudo.classList.add("menuden");
      }
    } else if (window.pageYOffset < 100) {
      if (trangthai == "tren100") {
        trangthai = "duoi100";
        menudo.classList.remove("menuden");
      }
    }
    // xu ly cho khoi vang
    if (window.pageYOffset > vtkhoi && window.pageYOffset < chancuoi) {
      if (trangthaivang == "duoi") {
        trangthaivang = "danghienthi";
        chungtoi.classList.add("vangdunglai");
      }
    } else if (window.pageYOffset < vtkhoi || window.pageYOffset > chancuoi) {
      if (trangthaivang == "danghienthi") {
        trangthaivang = "duoi";
        chungtoi.classList.remove("vangdunglai");
      }
    }
    if (window.pageYOffset > vts3) {
    if (trangthais3 == "duoi") {
      //   trangthais3 = "tren";
      phantuload.classList.add("dilen");
    }
  }
  });
  
});
