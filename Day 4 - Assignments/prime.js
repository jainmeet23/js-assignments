let n= prompt("Enter range")
function isprime(n)
{
    for(let i=2;i<=Math.sqrt(n);i++)
    {   
        if(n%i==0)
        return false;
    }
    return true;
}
for(let i=2;i<=n;i++)
{
    if(isprime(i))
    console.log(i);
}