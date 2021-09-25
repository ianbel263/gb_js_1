class Player {
    constructor() {
        this.score = 0;
    }

    upScore(score) {
        this.score += score;
    }

    getScore() {
        return this.score;
    }

    resetScore() {
        this.score = 0;
    }
}
