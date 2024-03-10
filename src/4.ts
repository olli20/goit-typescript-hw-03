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

    comeIn(name: string) {
      if (this.isDoorOpen) {
        this.isPersonAtHome = true;
        console.log(name + " is at home")
      }
    }
  }

  class Person {
    private savedKey: number;
    protected personsName: string;
    constructor(key: Key, name: string) {
      this.savedKey = key.getSignature()
      this.personsName = name;
    }

    getKey(): number {
      return this.savedKey;
    }
    getName(): string {
      return this.personsName;
    }
  }

  const key = new Key();
  const house = new MyHouse(key);
  const person = new Person(key, "Max");

  house.openDoor(person.getKey());
  house.comeIn(person.getName());

export {};