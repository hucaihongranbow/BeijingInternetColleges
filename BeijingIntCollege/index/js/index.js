$(function () {

// 校园风光轮播
	window.onload=function(){
		$('.carousel').carousel();
	};

// 轮播
	 $(function(){
		 var i=0;
	  var timer=null;
	  
	  // 下一个按钮
	  $('.intro_btn_right').click(function(){
	  	clearInterval(timer);
	   i++;
	   if (i==$('.slides li').length-2) {
	    i=1; //这里不是i=0
	    $('.slides').css({left:0}); //保证无缝轮播，设置left值
	   };
	  
	   $('.slides').stop().animate({left:-i*parseInt($('.slides li').css('width'))},600);
	   console.log($('.slides li').css('width'))
	   autoplay();
	  });	

	  // 上一个按钮
	  $('.intro_btn_left').click(function(){
	  	clearInterval(timer);
	   i--;
	   if(i<=0){
	   		i=$('.slides li').length-3;
	   		$('.slides').css({left:-i*parseInt($('.slides li').css('width'))});
	   		i--;
	   }

	   $('.slides').stop().animate({left:-i*parseInt($('.slides li').css('width'))},600);
	   autoplay();
	  });

	  //定时器自动播放
	  autoplay();
	  function autoplay(){
	  	timer=setInterval(function(){
	     i++;

	    if (i==$('.slides li').length-2) {
	    i=1;
	    $('.slides').css({left:0});
	   };

	   $('.slides').stop().animate({left:-i*parseInt($('.slides li').css('width'))},600);
	  },3000);
	  	}

	  //鼠标移入，暂停自动播放，移出，开始自动播放
	  $('.scroll_img').hover(function(){ 
	   clearInterval(timer);
	  },function(){
	   timer=setInterval(function(){
	   i++;
	   if (i==$('.slides li').length-2) {
	    i=1;
	    $('.slides').css({left:0});
	   };
	  
	   $('.slides').stop().animate({left:-i*parseInt($('.slides li').css('width'))},600);
	   
	  },3000)
	  })
	  
	 })
	/*左侧分享*/
	window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdPic":"","bdStyle":"0","bdSize":"16"},"share":{},"image":{"viewList":["qzone","tsina","tqq","renren","weixin"],"viewText":"分享到：","viewSize":"16"}};
	// with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];
    $(".share").mouseenter(function (){
    	$(".share").animate({'left':'0'},300);
    });
    $(".share").mouseleave(function(){
          	$(".share").animate({'left':'-230px'},300);
          });
	/*左侧分享结束*/

	// 图片分享
	    // window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdPic":"","bdStyle":"0","bdSize":"16"},"image":{"viewList":["qzone","tsina","tqq","renren","weixin"],"viewText":"分享到：","viewSize":"16"}};
	    with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];
	// 结束
	$(".tab_bg li:first-child").css("background-color","#202e57");
	$(".tab_bg li").click(function(){
		$(".tab_bg li").css("background-color","transparent");
		$(this).css("background-color","#202e57");
	});
});