// برنامه ای بنویسید که سن و از ما بگیره اگه زیر 18 سال بود بگه تینیج اگه 18تا 50 بزرگسال و بالاتر بشه کهنسال 

let age ;
age=prompt("please enter your age : ");
if (age<=18) {
    alert("you are a teenager");
} else if(age>18 && age<=50) {
    alert("you are a young");

    
}else{
    alert("you are a senior");
}
