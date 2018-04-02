function Game(canvadId) {
    this.canvas = document.getElementById(canvadId);
    this.ctx = this.canvas.getContext("2d");
    this.background = new Background (this);
    this.player = new Player (this);
};

Game.prototype.start = function(){
    setInterval(function(){
        this.draw();
    }.bind(this),1);
};
Game.prototype.draw = function(){
    this.background.draw();
    this.player.draw();
};
