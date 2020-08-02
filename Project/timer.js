const form=document.getElementById('myform');
let btn = document.getElementById('button');


btn.onclick= function getval(){
    
    let h= document.getElementById('hour').value;
    let m= document.getElementById('min').value;
    let s= document.getElementById('sec').value;
    if(s>=0 && s<59 && m>=0 && m<=59 && h>=0)
    changetime(h,m,s);
    else
    alert("Incorrect Input");
    document.getElementById("myform").reset();


  
}

function changetime(h,m,s)
{
    var p=document.getElementById('timer')
        x=setInterval(() => {
            if(h==0 && m==0 && s==0){
                clearInterval(x);
                alert("TIME ENDED");
        }
            if(s<0 && m>=0)
            {
                m--;
                s=59;
            }
            if(m<0 && h!=0)
            {
                h--;
                m=59;
            }
            if(h<10){
            var h1;
            h1="0"+h.toString();
            }
            else
            h1=h;
            if(m<10){
            var m1;
            m1="0"+m.toString();
            }
            else
            m1=m;
            if(s<10){
            var s1;
            s1="0"+s.toString();
            }
            else
            s1=s;
            p.innerText=h1+":"+m1+":"+s1;
            s--;

        }, 1000);   
        
        
        
}
