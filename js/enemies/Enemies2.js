function Enemies2(game,) {
    this.game = game;
    this.img = new Image();
    this.img.src = "./img/97236dbaa84b01e4c01b4384ba5caf4b.png";
    this.x = -2000;
    this.y = 100;
    this.width = 80;
    this.height = 120;
  }
  
  Enemies2.prototype.draw = function() {
    this.game.ctx.drawImage(this.img, this.x ,this.y, this.width, this.height);
  };
  Enemies2.prototype.move = function() {
    this.x += 2.1;
  };

