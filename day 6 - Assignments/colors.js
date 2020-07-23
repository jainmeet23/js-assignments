const a=['white','yellow','green','blue','red','yellowgreen','lightblue']




let i=0;
function changecolor(){

document.body.style.backgroundColor=a[i++];
if(i>a.length)
i=0;
}

function reset()
{
    document.body.style.backgroundColor=a[0];
}

// setInterval(changecolor,2000);
// const btn = document.getElementById('button');

// btn.onclick=changecolor()