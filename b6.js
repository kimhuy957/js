// var x1=12;
// var x2=18;
// var tong =x1+x2;
// console.log("tong2s: "+tong);

// var y1=5;
// var y2=6;
// var tong2=y1+y2;
// console.log("tong "+tong2);

function tong(x1,x2){
    var tong=x1+x2;
    console.log("tong cau hai so " +tong);
}
function chao(){
    console.log("chan");
    console.log("cuc");
}
chao();
chao();
tong(1,1);
tong(111,222);

function vd1(){
    var ten="viet"
    console.log("di choi ko  "+ten);

}
vd1();
function vd2(ten){
    console.log("di choi ko thang ngu"  +ten);
}
vd2("nhu");
function tinh(ten,x,y,z,g,h) {
    console.log("chao "+ ten);
    console.log("avg la: "+(x+y+z+g+h)/5);
}
tinh("huy",2,3,4,56,6);
var ten="kim huy";
function vd3(ten) {
    console.log("di hk ko "+ten);    
}
vd3(ten);


function tinhtbc(x,y) {
    var z=(x+y)/2;
    return z;
}
console.log(tinhtbc(11,22));
if(tinhtbc(33,11)>5){
    console.log("> hon 5");
}

var x=110;
console.log(x);
//anonymous== ko ten;

var z=function (x,y){
    return (x+y)/2;
}
console.log(z(2,3));



// closure function
function ngu(){
    var ten="mai anh ve";
    return function(){
        console.log("thang nay ngu "+ten);
    }

}
var h=ngu();
h();
function hello(){
    var ten="mai anh ve";
    var nhap=function(){
        console.log("thang nay ngu "+ten);
    }
    ten=ten+" ngu vl";
    return nhap;
}
var he=hello();
he();