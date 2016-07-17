/**
 * Created by Administrator on 2016/3/7.
 */
var jkcommon={
    init:function(){
        this.lessImgShow();
    },

    lessImgShow:function(){
        $('.imgbox').bind("mouseover",function(){
            var _pop=$(this).find('.img-pop');
            $(this).css({border:"2px solid red",width:"228px",height:"228px"});
            TweenMax.to(_pop,0.5,{top:0,ease:Bounce.easeOut});
        });
        $(document).bind("mouseout",function(){
            $('.imgbox').css({border:"0",width:"230px",height:"230px"});
            var _pop=$(this).find(".img-pop");
            TweenMax.to(_pop,0.5,{top:220,ease:Linear.easeNone});
        })
    }
}
$(function(){
    jkcommon.init();
})