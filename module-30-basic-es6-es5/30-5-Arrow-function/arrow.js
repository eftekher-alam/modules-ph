/*
    * Arrow function by default return value if doesn't have large body
 */

//no parameter arrow function
const print = () => "Hello this is Eftkeher Alam";
console.log(print());


//single parameter arrow function
const greetings = (name) => `Wellcome Mr. ${name}`;
console.log(greetings("Eftekher Alam"));

//We can eliminate the brackets of parameter
const greetings1 = name => `Wellcome Mr. ${name}`;
console.log(greetings1("Eftekher Alam"));


//Multi-Parameter arrow function
const calculator = (num1, num2) => num1 + num2;
console.log(calculator(10, 20));

//Large body arrow function
//need to use return keyword to return value
const universalCal = (operation, n1, n2) => {
    if (operation == "+")
        return n1 + n2;
    if (operation == "-")
        return n1 - n2;
};

console.log(universalCal("+", 20, 30));

