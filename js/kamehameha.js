function Kamehameha(game){
    this.game = game;
    this.x = this.game.player.x + this.game.player.width -200;
    this.y = this.game.player.y  + this.game.player.height/2;
    this.r = 70;
    this.vx = 5;
};

Kamehameha.prototype.draw = function(){
        this.game.ctx.beginPath();
        this.game.ctx.fillStyle = "blue";
        this.game.ctx.arc(this.x, this.y, this.r,0, Math.PI * 2);
        this.game.ctx.fill();
        this.game.ctx.closePath();
};
Kamehameha.prototype.moverKamehameha = function () {
    this.x -= this.vx
};