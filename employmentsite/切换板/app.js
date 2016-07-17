/**
 * Created by wwtliu on 14/10/24.
 */

function $(id){
    return typeof  id=="string"?document.getElementById(id):id;
}

window.onload = function(){
    var titleName = $("tab-title").getElementsByTagName("li");
    var tabContent = $("tab-content").getElementsByTagName("div");
    for(var i = 0;i<titleName.length;i++){
        titleName[i].id=i;
        titleName[i].onmouseover = function(){
            for(var j = 0;j<titleName.length;j++){
                titleName[j].className = "";
                tabContent[j].style.display = "none"
            }
          // titleName[this.id].className= "select";
           //tabContent[this.id].style.display = "block";
            console.log(i);
            this.className= "select";
            tabContent[this.id].style.display = "block";

        }
    }
}