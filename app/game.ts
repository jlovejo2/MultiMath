/// <reference path="utility.ts" />
/// <reference path="result.ts" />
/// <reference path="player.ts" />
/// <reference path="scoreboard.ts" />

class Game {
    private scoreboard: Scoreboard = new Scoreboard();

    constructor(public player: Player, public problemCount: number, public factor: number) {

    }

    //displays html for game board on screen
    displayGame() {
        let gameForm: string = '';
        for (let i = 1; i <= this.problemCount; i++) {
            gameForm += '<div class="form-group">'
            gameForm += '<label for="answer' + i + '" class="col-sm-2 control-label">';
            gameForm += String(this.factor) + ' X ' + i + ' = </label>';
            gameForm += '<div class="col-sm-1"><input type="text" class="form-control" id="answer"' + i + '" size="5" /></div>';
            gameForm += '</div>';
        }

    //add a new game to the page
    const gameElement: HTMLElement = document.getElementById('game')
    gameElement.innerHTML = gameForm;

    //enable calculate button
    document.getElementById('calculate')!.removeAttribute('disabled');
}
}



