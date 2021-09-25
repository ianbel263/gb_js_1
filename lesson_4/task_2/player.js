class Player {
    constructor(col, row) {
        this.col = col;
        this.row = row;
    }

    getPlace() {
        return {
            col: this.col,
            row: this.row
        }
    }

    move(direction) {
        switch(direction) {
            case 'UP':
                this.row --;
            break;

            case 'DOWN':
                this.row ++;
            break;

            case 'LEFT':
                this.col --;
            break;

            case 'RIGHT':
                this.col ++;
            break;

            case 'UP_LEFT':
                this.col --;
                this.row --;
            break;

            case 'UP_RIGHT':
                this.col ++;
                this.row --;
            break;

            case 'DOWN_LEFT':
                this.col --;
                this.row ++;
            break;

            case 'DOWN_RIGHT':
                this.col ++;
                this.row ++;
            break;
        }

        if (this.col <= 0) {
            this.col = 0;
        } else if (this.col >= MapSize.COLS - 1) {
            this.col = MapSize.COLS - 1;
        }

        if (this.row <= 0) {
            this.row = 0;
        } else if (this.row >= MapSize.ROWS - 1) {
            this.row = MapSize.ROWS - 1;
        }
    }
}
