tbl=document.getElementById('table')
console.log(tbl)
function showtable()
{
    let s=prompt("Enter number")
    for(let i=1;i<11;i++)
    {  
        tbl.innerText += ` ${s} x ${i} = ${s*i} \n`;
    }
}