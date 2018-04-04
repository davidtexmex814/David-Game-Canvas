function Player(game){
    this.game = game;
    this.x = 770;
    this.y0 = 100;
    this.y = this.y0;
    this.width = 150;
    this.height = 120;
    this.img = new Image();
    this.img.src = "./img/cf2670330a0fd89012d5ad5004d23187.png";
    this.vx = 37;
    this.vy = 37;    
}
Player.prototype.draw = function(){
    this.game.ctx.drawImage(this.img, this.x ,this.y, this.width, this.height);
};
Player.prototype.teclas = function () {
document.onkeydown = function(event) {
    switch (event.keyCode) {
        case 37:
         this.x -= this.vx;
         break;
        case 38:
         this.y -= this.vy; 
         break;
        case 39:
         this.x += this.vx; 
         break;
        case 40:
         this.y += this.vy; 
         break; 
        case 16:
         this.game.createKamehameha();
         break;
        };
    }.bind(this);
};