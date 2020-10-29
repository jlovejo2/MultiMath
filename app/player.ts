/// <reference path="person.ts" />

class Player implements Person {
    name: string;
    age?: number;
    highScore: number;

    constructor() {

        this.name = '';
        this.highScore = 0;
        
    }

    formatName () {
        return this.name.toUpperCase()
    }

}