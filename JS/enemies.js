function Enemies(game, ) {
    this.game = game;
    this.img = new Image();
    this.img.src = "./img/b58e25da5fffafb96a2f9e8f0b000857.png";
    this.x = -100;
    this.y = 0;
    this.width = 120;
    this.height = 120;
  }
  
  Enemies.prototype.draw = function() {
    this.game.ctx.drawImage(this.img, this.x ,this.y, this.width, this.height);
  };
  
  Enemies.prototype.move = function() {
    this.x += 2.1;
  };