const assert = require("chai").assert;
const Game = require("../js/Game");

const game = new Game();

describe("Testing game logic", function() {

    it("Array creation", function() {
        let grid = game.createGrid();
        assert.isArray(grid);
    });

    it("Array filling", function() {
        let emptyGrid = game.createGrid();
        let filledGrid = game.setup();
        assert.notEqual(emptyGrid, filledGrid);
    });

    it("Array updating", function() {
        let grid = game.setup();
        grid = game.updateGrid();
        assert.isArray(grid);
    });
});