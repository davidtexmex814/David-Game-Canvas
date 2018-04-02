function Background(game) {
    this.x = 0;
    this.y = 0;
    this.game = game;
    this.img = new Image();
    this.img.src = "./img/namek.jpg";
}

setInterval(draw,10);

Background.prototype.draw = function() {
    if(x++ > this.game.canvas.width){
        x = 0;
    }

    this.game.ctx.clearRect(this.x, this.y, this.game.canvas.width, this.game.canvas.height);
    this.game.ctx.drawImage(this.img, this.x, this.y, this.game.canvas.width, this.game.canvas.height);
    this.game.ctx.drawImage(this.img, this.x - this.game.canvas.width, this.y, this.game.canvas.width, this.game.canvas.height)
};