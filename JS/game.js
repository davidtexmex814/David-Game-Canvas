function Game(canvadId) {
    this.canvas = document.getElementById(canvadId);
    this.ctx = this.canvas.getContext("2d");
    this.background = new Background (this);
    this.player = new Player (this);
    this.ondaVital = [];
    this.enemies = [];
};
Game.prototype.start = function(){
    setInterval(function(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.draw();
        this.move();
        this.collision();
    }.bind(this), 100/60);
    this.createEnemy();
};
Game.prototype.draw = function(){
        this.background.draw();
        this.player.draw();
        this.ondaVital.forEach(function(kamehameha){kamehameha.draw();})
        this.enemies.forEach(function(enemy){enemy.draw();});
};
Game.prototype.move = function(){
    this.player.keyboard();
    this.ondaVital.forEach(function(kamehameha){kamehameha.moverKamehameha();})
    this.enemies.forEach(function(enemy){enemy.moverEnemy();});
};
Game.prototype.createKamehameha = function () {
    this.ondaVital.push(new Kamehameha (this))
};
Game.prototype.createEnemy = function(){
    setInterval(function(){
    this.enemies.push(new Enemy(this,0,(0,this.canvas.height/2 * Math.random())))
    }.bind(this),3000)
}
Game.prototype.eliminateKamehameha = function(){
    this.ondaVital = this.ondaVital.filter(function(kamehameha){
        return kamehameha.x < this.canvas.width
    })
}
Game.prototype.eliminateEnemy = function(){
    this.enemies = this.enemies.filter(function(enemy){
        return enemy.x < this.canvas.width
    })
}
Game.prototype.collision = function() {
    this.enemies.forEach(function(enemy){
        if (this.player.x +60 < enemy.x + enemy.width  && this.player.x -60 + this.player.width  > enemy.x &&
            this.player.y +60 < enemy.y + enemy.height && this.player.y -70 + this.player.height > enemy.y) {
                return this.gameOver();
    }
    this.ondaVital.forEach(function(onda){
     if (onda.x +60 < enemy.x + enemy.width  && onda.x -60 + onda.width  > enemy.x &&
        onda.y +60 < enemy.y + enemy.height && onda.y -70 + onda.height > enemy.y) {
             this.enemies.splice(this.enemies.indexOf(enemy),1);}
    }.bind(this));
  }.bind(this));   
}
Game.prototype.gameOver = function(){
    window.location.href = "./gameOver.html";  
};