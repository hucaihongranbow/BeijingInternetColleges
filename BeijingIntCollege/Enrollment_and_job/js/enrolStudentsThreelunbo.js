window.onload=function(){
    (function(){
        var lunbotuRight=document.getElementById("lunbotuRight");
        var lunbotuRightPoint=document.getElementById('lunbotuRightPoint');
        var lunbotuPointSpan=lunbotuRightPoint.children;
        var lunbotuRightUl=lunbotuRight.children[0];
        var lunbotuRightUlLi=lunbotuRightUl.children;
        lunbotuRightUlLi[0].style.zIndex="99";
        lunbotuRightUlLi[0].style.opacity="1";
        lunbotuPointSpan[0].style.backgroundColor="#333";
        var s=1;
        var timer;
        function timerInter(){
            if (s>4) {
                s=0;
            };
            for (var b = 0; b < lunbotuRightUlLi.length; b++) {
                lunbotuRightUlLi[b].style.zIndex="0";
                lunbotuRightUlLi[b].style.opacity="0";
                lunbotuRightUlLi[b].className="";
                lunbotuPointSpan[b].style.backgroundColor="";
            };
            lunbotuRightUlLi[s].className="lunbotuRightChange";
            lunbotuPointSpan[s].style.backgroundColor="#333";
            s++;
        }
        timer=setInterval(timerInter, 4000);
        var timerA=null;
        for (var i = 0; i < lunbotuPointSpan.length; i++) {
            lunbotuPointSpan[i].index=i;
            lunbotuPointSpan[i].onclick=function(){
                var z=this.index;
                clearInterval(timer);
                clearInterval(timerA);
                for (var x = 0; x < lunbotuRightUlLi.length; x++) {
                    lunbotuRightUlLi[x].className="";
                    lunbotuRightUlLi[x].style.zIndex="0";
                    lunbotuRightUlLi[x].style.opacity="0";
                    lunbotuPointSpan[x].style.backgroundColor="";
                };
                lunbotuPointSpan[z].style.backgroundColor="#333";
                lunbotuRightUlLi[z].className="lunbotuRightChange";
                var s=z;
                timerA=setInterval(timerInter,4000);
            }
        };
    })();
    var commentParent=document.getElementById('commentParent');
    var commentClass=document.body.clientWidth;
    
    if (commentClass<=768) {
        commentParent.style.borderRight="0px solid white";
    }else{
        commentParent.style.borderRight="12px solid white";
    }; 
    window.onresize=function(){
        var commentClassA=document.body.clientWidth;
        if (commentClassA<=768) {
            commentParent.style.borderRight="0px solid white";
        }else{
            commentParent.style.borderRight="12px solid white";
        }; 
    } 
}
