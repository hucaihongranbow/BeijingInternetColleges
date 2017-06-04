//评论
    function $(id){
        return document.getElementById(id);
    }
    var criticism_json3 = [
    ];
    var criticism_ul = document.getElementById('ul');   
    var Muitos_text = document.getElementById('pintluncontent'); 
    var publish = document.getElementById('btn_pinglun');  
    function Trends_create(begin,index){
        if(criticism_json3.length!=0){
            for(var i=begin;(criticism_json3.length-begin>=5?i<5:i<criticism_json3.length);i++){
                var li = document.createElement('li');
                li.innerText = criticism_json3[i];
                criticism_ul.insertBefore(li,null);
                if(criticism_json3.length>=5?i==4:i==criticism_json3.length-1){
                    li.className = "bottom";
                }
            }
        }else{
            return false;
        }
        var footer = document.getElementById('footer');
        footer_nuber = Math.ceil(criticism_json3.length/5);
        footer.innerText = footer_nuber;
        var cada_footer = document.getElementById('cada_footer');
        cada_footer.innerHTML = "";
        for(var j=1;j<=footer_nuber;j++){
            var span = document.createElement('span');
            span.innerText = j;
            if(j-1==index){
                span.className = 'bg';
            }
            cada_footer.insertBefore(span,null);
        }
        if(begin==0){
        var span = cada_footer.children;
            for(var y=0;y<span.length;y++){
                if(span[y].innerText==1){
                    span[y].className = 'bg';
                }
            }
        }
        var page = cada_footer.children;
        for(var k=0;k<page.length;k++){
            page[k].onclick = function(){
                for(var k=0;k<page.length;k++){
                page[k].index = k;
                page[k].className = ''; 
            }
            criticism_ul.innerHTML = '';    
            Trends_create(this.index*5,this.index);
            }
        }
    }
    Trends_create(0);   
    publish.onclick = function(){
        var reg = /^\s*$/g;
        if(!reg.test(Muitos_text.value)&&Muitos_text.value!==''){
        content = Muitos_text.value;
        Muitos_text.value = '';
        criticism_json3.unshift(content);
        alert("评论成功!");
        criticism_ul.innerHTML = '';
        Trends_create(0);
        }else{alert("评论内容不能为空!");}
    }
    function callBack(){
        var prev = document.getElementsByClassName('prev')[0];
        var next = document.getElementsByClassName('next')[0];
        prev.onclick = function(){
            paging(false);
            callBack();
        } 
        next.onclick = function(){
            paging(true);
            callBack();
        } 
        function paging(Boolean){
            var pages = cada_footer.children;
            for(var k=0;k<pages.length;k++){
                if(pages[k].className=="bg"){
                    if(Boolean&&k!=(pages.length-1)){
                        for(var i=0;i<pages.length;i++){
                        pages[i].index = i;
                        pages[i].className = '';
                    }
                        pages[k+1].className = 'bg';
                        criticism_ul.innerHTML = '';
                        Trends_create((k+1)*5,pages[k+1].index);
                        return;
                    }
                    if(!Boolean&&k!=0){
                        for(var i=0;i<pages.length;i++){
                        pages[i].index = i;
                        pages[i].className = '';
                    }
                        pages[k-1].className = 'bg';
                        criticism_ul.innerHTML = '';
                        Trends_create((k-1)*5,pages[k-1].index);
                        return;
                    }
                }
            }
        }
    }
    callBack();