function Kamehameha(game){
    this.game = game;
    this.x = this.game.player.x + this.game.player.width -870;
    this.y = this.game.player.y  + this.game.player.height -160;
    this.width = 1000;
    this.height = 200;
    this.vx = 4;

    this.img = new Image();
    this.img.src = "./img/kamehameha_style_blue_png_by_lewildgoku-d5wny3l.png"
};
Kamehameha.prototype.draw = function(){
        
        this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
};
Kamehameha.prototype.moverKamehameha = function () {
    this.x -= this.vx;
};