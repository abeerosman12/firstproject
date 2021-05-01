/*var posts=
{ 
    id:2 ,
    title:"jhg" ,

desc:"dfdf ", 
demo:function(){  
    console.log("demo");
}, 
comments:{ 
    comment:"demo4"
}
}  
console.log(posts.demo());*/   
 
var productname = document.getElementById('productname') 
var productCategory = document.getElementById('productCategory') 
var productprice = document.getElementById('productprice') 
var productDesctaion = document.getElementById('productDesctaion')

function getFormDate(){ 
    var prouduct = { 
        name :productname.value, 
        cate : productCategory.value,
        price : productprice.value,
        desc : productDesctaion.value
    } 
    console.log(prouduct);
}