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

        this.col = this._checkLimit(this.col, MapSize.COLS);
        this.row = this._checkLimit(this.row, MapSize.ROWS);
    }

    _checkLimit(coord, limit) {
        if (coord <= 0) {
            coord = 0;
        } else if (coord >= limit - 1) {
            coord = limit - 1;
        }

        return coord;
    }
}
