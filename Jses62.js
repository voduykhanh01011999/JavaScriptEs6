function sumNumbers(message,...numbers)
{
    let total=0;
    for(var i =0;i< numbers.length;i++)
    {
          total+=numbers[i]; //0+2+3 number[0]=2 number[1]=3
    }
    console.log(message,total); //message là nhãn để trong  ngoặc"Tổng 2 số là:" // total cộng tất cả các số trong vòng lặp
}

sumNumbers("Tổng 2 số là: ",2,3);
sumNumbers("Giá trị của tổng là: ",2,3,100,100);