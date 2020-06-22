function TestNgay(){
    let d = new Date();
    var ngay= d.getDate();
    var thang = d.getMonth()+1;
    if(thang<10)
   thang="0"+thang;
    if(ngay<10)
    ngay="0"+ngay;

    console.log(`Hôm nay là: ngày${ngay} tháng${thang} Năm:${d.getFullYear()}`);
    
}
TestNgay();