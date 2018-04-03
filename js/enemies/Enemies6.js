function Enemies6(game,) {
    this.game = game;
    this.img = new Image();
    this.img.src = "./img/golden_freezer_by_naironkr-db8w44q.png";
    this.x = -10000;
    this.y = 370;
    this.width = 120;
    this.height = 120;
  }
  
  Enemies6.prototype.draw = function() {
    this.game.ctx.drawImage(this.img, this.x ,this.y, this.width, this.height);
  };
  Enemies6.prototype.move = function() {
    this.x += 2.1;
  };

