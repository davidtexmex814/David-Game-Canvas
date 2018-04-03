function EnemiesPrincipal(game,) {
    this.game = game;
    this.img = new Image();
    this.img.src = "./img/Jiren_(DBDB).png";
    this.x = -100;
    this.y = 200;
    this.width = 150;
    this.height = 220;
  }
  
  EnemiesPrincipal.prototype.draw = function() {
    setInterval(function(){
      if(this.x++ > this.game.canvas.width){
        this.x = 0;
      }
  }.bind(this), 5000);
    this.game.ctx.drawImage(this.img, this.x ,this.y, this.width, this.height);
  };
  EnemiesPrincipal.prototype.move = function() {
    this.x += 1;
  };