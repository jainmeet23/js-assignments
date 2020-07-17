let a= prompt("Enter Marks");

if(a>=51 && a<=100)
console.log("Marks are "+ a+" and grade is A");
else
console.log("Marks are "+ a+" and grade is B");

console.log("-----------------Using Ternary-----------------")
var str;
(a>=51 && a<=100)?str="A":str="B";
console.log("Marks are "+ a+" and grade is "+str);
