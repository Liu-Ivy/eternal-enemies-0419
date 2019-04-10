'use strict';

function Game(canvas){
    this.player = null;
    this.enemies = [];
    this.canvas = canvas;
    this.ctx = this.canvas.getContex('2d');
}

Game.prototype.startLoop = function(){

    const loop = () => {
        this.clearCanvas();
        this.updateCanvas();
        this.drawCanvas();


    window.requestionAnimationFrame(loop);
    }
   window.requestionAnimationFrame(loop);
}

Game.prototype.clearCanvas = function(){
    this.ctx.clearRect( 0, 0, this.canvas.width, this.canvas.height);
}

Game.prototype.updateCanvas = function(){

}

Game.prototype.drawCanvas = function(){

}