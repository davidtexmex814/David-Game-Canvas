function Background(game) {
    this.x = 0;
    this.y = 0;
    this.game = game;
    this.img = new Image();
    this.img.src = "./img/700_FO70389289_032c59c6f16430f8eca95b87db38ec83.jpg";
};


Background.prototype.draw = function() {
    if(this.x++ > this.game.canvas.width){
      this.x = 0;
    }
    this.game.ctx.drawImage(this.img, this.x, this.y, this.game.canvas.width, this.game.canvas.height);
    this.game.ctx.drawImage(this.img, this.x - this.game.canvas.width, this.y, this.game.canvas.width, this.game.canvas.height);
};