//Destructure of an array
//Main benefit is, you can use the value as variable eg. friend1, friend2 
const friends = ["Manik", "Shohan", "Shanto"];

//Both side need to be array

const [friend1, friend2] = friends;
console.log(friend1, friend2); //Here using like variable

//myfriends will be a new array except the value of index 0. Because the value index 0 value already taken.
const [friend0, ...myfriends] = friends;
console.log(myfriends); //Here using like variable


//Destructure of an object
const student = {
    name: "Eftekher Shuvo",
    id: "20211203006",
    dept: "CSE"
}

const { name, id } = student
console.log(name, id);

//newStudent will be an object without the property dept
const { dept, ...newStudent } = student;
console.log(newStudent);

