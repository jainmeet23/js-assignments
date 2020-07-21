fetch('http://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
.then(data => console.log(data))