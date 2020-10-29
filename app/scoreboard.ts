import { Result } from './result';

export class Scoreboard {
    private results: Result[] = []

    addResult(newResult: Result): void {
        this.results.push(newResult)
    }
    
    updateScoreboard(): void {
        let output: string = '<h2>Scoreboard</h2>';

        for (let index = 0; index < this.results.length; index++) {
            const result: Result = this.results[index];
            output += '<h4>';
            output += result.playerName + ': ' + result.score + '/' + result.problemCount + ' for factor ' + result.factor;
            output += '</h4>';
            if (result.score === result.problemCount) {
            output += '<hr/>';
            output += '<h3>Great job! Perfect Score!!!</h3>'
            } else if ( result.score === 0 ){
                output += '<hr/>';
                output += '<h3>Yikes, time to hit those books.</h3>'        
            } else {
                output += '<hr/>';
                output += '<h3>Thanks for playing!</h3>'
            }
        }

        const scoreElement: HTMLElement = document.getElementById('scores')!;
        scoreElement.innerHTML = output;
    }
}