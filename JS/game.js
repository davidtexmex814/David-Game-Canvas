function Game(canvadId) {
    this.canvas = document.getElementById(canvadId);
    this.ctx = this.canvas.getContext("2d");
    this.background = new Background (this);
;}

Game.prototype.start = function(){
    this.draw();
}
Game.prototype.draw = function(){
    this.background.draw();
}