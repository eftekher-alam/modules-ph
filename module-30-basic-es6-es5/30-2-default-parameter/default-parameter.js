//default number parameter 
function calculator(num1 = 0, num2 = 0) {
    console.log(num1, num2);
}

calculator(10);

//default string parameter
function fullName(firstName, lastName = "") {
    console.log(firstName + " " + lastName);
}

fullName("Eftekher");

//default array parameter
function friendList(friends = []) {
    console.log(friends);
}

//default object parameter
function myfriends(friends = {}) {
    console.log(friends);
}