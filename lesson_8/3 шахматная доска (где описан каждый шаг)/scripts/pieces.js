'use strict';

class ChessPiece {
    constructor(color) {
        if (color !== 'white' && color !== 'black') {
            throw new Error('Неверный цвет фигуры');
        }
        this._color = color;
        this._row = this._color === 'white' ? 1 : 8;
        this._col = null;
        this._code = null;
    }

    get position() {
        return {
            row: this._row,
            col: this._col
        }
    }

    get code() {
        return this._code
    }

    setPosition(row, col) {
        this._row = row;
        this._col = col
    }
}

class MinorPieces extends ChessPiece {
    constructor(color, flank) {
        super(color);
        if (flank !== 'left' && flank !== 'right') {
            throw new Error('Неверный фланг');
        }
        this._flank = flank;
    }
}

class King extends ChessPiece {
    constructor(color) {
        super(color);
        this._col = 'e';
        this._code = this._color === 'white' ? '&#9812;' : '&#9818;'
    }
}

class Queen extends ChessPiece {
    constructor(color) {
        super(color);
        this._col = 'd';
        this._code = this._color === 'white' ? '&#9813;' : '&#9819;'
    }
}

class Rook extends MinorPieces {
    constructor(color, flank) {
        super(color, flank);
        this._col = this._flank === 'left' ? 'a' : 'h';
        this._code = this._color === 'white' ? '&#9814;' : '&#9820;'
    }
}

class Bishop extends MinorPieces {
    constructor(color, flank) {
        super(color, flank);
        this._col = this._flank === 'left' ? 'c' : 'f';
        this._code = this._color === 'white' ? '&#9815;' : '&#9821;'
    }
}

class Knight extends MinorPieces {
    constructor(color, flank) {
        super(color, flank);
        this._col = this._flank === 'left' ? 'b' : 'g';
        this._code = this._color === 'white' ? '&#9816;' : '&#9822;'
    }
}

class Pawn extends ChessPiece {
    constructor(color, id) {
        super(color);
        if (id < 1 || id > 8) {
            throw new Error('Неверный id пешки');
        }
        this._colChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        this._id = id;
        this._col = this._colChars[id - 1];
        this._row = this._color === 'white' ? 2 : 7;
        this._code = this._color === 'white' ? '&#9817;' : '&#9823;'
    }
}

