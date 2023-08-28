function add() {
    let counter = 0;
    return () => {
        return ++counter;
    }
}

const addByOne = add();
const addBySec = add();

console.log(addByOne()); //1
console.log(addBySec()); //1
console.log(addBySec()); //2
console.log(addBySec()); //3
console.log(addByOne()); //2
