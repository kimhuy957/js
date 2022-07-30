//video 38
document.addEventListener(
  "DOMContentLoaded",
  function () {
    //khai bao can su dung
    var tamgiac = document.getElementsByClassName("tamgiac");
    var tamgiac = tamgiac[0];
    var danhsach = document.getElementsByClassName("danhsach");
    var danhsach = danhsach[0];
    console.log(danhsach[0]);
    //su dung onclick
    tamgiac.onclick = function () {
      //thuc tinh this.style
      // this.style.color='white';
      //cach cu
      this.classList.toggle("tamgiactrang");
      danhsach.classList.toggle("ra");
    };
  },
  false
);

function tinhtbc() {
  var x = 10;
  var y = 12;
  console.log((x + y) / 2);
}
