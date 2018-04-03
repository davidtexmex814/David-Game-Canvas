function Enemies4(game,) {
    this.game = game;
    this.img = new Image();
    this.img.src = "./img/Champa_Artwork_Oficial.png";
    this.x = -6000;
    this.y = 350;
    this.width = 120;
    this.height = 120;
  }
  
  Enemies4.prototype.draw = function() {
    this.game.ctx.drawImage(this.img, this.x ,this.y, this.width, this.height);
  };
  Enemies4.prototype.move = function() {
    this.x += 2.1;
  };

