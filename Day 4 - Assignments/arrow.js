
function ask(question,yes,no)
{
    if(confirm(question))
    yes()
    else
    no()
}

ask(
    "Do you Agree",
    function(){alert("Agreed")},
    function(){alert("Not Agreed")}
)


let ask1=(question,yes,no) => (confirm(question))?yes():no();

ask1(
    "Do you Agree or not(arrow function)",
    function(){alert("Agreed")},
    function(){alert("Not Agreed")}
)
