window.onload = function (){
	//获取轮播小点点
	var dian = document.getElementsByClassName('cycle-pager')[0].children;
	//获取五张图片
	var tu = document.getElementsByClassName('cycle-slide');
	//轮播定时器
	var i = 0;
	function time_Interval(){
		for(var j=0;j<dian.length;j++){
			dian[j].className = "";
			tu[j].style.opacity = '0';
			tu[j].style.zIndex = '0';
		}
		if(i==4){
			i = 0;
		}else{
			i++;
		}
		dian[i].className = "cycle-pager-active";
		tu[i].style.opacity = "1";
		tu[i].style.zIndex = '100';
	}
	var time = setInterval(time_Interval,4000);
	//点击小点点换图
	for(var j=0;j<dian.length;j++){
		dian[j].index = j;
		dian[j].onclick = function(){
			clearInterval(time);
			for(var j=0;j<dian.length;j++){
				dian[j].className = "";
				tu[j].style.opacity = '0';
				tu[j].style.zIndex = '0';
			}
			this.className = "cycle-pager-active";
			tu[this.index].style.opacity = '1';
			tu[this.index].style.zIndex = '100';
			i=this.index;
			time = setInterval(time_Interval,4000);
		}
	}
	//所有评论数据
 	var criticism_json = [
 	'是不是正的啊，表示疑惑啊',
 	'国家有时候政策是很好，可是我们这些人都无福消受。没有做到位。我们只能在家等。漫无目的的生活。过着混日子的生活。中国就是闲人太多。因为没有挣钱的渠道。没有可以带领人们富裕的人。这个学校学的东西我看还行。如果属实值得去学。你们没有去学过就能代表。谁信呀。',
 	'我也想报名，我也是想学的，就是你们不是专业人士，我们想学习的不太相信你们。你们要是穿透好了把我们学习生欺骗了杂办',
 	'张志军辅导员是在你们学校吗？那是我的大学同学，我家是呼伦贝尔的，我可以替你们招生吗？！你们是否有大数据专业呀？！我的电话是13030415366'
 	];
	//获取到用于存放评论的ul
 	var criticism_ul = document.getElementById('ul');	
 	//获取到多行文本输入框(就是用户输入评论的那个框)
 	var Muitos_text = document.getElementById('pintluncontent');	
 	//获取到发表按钮
 	var publish = document.getElementById('btn_pinglun');	
 	//该函数作用：通过criticism_json动态创建评论,参数一是指定显示数据的开始位置，参数二是决定哪个页数有背景颜色
 	function Trends_create(begin,index){
 		//数据为空时什么也不做，数据不为空才创建
   		if(criticism_json.length!=0){
   			//数组不为空就遍历数组，创建每一条评论内容
   			for(var i=begin;(criticism_json.length-begin>=5?i<begin+5:i<criticism_json.length);i++){
   				//创建li用于存放每一条评论
   				var li = document.createElement('li');
   				li.innerText = criticism_json[i];
   				criticism_ul.insertBefore(li,null);
   				//如果是最底下一条评论；有下边框
   				if(criticism_json.length-begin<=5?i==criticism_json.length-1:i==begin+4){
   					li.className = "bottom";
   				}
   			}
   		}else{
   			//数组为空什么也不做
   			return false;
   		}
   		//获取页数显示标签
	 	var footer = document.getElementById('footer');
	 	//显示页数
	 	footer_nuber = Math.ceil(criticism_json.length/5);
	 	footer.innerText = footer_nuber;
	 	//动态创建每个页数
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
	 	//获取所有的页数
	 	var span = cada_footer.children;
		 	for(var y=0;y<span.length;y++){
		 		if(span[y].innerText==1){
		 			span[y].className = 'bg';
		 		}
		 	}
	 	}
	 	//获取每个页数,点击变颜色
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
 	//发表评论
 	publish.onclick = function(){
 		var reg = /^\s*$/g;
 		if(!reg.test(Muitos_text.value)&&Muitos_text.value!==''){
 		content = Muitos_text.value;
 		Muitos_text.value = '';
 		criticism_json.unshift(content);
   		alert("评论成功!");
 		criticism_ul.innerHTML = '';
 		Trends_create(0);
 		}else{
 			alert("评论内容不能为空!");
 		}
 	}
 	function callBack(){
		//获取左右箭头
	 	var prev = document.getElementsByClassName('prev')[0];
	 	var next = document.getElementsByClassName('next')[0];
	 	//上一页点击事件
	 	prev.onclick = function(){
	 		paging(false);
	 		callBack();
	 	} 
	 	//下一页点击事件
	 	next.onclick = function(){
	 		paging(true);
	 		callBack();
	 	} 
	 	//函数作用：根据穿入的Boolean判定往哪里翻页
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
}