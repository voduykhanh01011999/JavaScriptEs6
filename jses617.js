//Tìm ra số chẵn trong mảng
var mang=[1,2,3,4,5,6,7,8,9];
var mang1=[];
var mang2=[];
//forEach thực thi hàm khi duyệt qua từng phần tử
mang.forEach(value=>{
    if(value%2==0)
    {
        mang1.push(value);
    }
});
console.log("Số chẵn là: "+mang1);
//Tìm ra số lẻ trong mảng
//push khởi tạo một chiều dài mảng thành một mảng mới
mang.forEach(value=>{
    if(value%2!=0)
    {
        mang2.push(value);
    }
});
console.log("Số lẻ là: "+mang2);
//
var Ten=["Võ duy khanh","18TH1","DTH175159",21];

Ten.map(value=>console.log(isNaN(value) === false ? value + 1 : value.toUpperCase()));
console.log(Ten);


var obj = {name:"Võ Duy Khanh",age:21,getName:function(thamso){
    console.log(thamso());},getAge:function(thamso){
        console.log(thamso());
        
    },ShowAll:function(){
        this.getName(()=>{
            return "name: "+this.name;
        });
        this.getAge(()=>{
            return "age: "+this.age;
        });
    }
    
}
obj.ShowAll();



var ten={name:"Võ duy khanh",Class:"18th1",Age:"21",Address:"An giang",getName:function(thamso){
    console.log(thamso());
    },getClass:function(thamso){ console.log(thamso());
    },getAge:function(thamso){console.log(thamso());
    },getAddress:function(thamso){console.log(thamso());
    },showall:function(){
        this.getName(()=>{return "Tên:"+this.name});
        this.getClass(()=>{return "Lớp"+this.Class});
        this.getAge(()=>{return "Tuổi"+this.Age});
        this.getAddress(()=>{return "Địa chỉ"+this.Address})
    }
}
ten.showall();
// Show All tất cả thuộc tính trong mảng
var ten={
    name:"Võ duy khanh",class:"18TH1",MSSV:"DTH175159",Khoa:"CNTT",Nganh:"Công nghệ thông tin",Age:21
    ,getName:function(thamso){
        console.log(thamso());
        
    },
    getClass:function(thamso){
        console.log(thamso());
        
    },getMSSV:function(thamso){
        console.log(thamso());
        
    },getKhoa:function(thamso){
        console.log(thamso());
        
    },getNganh:function(thamso){
        console.log(thamso());
        
    },getAge:function(thamso){
        console.log(thamso());
        
    },ShowThuocTinh:function(){
        this.getName(()=>{
            return "Tên: "+this.name;
        });
        this.getClass(()=>{
            return "Lớp: "+this.class;
        });
        this.getMSSV(()=>{
            return "MSSV: "+this.MSSV;
        });
        this.getKhoa(()=>{
            return "Khoa"+this.Khoa;
        });
        this.getAge(()=>{
            return "Tuổi"+this.Age;
        });
    }
}
ten.ShowThuocTinh();


//Test chữ hoa theo điều kiện toán tử 3 ngôi
var Name = ["Võ duy khanh","18th1",21];

Name.map(value=>console.log(isNaN(value) ==true?  value.toUpperCase():value+1)); 
console.log(Name);



