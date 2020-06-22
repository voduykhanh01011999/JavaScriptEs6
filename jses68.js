function Sayhi(name="there")
{
    console.log("Hi "+name+" !");
    console.log(typeof name);//Hiển thị kiểu dữ liệu ra màn hình ví dụ như số là int chữ là string
    
    
}
Sayhi();
Sayhi(undefined); //Tham số mặc định không thay đổi
Sayhi("Khanh");//Thay đổi giá trị name trong Sayhi
Sayhi(null);
Sayhi(false);