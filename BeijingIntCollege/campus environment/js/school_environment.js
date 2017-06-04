window.onload = function () 
{   
	// 大图
	var big_img = document.getElementById('bg_img');
	var imgArr = ["img/01.jpg","img/02.jpg",
	    "img/03.jpg","img/04.jpg",
	    "img/05.jpg","img/06.jpg","img/07.jpg","img/08.jpg",
	    "img/09.jpg","img/10.jpg","img/11.jpg",
	    "img/12.jpg","img/13.jpg","img/14.jpg",
	    "img/15.jpg","img/15.jpg"];
    
    // 文字描述
    //标题
	var textArr_1 = ["风雨操场","风雨操场外景","风雨操场外景","教学楼","宿舍楼","初春校园花开","白玉兰花开的季节","初冬雪景","傍晚的高尔夫球场","教学楼前小树发芽","校园林荫路","校园路标","校园石板路","雪中梧桐","枯叶雪花"];
	
	//内容描述
	var textArr_2 =["学校位于北京市西南的房山区，校园占地面积300亩，教室110间，宿舍1147间，可以为7500人提供住宿，学生食堂可容纳3000人同时就餐。学校不断完善适合于互联网高素质技能型人才培养的保障条件。建有各类教学实验室：多媒体教室、阶梯教室、语音教室、影视演播室、画室、动漫实训室、计算机房和网络实验室等。",
	    "校园地势开阔，树木葱茏，优雅肃穆的校园景致、整齐划一的教学楼宇，透露着学校宁静与和谐的人文氛围。",
	    "校园地势开阔，树木葱茏，优雅肃穆的校园景致、整齐划一的教学楼宇，透露着学校宁静与和谐的人文氛围。",//3
	    "校园地势开阔，树木葱茏，优雅肃穆的校园景致、整齐划一的教学楼宇，透露着学校宁静与和谐的人文氛围。",
	    "春天，树木小草生出嫩芽，似乎在迎接开学返校的学生，冬眠已久的内心被春风叫醒，清风拂来，阳光柔和，走在校园的石板路，暖暖的。",
	    "春天，树木小草生出嫩芽，似乎在迎接开学返校的学生，冬眠已久的内心被春风叫醒，清风拂来，阳光柔和，走在校园的石板路，暖暖的。",
	    "春天，树木小草生出嫩芽，似乎在迎接开学返校的学生，冬眠已久的内心被春风叫醒，清风拂来，阳光柔和，走在校园的石板路，暖暖的。",
	    "冬天，看那大雪纷飞的时节，整座校园成了银妆素裹的世界；矗立着大楼披上了洁白的素装；绿色的树叶与红彤彤的花瓣被撒上了晶莹的霜花。北京的四季分明，校园的四季如画。",
	    "校园地势开阔，树木葱茏，优雅肃穆的校园景致、整齐划一的教学楼宇，透露着学校宁静与和谐的人文氛围。",
	    "春天，树木小草生出嫩芽，似乎在迎接开学返校的学生，冬眠已久的内心被春风叫醒，清风拂来，阳光柔和，走在校园的石板路，暖暖的。",
	    "石板路和小竹林是校园里别具特色的小景致，经常看到同学们三两成群的身影，他们有的在读书、有的在拍摄、有的在运动，在这些石板路上留下了我们的大学记忆。",
	    "冬天，看那大雪纷飞的时节，整座校园成了银妆素裹的世界；矗立着大楼披上了洁白的素装；绿色的树叶与红彤彤的花瓣被撒上了晶莹的霜花。北京的四季分明，校园的四季如画。",
	    "石板路和小竹林是校园里别具特色的小景致，经常看到同学们三两成群的身影，他们有的在读书、有的在拍摄、有的在运动，在这些石板路上留下了我们的大学记忆。",
	    "深秋时节，偶尔迎来北京的初雪，清新的空气伴着微微的湿润，别有一番韵味。",
	    "深秋时节，偶尔迎来北京的初雪，清新的空气伴着微微的湿润，别有一番韵味。"]
	
	// 文本描述显示区域
	var text_bg = document.getElementsByClassName('title')[0];
    
    // 小图轮播
	var big_content = document.getElementsByClassName("big_content")[0];
	var ul = big_content.children[0];
	// 小图 图片
	var imgs = ul.children;

	// 0动画
	function animate(obj,target) 
    {
	    clearInterval(obj.timer);
	    var s = obj.offsetLeft < target ? 10 : -10;

	    obj.timer = setInterval(function () 
	    {
		    var re = target - obj.offsetLeft;
		    obj.style.left = obj.offsetLeft + s + "px";
		    if (Math.abs(re) <= 10) 
		    {
		        clearInterval(obj.timer);
		        obj.style.left = target + "px";
		    }
	    },20);
    }
    

    // 轮播盒子
    var img_content = document.getElementsByClassName("big_img")[0];
    console.log(img_content);
    // 1 动态添加   自动三联动
	var i = 0 ;
	var Timer = null;

	Timer = setInterval(autoplay,2000);
	function autoplay() 
	{   
		i++;		

		if (i>=14) 
		{   
			// 大图 文字
			if (i>=15) 
			{
				i=0;
				big_img.src = imgArr[0];
				big_img.title = textArr_1[0];

				text_bg.children[0].innerHTML = textArr_1[0];
				text_bg.children[1].innerHTML = textArr_2[0];
				// imgs[0].
			}
			if (i==14) 
			{

				big_img.src = imgArr[14];
				big_img.title = textArr_1[14];

				text_bg.children[0].innerHTML = textArr_1[14];
				text_bg.children[1].innerHTML = textArr_2[14];
                
                // 透明度变化
				imgs[i-1].style.opacity = 0.5;
				imgs[i].style.opacity = 1;
			}
				
		}
		else{
			// 大图 文字
			big_img.src = imgArr[i];
			big_img.title = textArr_1[i];

			text_bg.children[0].innerHTML = textArr_1[i];
			text_bg.children[1].innerHTML = textArr_2[i];
            
            // 透明度变化
			imgs[i].style.opacity = 1;
		    imgs[i-1].style.opacity = 0.5;
           
			
			// 轮播   // 小图 轮播
			if (i==13) 
			{
               
               // 最后两张等到大图换完才归0
			   setTimeout(function () 
			   {
			   	    ul.style.left = 0;
			   	    imgs[0].style.opacity = 1;
			   },4000)
			}

			// 开始三张不动
			else if(i==0 || i==1 || i==2)
			{
				ul.style.left = 0;
			}

			// 正常变化轮播
			else 
			{
				animate(ul,-(i-2)*141);
			}

		}
	};
    

    // 暂停自动
    // 大图
    big_img.onmouseover = function (argument) {
    	clearInterval(Timer);
    }
    // 轮播盒子
	img_content.onmouseover = function (argument) 
	{
		clearInterval(Timer);
	}
	
	img_content.onmouseout = function (argument) 
	{
		Timer = setInterval(autoplay,2000);
	}
	big_img.onmouseout = function (argument) {
		Timer = setInterval(autoplay,2000);
	}

	// 2、点击左右按钮   点击图片
	var left_btn = document.getElementsByClassName("left")[0];
	var right_btn = document.getElementsByClassName("right")[0];
	
	// 左
	left_btn.onclick = function (argument) 
	{
		if (i==0) 
		{
			i = 14;
			// animate(ul,-i*141);
			ul.style.left = 0;
		}

		i--;
		animate(ul,-i*141);
		console.log(i);


		big_img.src = imgArr[i];
		big_img.title = textArr_1[i];

		text_bg.children[0].innerHTML = textArr_1[i];
		text_bg.children[1].innerHTML = textArr_2[i];
	}

    

    // 右
    right_btn.onclick = function (argument) 
    {   
    	if (i>=14) 
    	{
    		ul.style.left = 0;
			imgs[0].style.opacity = 1;
    	}
    	autoplay();
    }

    // 点击图片
    for (var i = 0; i < imgs.length; i++) 
    {   
    	imgs[i].index = i ;
    	imgs[i].onclick = function (argument) 
    	{
    		for (var i = 0; i < imgs.length; i++) 
    		{
    			imgs[i].style.opacity = 0.5;
    		}
    		this.style.opacity = 1;

    		var j = this.index;
    		// console.log(j);

    		// 大图 文字
    		big_img.src = imgArr[j];
			big_img.title = textArr_1[j];

			text_bg.children[0].innerHTML = textArr_1[j];
			text_bg.children[1].innerHTML = textArr_2[j];
            
            // 点击图片自动
    		if (j==0 || j==1) 
    		{
    			ul.style.left = 0;
    		}
    		else if (j>=13) 
    		{
    			ul.style.right = 0;
    		}
    		else{
    			animate(ul,-(j-2)*141);
    		}
    		

    		// 之后自动
    // 		i= j;
    // 		if (i>=14) 
    // 	    {
	   //  		ul.style.left = 0;
				// imgs[0].style.opacity = 1;
    // 	    }
    // 		autoplay();
    	}
    }

    
    // 点击图片之后 再 左右按钮


	
}