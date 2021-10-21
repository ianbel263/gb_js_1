class Player {
    constructor(col, row) {
        this._col = col;
        this._row = row;
    }

    getPlace() {
        return {
            col: this._col,
            row: this._row
        }
    }

    move(direction) {
        switch(direction) {
            case 'UP':
                this._row --;
                break;
            case 'DOWN':
                this._row ++;
                break;
            case 'LEFT':
                this._col --;
                break;
            case 'RIGHT':
                this._col ++;
                break;
            case 'UP_LEFT':
                this._col --;
                this._row --;
                break;
            case 'UP_RIGHT':
                this._col ++;
                this._row --;
                break;
            case 'DOWN_LEFT':
                this._col --;
                this._row ++;
                break;
            case 'DOWN_RIGHT':
                this._col ++;
                this._row ++;
                break;
        }

        this._col = this._checkLimit(this._col, MapSize.COLS);
        this._row = this._checkLimit(this._row, MapSize.ROWS);
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
