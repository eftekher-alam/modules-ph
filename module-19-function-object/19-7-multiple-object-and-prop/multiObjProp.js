var shoppingCard = {
    pen: 10,
    apple: 20,
    pant: 2,
    shirt: 2
}

console.log(shoppingCard["pen"]);

//get all the property name in a string array

var props = Object.keys(shoppingCard);
console.log(props);
// output: ['pen', 'apple', 'pant', 'shirt']


// get all the property value in a array
var values = Object.values(shoppingCard);
console.log(values);
// output: [10, 20, 2, 2]