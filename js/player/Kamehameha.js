function Kamehameha(game){
    this.game = game;
    this.img = new Image();
    this.img.src = "/Users/davidmolina814/Desktop/myJuegoCanvas/img/kamehameha_style_blue_png_by_lewildgoku-d5wny3l.png";
    this.x = this.game.player.x + this.game.player.width;
    this.y = this.game.player.y + this.game.player.height;
    this.vx = 20;
    this.vy = 20;
}

Kamehameha.prototype.draw = function(){
    for(var i in this.player.ondaVital){
        var ondaKi = ondaVital[i];
        this.game.ctx.drawImage(this.img, this.x ,this.y, this.width, this.height);
    }
}


Kamehameha.prototype.onda = function () {
    for(var i in this.player.ondaVital){
        var ondaKi = ondaVital[i];
        this.ondaKi.x = -2;
    }
}