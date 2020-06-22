function TestSo(Nhan,...so)
{
    let tong=0;
    for(var i=0;i<so.length;i++)
    {
        tong+=so[i];
    }
    console.log(Nhan,tong);
    
}
TestSo("Tổng giá trị là: ",2,3,4,5,6,7,8);