// This part is not associate with HTML

//None parameterize callback function
/*
function musterFunc(inputFunc) {
    // console.log(typeof inputFunc); //hence, it's type function. we can execute.
    inputFunc();
}

//create function that will be passed in to muster function
function sayname() { console.log("My name is Eftekher"); }

//Just call the muster function, it will execute the sayname();
musterFunc(sayname); 

function sayDept() { console.log("My department is CSE"); }
musterFunc(sayDept); //Muster function will execute the sayDept();
*/


//Parameterize callback function

function master(inputFunction, param1) { // it will take a function & a normal parameter
    inputFunction(param1);
}

//Create the function that will execute by master
function inputFunction(param1) {
    console.log("Hello Mr. " + param1)
}


//Now call the master function that receive a function and a normal parameter
//The normal parameter will pass in the inner function.
master(inputFunction, "Eftekher Alam");