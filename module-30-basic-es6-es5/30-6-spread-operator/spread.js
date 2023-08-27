let numbers = [1, 2, 3, 4, 5, 6, 10];

console.log(numbers); //just get the array
console.log(...numbers); //get the elements not array

let mynumbers = numbers;
mynumbers.push(100);

// both array will be changed, cause mynumbers copy the memory address of the numbers
console.log(numbers);
console.log(mynumbers);

mynumbers = [...numbers];
mynumbers.push(999);

// both array will not change, cause mynumbers copy just the elements of numbers
console.log(numbers);
console.log(mynumbers);


// console.log(Math.max(numbers)); //It will throw an error cause copping the memory address
console.log(Math.max(...numbers));
