/*let arr=[1,2,3,4,5]
let functionvarb=(a,b)=>{
    console.log(a+b);
}
functionvarb(2,4);

arr.forEach((variable)=>{
    console.log(variable);
})

function print(variable){
    console.log("Hello");
 
}
function firstfunc(){
      console.log("Higher oder method");
}
function secondfunt(){
    return firstfunc()
    console.log("higher order function");

    
}
secondfunt(firstfunc());
console.log("Hello")
function firsfun(){
    console.log("Higher order function");
}
function scndfun(firstfun){
    console.log("Higher oder method");
}
scndfun(firsfun());
array1=["f","d","e","c","b","Ashu","True"]
array1.forEach((val)=>{
    console.log(val);
})
function voters(){
    console.log("you are eligible");
}
let functionsum=(a,b)=>{
    console.log(a+b);
}
functionsum(20,30);
//data types in javascript
let a=20;
let b="Ashu"
let c=2.3;
let d=True;
let student={
    name:"Ashu",
    rollno:11,
};
let scores=[1,2,4,5,6,5,7,8,9];
scores.forEach((val,index,scores)=>{
    console.log(val,index,scores);
});
let numbers=[1,2,3,4,5,6,7,8,9];

let squarnumbers=(values)=>{
    console.log(values*values);
};
let newarr=numbers.map((squarnumbers))
 /*function squar(){
    val=[1,2,3,4,5,6,7,8,9];
    for(i=0;i<val.length;i++) {
    console.log(i*i);
}
}
squar();
let numbers=[1,2,3,4,5,11,22,33,44]
val=22
let squararr=(val)=>{
    console.log(val*val)
}
squararr(2);
//numbers.forEach((squararr));
arr=[1,2,3,4,5,6,7,8]
 let numbers=arr.map((valu)=>{
    return valu
})
console.log(numbers);
let numbers=[1,2,4,5,5,6,7]
let newarr=numbers.map(myfunction)
function myfunction(val){
    return val*10;
}
let numbers=[1,2,3,5,6,77,8]
let newarr=numbers.filter(myfunction)
function myfunction(val){
    return val*val%2===0;
}
console.log(newarr);
let arr=[1,2,3,4];
let sum=arr.reduce((res,curr)=>{
    return res+curr;
})
console.log(sum);
//reduce using in arrays
arr=[1,2,3,11,5,6]
let total=arr.reduce((prev,currrent)=>
{
    return prev<currrent? prev:currrent;
});

console.log(total);
let marks=[34,45,67,75,76,86,36,90,23,92,90]
let nightymarks=marks.filter((val,idx)=>{
    if(val>=90){
    console.log(val,idx);
    }
})
console.log(nightymarks);
let n=prompt("enter any number");
let array=[]
for(let i=1;i<=n;i++){
    array[i-1]=i;
}
console.log(array);
let sum=array.reduce((prev,currrent)=>{
    return prev+currrent;
})
console.log("sum of the array is:",sum);
let product=array.reduce((previous,curren)=>{
    return previous*curren;
})
console.log("product of the array is:",product);
console.dir(window);
console.log(document.body);
console.dir(document.body);
window.console.log("hello");
console.log(document.body.childNodes[3]);
document.body.childNodes[3].innerText="div takes total width"
let dom=document.getElementById("heading");
console.dir(dom);
console.log(dom);
let getele1=document.getElementsByClassName("heading1");
let getele2=document.getElementsByClassName("heading2");
let getele3=document.getElementsByClassName("heading3");

console.dir(getele1);
console.dir(getele2);
console.dir(getele3);
let parahh=document.getElementsByTagName("p");
console.dir(parahh);
console.log(parahh);
let val=document.getElementsByTagName("p");
console.log(val.tagName);
//console.log(val);
//console.dir(val)
let val=document.querySelector("div");
console.log(val);
console.log(val.firstChild());
let val=document.querySelector("div");
console.log(val.lastChild.nodeName);
console.log(val.innerText);
console.log(val.innerHTML);
console.log(val.textContent);


let value1=document.querySelectorAll(".box");
console.log(value1);
value1[0].innerText="by using innerText ";
value1[1].innerText="we can access content";
value1[2].innerText="and also we can add";
let h2cnt=document.querySelector("h2");
h2cnt.innerText=h2cnt.innerText+" from Apna college students ";
console.log(h2cnt);
//and also we can try it
let divs=document.querySelectorAll("div");
let idx=0
for (div of divs){
    div.innerText=`a new unique value ${idx}`;
    idx++;
}

let val=document.querySelector("script");
console.log(val.getAttribute("src"));
let val1=document.querySelector("div");
val1.setAttribute("class","myclass");
console.log(val1);
val1.style.backgroundColor="green";
val1.style.width="100px";*/
let newele=document.createElement("pre");
newele.innerHTML="<h2>IT is a heading</h2>";
let val=document.querySelector("#example");
val.after(newele);
/*
let newelement=document.createElement("p");
newelement.innerText="This is append child example";
*/
let value3=document.querySelector("div");
let value4=document.querySelector("ul");
//value3.appendChild(newelement);
value3.removeChild(value4);
/*
while(value3.firstChild){
    value3.removeChild(value3.firstChild);
}
let va=document.querySelector("p");
va.innerHTML="<i>HELLO</i>"
va.appendChild();*/
