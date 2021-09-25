class Map {
    constructor(cols, rows) {
        this.cols = cols;
        this.rows = rows;
        this.map = '';
    }

    render() {
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                if (player.getPlace().col === col && player.getPlace().row === row) {
                    this.map += 'o '
                } else {
                    this.map += 'x ';
                }
            }

            this.map += '\n';
        }

        console.log(this.map);
    }

    clear() {
        this.map = '';
        console.clear();
    }

    rerender() {
        this.map = '';
        console.clear();
        this.render();
    }
}
