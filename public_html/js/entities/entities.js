// TODO

game.PlayerEntity = me.Entity.extend({
    init: function(x, y, settings){
        this._super(me.Entity, 'init', [x, y, {
            image: "mario",
            spritewidth: "128",
            spriteheight: "128",
            height: 128,
            width: 128,
            getShape: function(){
                return (new me.Rect(0, 0, 128, 128)).toPolygon();
            }
        }]);
    
        this.renderable.addAnimation("idle", [3]);
        this.renderable.addAnimation("smallWalk", [8, 9, 10, 11, 12, 13], 80);
        
        this.renderable.setCurrentAnimation("idle");
        
        this.body.setVelocity(5, 20);
        me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
    
    },
    
    update: function(delta){
        if(me.input.isKeyPressed("right")){
            this.body.vel.x += this.body.accel.x * me.timer.tick;
        }else{
            this.body.vel.x = 0;
        }
        
        this.body.update(delta);
        me.collision.check(this, true, this.collideHandler(this), true);
        
        if(this.body.vel.x !== 0){
            this.renderable.setCurrentAnimation("smallWalk");
            this.renderable.setAnimationFrame();
        }else{
            this.renderable.setCurrentAnimation("idle");
        }
        
        this._super(me.Entity, "update", [delta]);
        return true;
        
    },
    
    collideHandler: function(response){
        
    }
    
    
});