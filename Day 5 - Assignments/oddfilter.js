let s=prompt("Enter range")
let a=[]
for(let i=0;i<=s;i++)
{
a.push(i);
}
let oddcube=(a.filter(el=>el%2!=0)).map(el=>el**3);
console.log(oddcube);