function Enemies5(game,) {
    this.game = game;
    this.img = new Image();
    this.img.src = "./img/vegeta_ssjblue_by_saodvd-dbanyz4.png";
    this.x = -8000;
    this.y = 100;
    this.width = 120;
    this.height = 120;
  }
  
  Enemies5.prototype.draw = function() {
    this.game.ctx.drawImage(this.img, this.x ,this.y, this.width, this.height);
  };
  Enemies5.prototype.move = function() {
    this.x += 2.1;
  };

