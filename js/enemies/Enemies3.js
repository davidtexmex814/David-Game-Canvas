function Enemies3(game,) {
    this.game = game;
    this.img = new Image();
    this.img.src = "./img/bills_fukkatsu_no_f_by_alexiscabo1-d91z7q7.png";
    this.x = -4000;
    this.y = 10;
    this.width = 120;
    this.height = 120;
  }
  
  Enemies3.prototype.draw = function() {
    this.game.ctx.drawImage(this.img, this.x ,this.y, this.width, this.height);
  };
  Enemies3.prototype.move = function() {
    this.x += 2.1;
  };

