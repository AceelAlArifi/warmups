class Tamagotchi {
    constructor(){
        this.hungry = true; 
        this.sick = false;
        this.age = 0;
}

 feed() {
    if (this.hungry == true)
        return `${this.hungry == false} "That was yummy!"`;

    else if (this.hungry == false)
        return `${this.hungry == true} "No thanks, I'm full."`;
}

sleep() {
    return "zzzzzzz";
}

medicate() {
    if (this.sick == true)
        return `${this.sick == false} "I feel much better!"`;

    else if (this.sick == false)
        return `${this.sick == true}  "No thanks, I feel fine."`;

}

    increaseAge() {
        this.age += 1;
        console.log("Happy birthday to me! I am " + this.age + " years old!");
    }
}

   

class Dog extends Tamagotchi {
    bark() {
        console.log("ruff ruff")
    }
    goOutside() {
        console.log("I own that tree now!")
    }
}

class Cat extends Tamagotchi {
    meow() {
        console.log("Meow!")
    }
    useLitterBox() {
        console.log("Buried Treasure!")
    }
}

class Fish extends Tamagotchi {
    swim() {
        console.log("Just keep swimming...")
    }
}

let spock = new Dog()
let loki = new Cat()
let nimo = new Fish()

spock.feed()
spock.increaseAge()
spock.increaseAge()
spock.bark()
spock.goOutside()
loki.meow()
loki.sleep()
loki.useLitterBox()
nimo.medicate()
nimo.medicate()
nimo.swim()

class Zoo {
    constructor() {
        this.animals = []
    }
    createTamagotchi() {
        this.animals.push(new Tamagotchi())
    }
    addTamagotchi(tamagotchi) {
        this.animals.push(tamagotchi)
    }
    feed() {
        this.animals.forEach(animal => {
            animal.feed()
        })
    }
    sleep() {
        this.animals.forEach(animal => {
            animal.sleep()
        })
    }
    medicate() {
        this.animals.forEach(animal => {
            animal.medicate()
        })
    }
    increaseAges() {
        this.animals.forEach(animal => {
            animal.increaseAge()
        })
    }
}

let zoo = new Zoo()
zoo.createTamagotchi()
zoo.addTamagotchi(spock)
zoo.addTamagotchi(loki)
zoo.addTamagotchi(nimo)
zoo.feed()
zoo.increaseAges()
zoo.increaseAges()
zoo.increaseAges()


// func(o)
// obj.func()






// // Initialize a constructor from a class
// const constructorFromClass = new y();

// console.log(constructorFromClass);