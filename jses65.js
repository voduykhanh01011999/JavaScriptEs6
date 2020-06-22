//Copy mảng
function CopyMang(){
    var manga={ten:"Võ duy khanh"};
    var mangb={lop:"18th1"};
    var mangc={...manga,...mangb};
    console.log(mangc);
    
}
CopyMang();