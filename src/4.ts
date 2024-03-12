class Key {
    private signature: number;

    constructor() {
      this.signature = Math.floor(Math.random() * 100); //Returns a random integer from 0 to 99
    }
  
    getSignature(this: Key): number {
      return this.signature;
    }
  }

  class MyHouse {
    private savedKey: number;
    protected isDoorOpen: boolean;
    protected isPersonAtHome: boolean;
      
    constructor(key: Key) {
      this.savedKey = key.getSignature();
      this.isDoorOpen = false;
      this.isPersonAtHome = false;
    }
      
    openDoor(insertedKey: number): void {
      if (insertedKey === this.savedKey) {
        this.isDoorOpen = true;
        console.log("Key is " + insertedKey + ". The door is open");
      }
    }

    comeIn() {
      if (this.isDoorOpen) {
        this.isPersonAtHome = true;
      }
    }
  }

  class Person {
    private key: Key;

    constructor(ownedKey: Key) {
      this.key = ownedKey;
    }

    getKey(this: Person): number {
      return key.getSignature();
    }
  }

  const key = new Key();
  const house = new MyHouse(key);
  const person = new Person(key);
  
  house.openDoor(person.getKey());
  // house.comeIn(person);

export {};