/// <reference path="person.ts" />


class Player implements Person {

    constructor(public name: string, public age?: number, public highScore?: number) {

    }

    formatName() {
      return this.name.toUpperCase();
    }  
  }