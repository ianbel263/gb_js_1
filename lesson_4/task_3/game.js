class Game {
    constructor(data) {
        this.data = data.slice();
        this.currentQuestion = null;
        this.rightAnswer = null;
        this.rightAnswerLetter = null;
        this.playerAnswerLetter = null;
        this.rightAnswerCount = 0;
        this.wrongAnswerCount = 0;
        this.player = new Player();
    }

    start() {
        this._chooseQuestion();
    }

    end() {
        alert('Игра окончена.');
    }

    _report() {
        alert(`Игра окончена.\n
                Правильных ответов: ${this.rightAnswerCount}
                Неправильных ответов: ${this.wrongAnswerCount}
                Количество набранных очков: ${this.player.getScore()}`);
    }

    _chooseQuestion() {
        if (this.data.length === 0) {
            this._report();
            return;
        }
        const randomIndex = getRandomInt(0, this.data.length);
        this.currentQuestion = this.data[randomIndex];
        this.rightAnswer = this.currentQuestion.rightAnswer;
        this.data.splice(randomIndex, 1);
        this._askQuestion(this.currentQuestion);
    }

    _askQuestion() {
        this.playerAnswerLetter = prompt(this._renderQuestion());
        this._checkAnswer(this.playerAnswerLetter);
    }

    _renderQuestion() {
        const allAnswers = this.currentQuestion.wrongAnswers.slice();
        allAnswers.push(this.currentQuestion.rightAnswer);
        const answers = shuffle(allAnswers);
    
        let string = `${this.currentQuestion.question}\n`;

        answers.forEach((answer, index) => {
            if (answer === this.rightAnswer) {
                this.rightAnswerLetter = answerLetters[index];
            }
            string += `${answerLetters[index]}. ${answer}\n`
        });

        return string;
    }

    _checkAnswer(answerLetter) {
        if (answerLetter === 'exit') {
            this.end();
            return;
        } else if (!answerLetters.includes(answerLetter)) {
            alert('Неверный ввод. Следует вводить только "a, b, c, d или exit".');
            this._askQuestion();
            return;
        } else if (answerLetter === this.rightAnswerLetter) {
            alert(`Ура!!! Вы угадали!\nЭто действительно: ${this.rightAnswer}.`);
            this.rightAnswerCount++;
            this.player.upScore(POINTS_FOR_CORRECT);
            this._chooseQuestion();
        } else {
            alert(`Ответ неверный.\nПравильный ответ: ${this.rightAnswer}.`);
            this.wrongAnswerCount++;
            this._chooseQuestion();
        }
    }
}
