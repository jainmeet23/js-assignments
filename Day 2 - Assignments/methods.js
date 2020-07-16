//String Methods
console.log("----------String Methods-----------");
let company = " Lets Upgrade";

//Length
console.log(company.length);

//to lowercase
console.log(company.toLowerCase());

//to uppercase
console.log(company.toUpperCase());

//find Index(first Occurrence) 
console.log(company.indexOf('e'));

//find Index(Last occurence)
console.log(company.lastIndexOf('e'));

//replace string with another
console.log(company.replace("Lets","Come on")); 

//Array methods

console.log("----------Array Methods-----------")
let arr=['1','21','31','4'];

//length of array
console.log(arr.length)

//convert array to string
console.log(arr.toString());

//pop element from array
arr.pop()
 console.log(arr);

 //push element into array
 arr.push('4')
 console.log(arr);

 //shift element to left
 arr.shift()
 console.log(arr);

 //shift element to right by adding new element at beginning
 arr.unshift("22")
 console.log(arr);