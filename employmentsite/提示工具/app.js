/**
 * Created by wwtliu on 14/11/10.
 */

var className = "tooltip-box";

var getDocID = function(id){
    return document.getElementById(id);
}

var parentdiv = getDocID("div");


parentdiv.addEventListener("mouseover",function(e){
    var target = e.target;
    if(target.className == "tooltip"){
        var _html;
        var _id;
        var _width;
        switch (target.id){
            case "weibo":
                _id = "wb";
                _html = "hahaha";
                _width = 200;
                break;
            case "logo":
                _id = "lg";
                _html = "<img src='logo.png'>";
                _width = 300;
                break;
            case "hahaha":
            _id = "jkxy";
            _html = "<iframe src='https://www.baidu.com' width='500' height='300'></iframe>";
            _width = 600;
            break;
        }
        showTooltip(target,_id,_html,_width);
    }
});

function showTooltip(obj,id,html,width,height){
    if(document.getElementById(id) == null){
        var tooltipBox;
        tooltipBox = document.createElement("div");
        tooltipBox.className = className ;
        tooltipBox.id = id;
        tooltipBox.innerHTML = html;

        obj.appendChild(tooltipBox);

        tooltipBox.style.width = width?width+"px":"auto";
        tooltipBox.style.height = height?height+"px":"auto";
        //有问题

        tooltipBox.style.position = "absolute";
        tooltipBox.style.display = "block";

        var left = obj.offsetLeft;
        var top = obj.offsetTop+20;

        tooltipBox.style.left = left+"px";
        tooltipBox.style.top = top+"px";

        obj.addEventListener("mouseout",function(){
            setTimeout(function(){
                getDocID(id).style.display = "none";
            },100);
        });
//        obj.onmouseout = function(){
//            setTimeout(function(){
//                getDocID(id).style.display = "none";
//            },500);
//        }

    }else{
        getDocID(id).style.display = "block";
    }
}



//var wb = getDocID("weibo");


//wb.onmousemove = function(){
//    showTooltip(this,"wb","jikexueyuan",150);
//}

