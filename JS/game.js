function Game(canvadId) {
    this.canvas = document.getElementById(canvadId);
    this.ctx = this.canvas.getContext("2d");
    this.background = new Background (this);
    this.player = new Player (this);
    this.enemiesPrincipal = new EnemiesPrincipal (this);
    this.enemies2 = new Enemies2 (this);
    this.enemies3 = new Enemies3 (this);
    this.enemies4 = new Enemies4 (this);
    this.enemies5 = new Enemies5 (this);
    this.enemies6 = new Enemies6 (this);
};
Game.prototype.draw = function(){
    this.background.draw();
    this.player.draw();
    this.enemiesPrincipal.draw();
    this.enemiesPrincipal.move();
    this.enemies2.draw();
    this.enemies2.move();
    this.enemies3.draw();
    this.enemies3.move();
    this.enemies4.draw();
    this.enemies4.move();
    this.enemies5.draw();
    this.enemies5.move();
    this.enemies6.draw();
    this.enemies6.move();
};
Game.prototype.start = function(){
    setInterval(function(){
        this.draw();
    if (this.collision1()) {
        this.gameOver();
    }
    if (this.collision2()) {
        this.gameOver();
    }
    if (this.collision3()) {
        this.gameOver();
    }
    if (this.collision4()) {
        this.gameOver();
    }
    if (this.collision5()) {
        this.gameOver();
    }
    if (this.collision6()) {
        this.gameOver();
    }
    }.bind(this), 10);
    this.player.move();
};
Game.prototype.collision1 = function(player, enemiesPrincipal) {
    return !( 
        ((this.player.y -80 + this.player.height) < (this.enemiesPrincipal.y)) || (this.player.y +100 > (this.enemiesPrincipal.y + this.enemiesPrincipal.height)) 
                                                                               || 
          ((this.player.x -100 + this.player.width) < this.enemiesPrincipal.x) || (this.player.x +80 > (this.enemiesPrincipal.x + this.enemiesPrincipal.width))   
    
                );
    }
    Game.prototype.collision2 = function(player, enemies2) {
        return !( 
                  ((this.player.y -80 + this.player.height) < (this.enemies2.y)) || (this.player.y +60 > (this.enemies2.y + this.enemies2.height)) 
                                                                                 || 
                     ((this.player.x -90 + this.player.width) < this.enemies2.x) || (this.player.x +80 > (this.enemies2.x + this.enemies2.width))   
    
                );
    }
    Game.prototype.collision3 = function(player, enemies3) {
        return !( 
                  ((this.player.y -80 + this.player.height) < (this.enemies3.y)) || (this.player.y +60 > (this.enemies3.y + this.enemies3.height)) 
                                                                                 || 
                     ((this.player.x -90 + this.player.width) < this.enemies3.x) || (this.player.x +80 > (this.enemies3.x + this.enemies3.width))   
    
                );
    }
    Game.prototype.collision4 = function(player, enemies4) {
        return !( 
                  ((this.player.y -80 + this.player.height) < (this.enemies4.y)) || (this.player.y +60 > (this.enemies4.y + this.enemies4.height)) 
                                                                                 || 
                     ((this.player.x -90 + this.player.width) < this.enemies4.x) || (this.player.x +80 > (this.enemies4.x + this.enemies4.width))   
    
                );
    }
    Game.prototype.collision5 = function(player, enemies5) {
        return !( 
                  ((this.player.y -80 + this.player.height) < (this.enemies5.y)) || (this.player.y +60 > (this.enemies5.y + this.enemies5.height)) 
                                                                                 || 
                     ((this.player.x -90 + this.player.width) < this.enemies5.x) || (this.player.x +80 > (this.enemies5.x + this.enemies5.width))   
    
                );
    }
    Game.prototype.collision6 = function(player, enemies6) {
        return !( 
                  ((this.player.y -80 + this.player.height) < (this.enemies6.y)) || (this.player.y +60 > (this.enemies6.y + this.enemies6.height)) 
                                                                                 || 
                     ((this.player.x -90 + this.player.width) < this.enemies6.x) || (this.player.x +80 > (this.enemies6.x + this.enemies6.width))   
    
                );
    }
    Game.prototype.gameOver = function(){
        if(!confirm("Game Over, desea reiniciar el juego ?")){
            return false;
        } else {
            window.location.href = "/Users/davidmolina814/Desktop/myJuegoCanvas/index.html";
        }   
    };