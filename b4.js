// doi tuong Object
var dongho={
    hangsx:"casio",
    mau:"xanh",
    gia:50000,
    gioitinh:"nam",
    xemngay:function(){console.log("hom nay mua dong ho");}
}
var hv={
    ten:"hk di ",
    ho:"ngu",
    tuoi:20,
    chieucao:169,
    cannang:49,
    tendaydu:function(){return this.ho +" "+ this.ten;},
    danhgia:function(){
        if(this.chieucao/this.cannang<3)
        {
            return "daptrai";
        }
        else{
            return "t biet tao"
        }
    }

}
console.log(hv.tendaydu());