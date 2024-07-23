/*let product={
    pen_name:"Parker Jotter Standard CT Ball Pen",
    color:"Black",
    sale:"Deal of the Day",
    Price:Symbol("$270"),
};
const profile={
    name:"Ashwini",
    is_follow:false,
    followers:11,
    following:1001,
};
console.log(profile["is_follow"]);
let name=prompt("type your name");
console.log(name);
if(name=="ashwini"){
    console.log("True");
}
else{
    console.log("false");
}
let num=prompt("enter a number");
if (num%5==0){
    console.log(num ,"is a multiple of 5");
}
else{
    console.log(num ,"num is not a multiple of 5");
}
const marks=prompt("enter your marks");
if (marks>=80 && marks<=100){
    console.log("Grade A");
}
else if(marks>=70 && marks<=79){
    console.log("Grade B");
}
else if(marks>=60 && marks<=69){
    console.log("Grade C");
}
else if(marks>=50 && marks<=59){
    console.log("Grade D");
}
else if(marks>=0 && marks<=49){
    console.log("Fail");

}
else{
    console.log("Invalid! Enter marks between 0 to 100");
}

for(let i=0;i<=10;i++){
    console.log(i);
}
//for in
let str="Javascript";
for(let i of str){
 console.log(i);
}
 
let student={
    name:"Ashwini",
    rollno:11,
    phn:8688945953,
};
for(let i in student){
    console.log(i,student[i]);
}
for(let i=0;i<=100;i++){
    if (i%2==0){
        console.log(i);
    }
}
//practice 2 Question2
let num=333;
let guesnum=prompt("guest the number");
while(guesnum != num){
    guesnum=prompt("you have entered wrong number");
}
console.log("Congratulations!you have entered correct number");

let marks=[85,97,44,37,76,60]
let count=0
for( let i=0;i<marks.length;i++)
{
    console.log(marks[i]);
    count=count+marks[i];
}
avg=count/5
console.log(avg);

find prices after appplying 10% offer
offerPrice=[]
actualprice=[250,645,300,900,50]
for(let i=0 ;i<actualprice.length;i++){
price=actualprice[i]/10;
offerPrice.push(actualprice[i]-price);
}
console.log(offerPrice)*/
cars=["mahindra","banz","tata","audi"];
//cars.push("rangerovers");
console.log(cars);
let deleted=cars.pop("benz");
console.log(deleted);
/*
console.log(deleted);
console.log(cars.toString());
marks=[12,43,2,4,54,54];
price=[212,434.5,6,456]
convert=marks.toString();
console.log(convert);
let val=cars.concat(marks,price);
console.log(val);
cars.unshift("nano");
let val1=cars.shift();
cars.unshift("gynoo")
*/
let arr=[1,2,3,4,5,6,7]
//console.log(arr.splice(1,2,10,11));//it will return deleted items i.e 2 and 3
//console.log(arr);
// add element
//arr.splice(0,0,10);
// delete elements
//arr.splice(0,1);
//replace element
//arr.splice(0,1,"alpha");
//arr.splice(1,0,1);
//pracice question
let companies=["Bloomberg","microsoft","Uber","Google","IBM","Netflix"];
//companies.shift();

//companies.splice(1,1,"Ola");
//companies.splice(companies.length,0,"amazon");
//companies.push("amazon");
function myera(){
    console.log(c=3+4)
}
function summ(a,b){
    c=a+b;
    console.log(c)
}
//arrow function
//when we want to work with lot of functions then we can use it ! It is a modern technique in javascript
//arithmetic operators function
const functionarith=(a,b)=>{
 return a*b+a;
}
function myfunction(str){
    console.log(str.length);
  
}
/*function vowel(str){
count=0;
for (let char of str){
    if (char==="a" || char==="e" || char==="i" || char=="o" || char==="u"){
        count++;
    }

}
console.log(count);
}
// same task with arrow function
*/
/*let functionvar=(str) =>{
    let count=0;
    for (let char of str){
        if (char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
            count++;
        }
    }
    console.log(count);
     
}*/
// using for each 
let  numb= [1,2,3,4,5];
numb.foreach(function printval(val)
{

    console.log(val);

});