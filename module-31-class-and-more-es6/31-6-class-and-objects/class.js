class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    sleep() {
        console.log("Zzzz...");
    }
    sound() {
        console.log("Each animal has different sound.");
    };
}

class Cow extends Animal {
    constructor(name, color, legs, weight) {
        super(name, color);
        this.legs = legs;
        this.weight = weight;
    }

    //Overwrite function
    sound() {
        console.log("Ham-ba-a-a-a-a-a");
    }
}

const myCow = new Cow("Kala Goru", "Black", 4, 120);
myCow.sound();
myCow.sleep();

console.log(myCow.name);
console.log(myCow["name"]);




