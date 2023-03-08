const canvas = document.getElementById("gamegrid");
const ctx = canvas.getContext("2d");

const game = new Game();

game.setup();

window.setInterval(() => {
    game.draw();
}, 200);