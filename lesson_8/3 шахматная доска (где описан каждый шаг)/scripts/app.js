class Game {
    constructor() {
        this._colChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        this._pieceColors = ['white', 'black'];
        this._pieceFlanks = ['left', 'right'];
        this._pieceNames = ['king', 'queen', 'rook', 'bishop', 'knight'];
        this._pieces = []; // Массив, в котором будут храниться все экземпляры фигур
    }

    _createTDMarkup(row, col, className) {
        return `
            <td class="${className}" data-row="${row}" data-col="${col}"></td>    
        `
    }

    _renderMap() {
        const container = document.querySelector('.container');
        const table = document.createElement('table');
        const tableBody = document.createElement('tbody');
        let isBlack = true;
        for (let i = 1; i <= 8; i++) {
            let trEl = document.createElement('tr');
            let tdInfoEl = document.createElement('td');
            tdInfoEl.textContent = i;
            trEl.append(tdInfoEl);
             for (let j = 0; j < 8; j++) {
                 trEl.insertAdjacentHTML('beforeend', this._createTDMarkup(i, this._colChars[j], this._pieceColors[Number(isBlack)]));
                 isBlack = !isBlack;
             }
             isBlack = !isBlack;
             tableBody.prepend(trEl);
        }
        const trInfoEl = document.createElement('tr');
        trInfoEl.insertAdjacentHTML('afterbegin', '<td></td>');
        for (let i = 0; i < 8; i++) {
            trInfoEl.insertAdjacentHTML('beforeend', `<td>${this._colChars[i]}</td>`);
        }
        tableBody.append(trInfoEl);
        table.append(tableBody);
        container.append(table);
    }

    _addPiece(name, color, flank=null) {
        let piece = null;
        switch (name) {
            case 'king':
                piece = new King(color);
                break;
            case 'queen':
                piece = new Queen(color);
                break;
            case 'rook':
                piece = new Rook(color, flank);
                break;
            case 'bishop':
                piece = new Bishop(color, flank);
                break;
            case 'knight':
                piece = new Knight(color, flank);
                break;
        }

        const tdElem = document.querySelector(`td[data-row="${piece.position.row}"][data-col="${piece.position.col}"]`);
        this._insert_piece(tdElem, piece.code);
        this._pieces.push(piece);
    }

    _setupPieces() {
        for (let piece of this._pieceNames) {
            for (let color of this._pieceColors) {
                if (piece === 'king' || piece === 'queen') {
                    this._addPiece(piece, color);
                } else {
                    for (let flank of this._pieceFlanks) {
                        this._addPiece(piece, color, flank);
                    }
                }
            }
        }
    }

    _setupPawns(color) {
        const row = color === 'white' ? 2 : 7;
        for (let i = 1; i <= 8; i++) {
            const tdElems = document.querySelectorAll(`td[data-row="${row}"]`);
            const pawn = new Pawn(color, i);
            this._insert_piece(tdElems[i - 1], pawn.code);
            this._pieces.push(pawn);
        }
    }

    _insert_piece(node, code) {
        node.insertAdjacentHTML('afterbegin', `<span>${code}</span>`);
    }

    run() {
        this._renderMap();
        this._setupPawns('white');
        this._setupPawns('black');
        this._setupPieces();
    }
}

new Game().run()
