// convert JavaScript data into JSON string
// except number and boolean, every data will be in double quotes.

const user = {
    id: 3006,
    name: "Eftekher",
    dept: "Computer Science and Engineering"
}

const jsonData = JSON.stringify(user);
console.log(jsonData);

// Output : JSON string
//{ "id": 3006, "name": "Eftekher", "dept": "Computer Science and Engineering" }

// JavaScript data
/*
{
    id: 3006,
    name: 'Eftekher',
    dept: 'Computer Science and Engineering'
}
*/



// convert JSON string into JavaScript data
let jsData = JSON.parse(jsonData);
console.log(jsData);