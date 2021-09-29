class Game {
    constructor(data) {
        this._data = data.slice();
        this._currentQuestion = null;
        this._rightAnswer = null;
        this._rightAnswerLetter = null;
        this._playerAnswerLetter = null;
        this._rightAnswerCount = 0;
        this._wrongAnswerCount = 0;
        this._player = new Player();
    }

    start() {
        this._chooseQuestion();
    }

    end() {
        alert('Игра окончена.');
    }

    _report() {
        alert(`Игра окончена.\n
                Правильных ответов: ${this._rightAnswerCount}
                Неправильных ответов: ${this._wrongAnswerCount}
                Количество набранных очков: ${this._player.getScore()}`);
    }

    _chooseQuestion() {
        if (this._data.length === 0) {
            this._report();
            return;
        }
        const randomIndex = getRandomInt(0, this._data.length);
        this._currentQuestion = this._data[randomIndex];
        this._rightAnswer = this._currentQuestion.rightAnswer;
        this._data.splice(randomIndex, 1);
        this._askQuestion(this._currentQuestion);
    }

    _askQuestion() {
        this._playerAnswerLetter = prompt(this._renderQuestion());
        this._checkAnswer(this._playerAnswerLetter);
    }

    _renderQuestion() {
        const allAnswers = this._currentQuestion.wrongAnswers.slice();
        allAnswers.push(this._currentQuestion.rightAnswer);
        const answers = shuffle(allAnswers);
    
        let string = `${this._currentQuestion.question}\n`;

        answers.forEach((answer, index) => {
            if (answer === this._rightAnswer) {
                this._rightAnswerLetter = answerLetters[index];
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
        } else if (answerLetter === this._rightAnswerLetter) {
            alert(`Ура!!! Вы угадали!\nЭто действительно: ${this._rightAnswer}.`);
            this._rightAnswerCount++;
            this._player.upScore(POINTS_FOR_CORRECT);
            this._chooseQuestion();
        } else {
            alert(`Ответ неверный.\nПравильный ответ: ${this._rightAnswer}.`);
            this._wrongAnswerCount++;
            this._chooseQuestion();
        }
    }
}
