class Game {

    constructor() {
        this.nodeSize = 4;
        this.xLen = 800 / this.nodeSize;
        this.yLen = 400 / this.nodeSize;
        this.oldGrid = [];
    }

    createGrid() {
        let arr = [];
        for (let i = 0; i < this.xLen; i++) {
            arr[i] = [];
            for (let j = 0; j < this.yLen; j++) {
                arr[i][j] = 0;
            }
        }
        return arr;
    }

    setup() {
        this.oldGrid = this.createGrid();
        for (let i = 0; i < this.xLen; i++) {
            for (let j = 0; j < this.yLen; j++) {
                this.oldGrid[i][j] = Math.round(Math.random());
            }
        }
    }

    isCell(x, y) {
        if (x < 0 || x >= this.xLen || y < 0 || y >= this.yLen) {
            return 0;
        } else {
            return this.oldGrid[x][y];
        }
    };

    updateGrid() {
        let update = this.createGrid();
        let count; 
        for (let i = 0; i < this.xLen; i++) {
            for (let j = 0; j < this.yLen; j++) {
                count = 0;
                for (let x = i - 1; x < i + 2; x++) {
                    for (let y = j - 1; y < j + 2; y++) {
                        if (!(x == i && y == j)) {
                            count += this.isCell(x, y);
                        }
                    }
                }
                if (this.oldGrid[i][j] == 1 && (count < 2 || count > 3)) {
                    update[i][j] = 0;
                } else if (this.oldGrid[i][j] == 0 && count == 3) {
                    update[i][j] = 1;
                } else {
                    update[i][j] = this.oldGrid[i][j];
                }
            }
        }
        return update;
    }

    draw() {
        let color;
        let size = this.nodeSize;      
        for (let i = 0; i < this.xLen; i++) {
            for (let j = 0; j < this.yLen; j++) {
                if (this.oldGrid[i][j] == 1) {
                    color = `#E27C1d`;
                } else {
                    color = `#341E72`;
                }
                let x = i * size;
                let y = j * size;
                ctx.fillStyle = color;
                ctx.fillRect(x, y, size, size);
            }
        }
        this.oldGrid = this.updateGrid();
    }
}
module.exports = Game;
