window.onload = function () 
{   
	// 大图
	var big_img = document.getElementById('bg_img');
	var imgArr = ["img/18.jpg","img/17.jpg",
	    "img/18.jpg","img/19.jpg",
	    "img/20.jpg","img/21.jpg","img/22.jpg","img/23.jpg",
	    "img/24.jpg","img/45.jpg","img/106.jpg",
	    "img/26.jpg","img/110.jpg","img/28.jpg",
	    "img/29.jpg","img/31.jpg"];
    
    // 文字描述
    //标题
	var textArr_1 = ["动漫实验室","动漫实验室","动漫实验室","机房","整齐的机房","机房课堂","教室","阶梯教室","图书馆","图书馆的书籍","图书馆阅览室","图书馆","图书馆","电子阅览室","电子阅览室"];
	
	//内容描述
	var textArr_2 =["教学设施包括多媒体教室、阶梯教室、语音教室、影视演播室、画室、动漫实训室、计算机房和网络实验室等。图书馆藏书121012册，不仅拥有古今中外的藏书，还订阅期刊杂志259种，报纸40种，让同学们查阅学习资料之余，还能了解时事，开拓眼界，增长见闻。",
	    "动漫实验室拥有专业的拷贝台和动作检查设备，主要用于学生优秀作品展示、原动画设计相关课程的教学、学生手绘动画创作实训和动画专业学生毕业设计前期设计稿的创作等。",
	    "动漫实验室拥有专业的拷贝台和动作检查设备，主要用于学生优秀作品展示、原动画设计相关课程的教学、学生手绘动画创作实训和动画专业学生毕业设计前期设计稿的创作等。",
	    "机房，共有高端配置的微机800余台，微机分布于现11个机房教室，每天可容纳4000余人上课。每台微机安装丰富的教学软件，可供计算机应用、计算机软件开发，动画设计、动漫设计等专业教学活动。",
	    "机房，共有高端配置的微机800余台，微机分布于现11个机房教室，每天可容纳4000余人上课。每台微机安装丰富的教学软件，可供计算机应用、计算机软件开发，动画设计、动漫设计等专业教学活动。",
	    "机房，共有高端配置的微机800余台，微机分布于现11个机房教室，每天可容纳4000余人上课。每台微机安装丰富的教学软件，可供计算机应用、计算机软件开发，动画设计、动漫设计等专业教学活动。",
	    "走进教学楼给人感触最深的就是教室宽敞、明亮，为取得更好的光照效果，学校特别设计了玻璃幕墙和每个教室的窗户都是靠左面，来增加教室的明度和亮度，让学生们在白天不需要借助日光就能够最大限度地满足同学学习。",
	    "青春、激扬、自由，似乎成为了大学的代名词，在那青灰的建筑群里，也有那让人怀念的阶梯教室。学校的七号楼、八号楼里拥有四个可以同时容纳三百人的阶梯教室。它们面积大、容纳人数多，配有投影仪、音响等多媒体设备。",
	    "图书馆藏书121012册，不仅拥有古今中外的藏书，还订阅期刊杂志259种，报纸40种，让同学们查阅学习资料之余，还能了解时事，开拓眼界，增长见闻。",
	    "图书馆藏书121012册，不仅拥有古今中外的藏书，还订阅期刊杂志259种，报纸40种，让同学们查阅学习资料之余，还能了解时事，开拓眼界，增长见闻。",
	    "图书馆藏书121012册，不仅拥有古今中外的藏书，还订阅期刊杂志259种，报纸40种，让同学们查阅学习资料之余，还能了解时事，开拓眼界，增长见闻。",
	    "这是一块神圣的地方，无论你的内心世界是多么的烦躁，在这里你总可以找到让心灵平静的妙药。",
	    "这是一块神圣的地方，无论你的内心世界是多么的烦躁，在这里你总可以找到让心灵平静的妙药。",
	    "在电子阅览室，有310个座位提供给老师同学们阅览杂志报纸，查询资料，以此能够更加能够开拓眼界，增长见闻。",
	    "在电子阅览室，有310个座位提供给老师同学们阅览杂志报纸，查询资料，以此能够更加能够开拓眼界，增长见闻。。"]
	
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