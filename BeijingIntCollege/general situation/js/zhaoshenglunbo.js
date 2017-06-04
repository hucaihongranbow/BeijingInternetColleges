window.onload=function(){
    (function(){
        var lunbotuRight=document.getElementById("lunbotuRight");
        var lunbotuRightUl=lunbotuRight.children[0];
        var lunbotuRightUlLi=lunbotuRightUl.children;
        lunbotuRightUlLi[0].style.zIndex="99";
        lunbotuRightUlLi[0].style.opacity="1";
        var s=0;
        var timer;
        function timerInter(){
            if (s>4) {
                s=0;
            };
            for (var b = 0; b < lunbotuRightUlLi.length; b++) {
                lunbotuRightUlLi[b].style.zIndex="0";
                lunbotuRightUlLi[b].style.opacity="0";
                lunbotuRightUlLi[b].className="";
            };
            lunbotuRightUlLi[s].className="lunbotuRightChange";
            s++;
        }
        timer=setInterval(timerInter, 4000)
        var lunbotuRightPoint=document.getElementById('lunbotuRightPoint');
        var lunbotuPointSpan=lunbotuRightPoint.children;
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
                };
                lunbotuRightUlLi[z].style.zIndex="99";
                lunbotuRightUlLi[z].style.opacity="1";
                var s=z;
                timerA=setInterval(timerInter,4000);
            }
        };
    })();

//评论
    function $(id){
        return document.getElementById(id);
    }
    var comment=$("comment");
    var publish=$("publish");
    var allComment=$("allComment");
    var page=$("page");
    var pageUp=$("pageUp");
    var pageDown=$("pageDown");
    var pageNumber=$("pageNumber");
    var commentAndNumber=$("commentAndNumber");
    publish.onclick=function(){
        if(comment.value==""){
            alert("请输入内容");
        }else{
            // alert("评论成功");
            createContent();
            comment.value="";
        };
    }
    function createContent(){
        var commentWords="<div class='sub_div'>"+comment.value+"</div>"+allComment.innerHTML;
        var sub_div=document.getElementsByClassName("sub_div");
        var sub_divNumber=Math.floor(sub_div.length/5)+1;
        // console.log(sub_divNumber);
        var NumberSpan=document.getElementsByClassName("NumberA");
        var NumberSpanA=Math.floor(NumberSpan.length/5);
        if (NumberSpan.length==sub_divNumber-1) {
            var NumberSpan=document.createElement("span");
            NumberSpan.className="NumberA";
            NumberSpan.innerHTML=sub_divNumber;
            page.appendChild(NumberSpan);

            //创建所有评论div
            var allCommentDiv=document.createElement("div");
            allCommentDiv.className="allCommentDiv";
            commentAndNumber.appendChild(allCommentDiv); 
            console.log(commentAndNumber);
            console.log(allCommentDiv[1]);
        };
        var allCommentDiv=document.getElementsByClassName("allCommentDiv");
        if (sub_div.length<5) {
            allCommentDiv[0].innerHTML=commentWords;
        };
        if (sub_div.length>=5&&sub_div.length<10) {
            allCommentDiv[1].innerHTML=commentWords;
        };
        // if (sub_div.length<5) {
        //     for (var i = 0; i < sub_div.length; i++) {
        //         allCommentDiv[0].appendChild(sub_div[i]);
        //     };
        // };
    }
    
}
