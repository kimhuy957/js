// var cacmonan={
//     ten:"phuong hoa luon song",
//     nguyenlieu:"bot my",
//     gia:100,

// };
// var cacmonan2=cacmonan;
// cacmonan2.ten="mat tro ban mai";
// console.log(cacmonan);
// console.log(cacmonan2);
// var cacmonan3={
//     ten:"phuong hoa luon song",
//     nguyenlieu:"bot my",
//     gia:100,

// };
// var cacmonan4={
//     ten:"may tron ngu sac",
//     nguyenlieu:"bot my",
//     gia:100,

// };
// console.log(cacmonan3);
// console.log(cacmonan4);


// //khai bao constructor
// function Monan(t,l,g){
//     this.ten=t;
//     this.nguyenlieu=l;
//     this.gia=g;
// }
// var mon1=new Monan("my","gao",222);
// var mon2=new Monan('com','gao',10)
// console.log(mon1);
// console.log(mon2);
//viedo 22
//video 23
const x=20;//khuen const  bien khai bao hay viet hoa
//const laf giaf chij ko thay doi 

console.log(x);
//video 24
//video25
//tao mang du kieu (bt lay tuw csdl quaapi)
 var mangd1=[
    {
        id:1,
    anh:"https://scontent.fhan4-1.fna.fbcdn.net/v/t39.30808-6/290517251_5522716354455482_4588678524333128235_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=9wBPJ8TrhM0AX_ZcOS-&_nc_ht=scontent.fhan4-1.fna&oh=00_AT9VBebi56ARwvHY3LqXXPKs-JuP-WLZsHQt8_N0EtjcVQ&oe=62C75067",
    ten:"ai quan tam",
    noidungcm:"viet cho co",
    
},
    {
        id:2,
    anh:"https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-6/289677267_1456425198131382_10804052188666531_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=pf0xL0iKTcYAX9i5DPa&_nc_ht=scontent.fhan3-5.fna&oh=00_AT9glti-qDsehvMbMr19Gr4yyxdOct1xke1HK5tFX7HAUw&oe=62C65E5C",
    ten:"ai quan tam",
    noidungcm:"viet cho co",
    }
 ];
//  console.log(mangd1[0]);
//  for (var i=0;i<mangd1.length;i++){
//     console.log(mangd1p[i].ten);
//  }
  for (var i=0;i<mangd1.length;i++){
    var noidung1khoi=`            
    <div class="kcm" id="kcm-${mangd1[i].id}">
    <img src="${mangd1[i].anh}" alt="" class="float-xs-left pr1" >
    <b>${mangd1[i].ten}</b><samp>${mangd1[i].noidungcm}
    </samp>
</div>`;
console.log(noidung1khoi);
}