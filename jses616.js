var getName=()=>{
    return "Võ duy khanh";
}
var GetName=()=>"Võ duy khanh";
var Ten=name=>alert(name);
//console.log(getName());
//console.log(GetName());

var listData=[
    "Võ duy khanh","An giang",22
];
listData.map(value=>console.log(isNaN(value)==false ? value+1:value.toUpperCase())); //if phần tử là số thì sẽ +1 và phần tử là chuỗi sẽ in hoa
console.log(listData);



