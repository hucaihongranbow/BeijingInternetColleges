$(function(){

 load_hotwz();
 
 load_pinglun();
 

 $("#btn_pinglun").on("click",function(){Addpinglun();});
 
})

function Addpinglun()
{  

    if(document.getElementById('pintluncontent').value=="")
    {
       alert("请先输入评论内容!");
       return ;
    }
    
    
    $.ajax({ type: "POST",
        url: "../handle/handle_pinglun.ashx",
        data: { content:document.getElementById('pintluncontent').value,code:$("#code").text() },
        cache: false,
        async: false,
        success: function(json) {

          if(json)
          {
            alert("评论成功!");
           document.getElementById('pintluncontent').value="";
            load_pinglun();
          }
          else
          {
            alert("评论失败，请稍后重试");
          }
          
          
        }
    })
    
}
function load_pinglun()
{
         var hash;
    hash = (!window.location.search) ? "?1" : window.location.search; 
 $.ajax({ type: "POST",
        url: "../handle/handle_hotwz.ashx",
        data: { c_type: "4",code:$("#code").text(),page_no: hash },
        cache: false,
        async: false,
        success: function(json) {

          $("#remarklist").html(json) ;

        }
    })

}

function load_hotwz()
{
    $.ajax({ type: "POST",
        url: "../handle/handle_hotwz.ashx",
        data: { c_type: "1" },
        cache: false,
        async: false,
        success: function(json) {

          $("#hotwz").html(json) ;

        }
    })
    
     $.ajax({ type: "POST",
        url: "../handle/handle_hotwz.ashx",
        data: { c_type: "2" },
        cache: false,
        async: false,
        success: function(json) {

          $("#zxwz").html(json) ;

        }
    })
    
      $.ajax({ type: "POST",
        url: "../handle/handle_hotwz.ashx",
        data: { c_type: "3" },
        cache: false,
        async: false,
        success: function(json) {

          $("#circle_img").html(json) ;

        }
    })

 }
