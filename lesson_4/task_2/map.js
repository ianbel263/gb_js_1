class Map {
    constructor(cols, rows) {
        this._cols = cols;
        this._rows = rows;
        this._map = '';
    }

    render() {
        for (let row = 0; row < this._rows; row++) {
            for (let col = 0; col < this._cols; col++) {
                if (player.getPlace().col === col && player.getPlace().row === row) {
                    this._map += 'o '
                } else {
                    this._map += 'x ';
                }
            }

            this._map += '\n';
        }

        console.log(this._map);
    }

    clear() {
        this._map = '';
        console.clear();
    }

    rerender() {
        this._map = '';
        console.clear();
        this.render();
    }
}
