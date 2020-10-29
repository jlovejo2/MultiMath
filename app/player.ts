/// <reference path="person.ts" />

class Player implements Person {

    constructor(public name: string, public highScore: number, public age?: number ) {

    }

    formatName () {
        return this.name.toUpperCase()
    }

}