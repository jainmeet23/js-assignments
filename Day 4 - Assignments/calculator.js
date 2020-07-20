let m=prompt("Enter the expression (eg. 3+4)")
let a=m.split("")
a[0]=Number(a[0])
a[2]=Number(a[2])

switch(a[1])
{
    case '+': console.log(a[0]+a[2])
                break;
    case '-': console.log(a[0]-a[2])
                break;
    case '/': console.log(a[0]/a[2])
                break;
    case '*': console.log(a[0]*a[2])
                break;
    case '%': console.log(a[0]%a[2])
                break;
    default:  console.log("Invalid Input")
}
