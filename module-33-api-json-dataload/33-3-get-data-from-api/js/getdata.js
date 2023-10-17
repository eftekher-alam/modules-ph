fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(request => request.json())
    .then(data => console.log(data));