

function Mover(loc, vel, acc, len, clr){
  this.loc = loc;
  this.vel = vel;
  this.acc = acc;
  this.len = len;
  this.clr = clr;
}

function Attractor(loc, vel, acc, len, clr){
  this.loc = loc;
  this.vel = vel;
  this.acc = acc;
  this.len = len;
  this.clr = clr;
}

function Repeller(loc, vel, acc, len, clr){
  this.loc = loc;
  this.vel = vel;
  this.acc = acc;
  this.len = len;
  this.clr = clr;
}


Mover.prototype.update = function(){

  this.loc.add(this.vel);
  if(this.loc.x >= (window.innerWidth  - this.len)|| this.loc.x <= this.len){
     this.vel.x *= -1;
  }
  if(this.loc.y >= window.innerHeight - this.len || this.loc.y <= this.len){
     this.vel.y *= -1;
  }

  this.render();
}

Mover.prototype.accelerate = function(attractLoc, repelLoc){


    var dv = new JSVector(attractLoc.x - this.loc.x, attractLoc.y - this.loc.y);

    distance = Math.sqrt( Math.pow(dv.x, 2) + Math.pow(dv.y , 2));


    var maxDistance = 200;
    if (distance < maxDistance) {
        var scale = 1-distance/maxDistance;



    }


}

Attractor.prototype.update = function(movers){

  this.loc.add(this.vel);
  if(this.loc.x >= (window.innerWidth  - this.len)|| this.loc.x <= this.len){
     this.vel.x *= -1;
  }
  if(this.loc.y >= window.innerHeight - this.len || this.loc.y <= this.len){
     this.vel.y *= -1;
  }
  for(i = 0; i < movers.length -1; i++){
  if(this.loc.x + 10 <= || this.locx - 10 >= )
}
  this.render();
}


Repeller.prototype.update = function(){

  if(this.loc.x >= window.innerWidth){
    this.loc.x = 0;
  }
  if(this.loc.x >= 0){
    this.loc.x = window.innerWidth;
  }
  if(this.loc.y >= window.innerHeight){
    this.loc.y = 0;
  }
  if(this.loc.y >= 0){
    this.loc.y = window.innerHeight;
  }
  repeller.render();
}

Mover.prototype.render = function(){
    ctx.fillStyle = this.clr;
    ctx.beginPath();
    ctx.arc(this.loc.x, this.loc.y, this.len, Math.PI*2,0,false);
    ctx.stroke();
    ctx.fill();
}

Attractor.prototype.render = function(){
  //console.log(this.loc.x);
  ctx.fillStyle = this.clr;
  ctx.beginPath();
  ctx.rect(this.loc.x, this.loc.y, this.len, this.len);
  ctx.stroke();
  ctx.fill();
}
Repeller.prototype.render = function(){
  //console.log(this.loc.x);
  ctx.fillStyle = this.clr;
  ctx.beginPath();
  ctx.rect(this.loc.x, this.loc.y, this.len, this.len);
  ctx.stroke();
  ctx.fill();
}
