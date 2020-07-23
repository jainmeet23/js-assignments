let name= prompt("Enter your name")
let g=document.getElementById('greet')
g.style.fontSize='40px';
g.innerText +=`Welcome ${name}`;
let m=document.getElementById('time')
m.style.fontSize='30px';
function clock()
{
    let date= new Date()
    let time= date.toLocaleTimeString()
    m.innerText = time;
}
setInterval(clock,1000);
let button = document.getElementById('dark');   
button.onclick= function changemode(){
    document.body.style.backgroundColor='black';
    document.body.style.color='white';
}

let button1 = document.getElementById('normal');   
button1.onclick= function changemode(){
    document.body.style.backgroundColor='white';
    document.body.style.color='black';
}

