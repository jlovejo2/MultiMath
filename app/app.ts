import { Player } from './player'
import { Game } from './game'
import * as Helpers from './utility'

let newGame: Game;

document.getElementById('startGame')!.addEventListener('click', () => {
    const name = Helpers.getValue('playername')
    const player: Player = new Player(name);
    
    const problemCount: number = Number(Helpers.getValue('problemCount'));
    const factor: number = Number(Helpers.getValue('factor'));

    newGame = new Game (player, problemCount, factor);
    newGame.displayGame();
})

document.getElementById('calculate')!.addEventListener('click', () => {
 newGame.calculateScore();
})

