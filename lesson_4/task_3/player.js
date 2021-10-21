class Player {
    constructor() {
        this._score = 0;
    }

    upScore(score) {
        this._score += score;
    }

    getScore() {
        return this._score;
    }

    resetScore() {
        this._score = 0;
    }
}
