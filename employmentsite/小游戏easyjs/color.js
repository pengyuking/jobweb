/**
 * Created by Administrator on 2016/3/10.
 */
var stage=new createjs.Stage("gameview");
createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener("tick",stage);
var gameview=new createjs.Container();
stage.addChild(gameview);
var n=2;
function addRect(){
    var cl=parseInt(Math.random()*1000000);
    var color="#"+cl;
    var x=parseInt(Math.random()*n);
    var y=parseInt(Math.random()*n);
    for (var indexX=0;indexX<n;indexX++){
        for(var indexY=0;indexY<n;indexY++){
            var r=new Rect(n,color);
            gameview.addChild(r);
            r.x=indexX;
            r.y=indexY;
            if(r.x==x&& r.y==y){
                r.setRectType(2);
            }
            r.x=indexX*(400/n);
            r.y=indexY*(400/n);
            if (r.getRectType()==2){
                r.addEventListener("click",function(){
                    if(n<15){
                        ++n;
                    }
                    gameview.removeAllChildren();
                    addRect();
                })
            }
        }
    }
}






function Rect(n,color){
    createjs.Shape.call(this);
    this.setRectType=function(type){
        this._RectType=type;
        switch (type){
            case 1:
                this.setColor(color);
                break;
            case 2:
                this.setColor("#ff0000");
                break;
        }
    };
    this.setColor=function(colorString){
        this.graphics.beginFill(colorString);
        this.graphics.drawRect(0,0,400/n-5,400/n-5);
        this.graphics.endFill();
    };
    this.getRectType=function(){
        return this._RectType;
    };
    this.setRectType(1);
}
Rect.prototype=new createjs.Shape();


addRect();




