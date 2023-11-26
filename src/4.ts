class Key {
    private signature: number;

    constructor() {
        this.signature = Math.random();
    }

    getSignature(): number {
        return this.signature;
    }
}

class Person {
    constructor(private key: Key) { }
    
    getKey(): Key {
        return this.key;
    }
}

abstract class House {
    protected door: boolean = false
    private tenants: Person[] = [];

    constructor(protected key: Key) {}
    
    abstract openDoor(key: Key): void;
    
    comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person);
            console.log('You are in!');
        } else {
            console.log('Sorry, you cannot come in - the key is invalid!');
        }
    };
}

class MyHouse extends House {
    openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
            console.log('The door is open!');
        } else {
            console.log('Sorry, the key is invalid - the door is still locked!');
        }
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

console.log(house);


export {};