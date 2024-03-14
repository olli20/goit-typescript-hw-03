class Key {
  private signature: number;

  constructor() {
    this.signature = Math.floor(Math.random() * 100); //Returns a random integer from 0 to 99
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;

  constructor(passedKey: Key) {
    this.key = passedKey;
  }

  getKey(): number {
    return this.key.getSignature();
  }
}

abstract class House {
  protected savedKey: Key;
  protected door: boolean = false;
  public tenants: Person[] = [];

  constructor(savedKey: Key) {
    this.savedKey = savedKey;
  }

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log('A person with the right key has come in');
    }
  }

  public abstract openDoor(key: number): void;
}


class MyHouse extends House {
  protected isPersonAtHome: boolean = false;

  constructor(savedKey: Key) {
    super(savedKey);
  }

  openDoor(insertedKey: number): void {
    if (insertedKey === this.savedKey.getSignature()) {
      this.door = true;
      console.log("Key is " + insertedKey + ". The door is open.");
    } else {
      console.log("Something went wrong. Please, check the key");
    }
  }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);