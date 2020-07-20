let s=prompt("Enter your sales")
let c;
s=Number(s);
if(s>=0 && s<=5000)
c=s+s*0.02;
else if(s>=5001 && s<=10000)
c=s+s*0.05;
else if(s>=10001 && s<=20000)
c=s+s*0.07;
else if(s>20000)
c=s+s*0.1;

console.log(c);