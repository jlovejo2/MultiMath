/// <reference path="player.ts" />
/// <reference path="game.ts" />

let newGame: Game;

document.getElementById('startGame')!.addEventListener('click', () => {
    const name = Utility.getInputValue('playername')
    const player: Player = new Player(name);
    
    const problemCount: number = Number(Utility.getInputValue('problemCount'));
    const factor: number = Number(Utility.getInputValue('factor'));

    newGame = new Game (player, problemCount, factor);
    newGame.displayGame();
})

document.getElementById('calculate')!.addEventListener('click', () => {
 newGame.calculateScore();
})

