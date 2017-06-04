window.onload = function(){
	// 考生号，限输入11位纯数字
	
	var inputEmail3 = document.getElementById("inputEmail3");
	var yanzheng01 = document.getElementsByClassName("yanzheng01")[0];
	inputEmail3.onblur=function(){
			var num1 = /^\d{11}$/;
			if (!num1.test(this.value)) 
				{
					yanzheng01.style.opacity = 1;
				}else{
					yanzheng01.style.opacity = 0;
				}
	}
	// 姓名，只能输入中文（限输入2—10个）或英文（一个起）
	var inputtext3 = document.getElementById("inputtext3");
	var yanzheng02 = document.getElementsByClassName("yanzheng02")[0];
	inputtext3.onblur=function(){
			if (!name (this.value)) 
				{
					yanzheng02.style.opacity = 1;
				}else{
					
					yanzheng02.style.opacity = 0;
				}
	}
	// 民族
	var select_minzu = document.getElementById("select_minzu");
	var yanzheng03 = document.getElementsByClassName("yanzheng03")[0];
        select_minzu.onclick = function(){
	 select_minzu.onmouseout = function(){
		if (select_minzu.value!="0") 
			{
				yanzheng03.style.opacity = 0;
			}else{
				yanzheng03.style.opacity = 1;
			}
       }
    }

    // 考生类别
	var select_leibie = document.getElementById("select_leibie");
	var yanzheng04 = document.getElementsByClassName("yanzheng04")[0];
        select_leibie.onclick = function(){
        	select_leibie.onmouseout = function(){
        		if (select_leibie.value!="请选择") 
			   {
				  yanzheng04.style.opacity = 0;
			   }else{
				   yanzheng04.style.opacity = 1;
			       }
        	 }
     }

     // 身份证号
	var ID = document.getElementById("ID");
	var yanzheng05 = document.getElementsByClassName("yanzheng05")[0];
	ID.onblur=function(){
			var num3 = /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/;
			if (!num3.test(this.value)) 
				{
					yanzheng05.style.opacity = 1;
				}else{
					yanzheng05.style.opacity = 0;
				}
	}
    // 毕业时间
	var select_biye = document.getElementById("select_biye");
	var yanzheng06 = document.getElementsByClassName("yanzheng06")[0];
        select_biye.onclick = function(){
        	select_biye.onmouseout = function(){
		if (select_biye.value!="请选择") 
			{
				yanzheng06.style.opacity = 0;
			}else{
				yanzheng06.style.opacity = 1;
			}
		}
     }
       // 住址电话 格式如010-12345678或0100-1234567
	var zuoji = document.getElementById("zuoji");
	zuoji.onblur=function(){
			var num4 = /^(\d{3}-\d{8}|\d{4}-\d{7})$/;
			if (!num4.test(this.value)) 
				{
					this.value="格式错误";
				}
	}

	  // 手机
	var phone = document.getElementById("phone");
	var yanzheng09 = document.getElementsByClassName("yanzheng09")[0];
	phone.onblur=function(){
			if (!number(this.value)) 
				{
					yanzheng09.style.opacity = 1;
				}else{
					yanzheng09.style.opacity = 0;
				}
	}

	 // 联系电话（手机）
	var lianxidainhua = document.getElementById("lianxidainhua");
	var yanzheng12 = document.getElementsByClassName("yanzheng12")[0];
	lianxidainhua.onblur=function(){
			if (!number(this.value)) 
				{
					yanzheng12.style.opacity = 1;
				}else{
					yanzheng12.style.opacity = 0;
				}
	}

	// 邮编仅6位纯数字
	var youbian = document.getElementById("youbian");
	var yanzheng13 = document.getElementsByClassName("yanzheng13")[0];
	youbian.onblur=function(){
			var num13 = /^\d{6}$/;
			if (!num13.test(this.value)) 
				{
					yanzheng13.style.opacity = 1;
				}else{
					yanzheng13.style.opacity = 0;
				}
	}

	// 第一志愿
	var frist_zhiyuan = document.getElementById("frist_zhiyuan");
	var yanzheng14 = document.getElementsByClassName("yanzheng14")[0];
        frist_zhiyuan.onclick = function(){
        	frist_zhiyuan.onmouseout = function(){
		if (frist_zhiyuan.value!="请选择") 
			{
				yanzheng14.style.opacity = 0;
			}else{
				yanzheng14.style.opacity = 1;
			}
		}
     }
    // 政治面貌 仅输入2—8位中文
    var zhenzhi = document.getElementById("zhenzhi");
	var yanzheng003 = document.getElementsByClassName("yanzheng003")[0];
	zhenzhi.onblur=function(){
			var num003 = /^([\u4e00-\u9fa5]{2,10})$/;
			if (!num003.test(this.value)) 
				{
					yanzheng003.style.opacity = 1;
				}else{
					yanzheng003.style.opacity = 0;
				}
	}
	// 所在（或毕业）学校
    var xuexiao = document.getElementById("xuexiao");
	var yanzheng004 = document.getElementsByClassName("yanzheng004")[0];
	xuexiao.onblur=function(){
			var num004 = /^([\u4e00-\u9fa5]{4,20})$/;
			if (!num004.test(this.value)) 
				{
					yanzheng004.style.opacity = 1;
				}else{
					yanzheng004.style.opacity = 0;
				}
	}
	// 家庭住址
    var jiating = document.getElementById("jiating");
	var yanzheng07 = document.getElementsByClassName("yanzheng07")[0];
	jiating.onblur=function(){
			var num07 = /^([\u4e00-\u9fa5]{1,})$/;
			if (!num07.test(this.value)) 
				{
					yanzheng07.style.opacity = 1;
				}else{
					yanzheng07.style.opacity = 0;
				}
	}
    // 户口所在街道
    var jiedao = document.getElementById("jiedao");
	var yanzheng08 = document.getElementsByClassName("yanzheng08")[0];
	jiedao.onblur=function(){
			if (!hanzi(this.value)) 
				{
					yanzheng08.style.opacity = 1;
				}else{
					yanzheng08.style.opacity = 0;
				}
	}
     // 邮件录取通知书地址
    var tongzhishu = document.getElementById("tongzhishu");
	var yanzheng10 = document.getElementsByClassName("yanzheng10")[0];
	tongzhishu.onblur=function(){
			if (!hanzi(this.value)) 
				{
					yanzheng10.style.opacity = 1;
				}else{
					yanzheng10.style.opacity = 0;
				}
	}
	   // 收件人
    var shoujianren = document.getElementById("shoujianren");
	var yanzheng11 = document.getElementsByClassName("yanzheng11")[0];
	shoujianren.onblur=function(){
			if (!name (this.value)) 
				{
					yanzheng11.style.opacity = 1;
				}else{
					
					yanzheng11.style.opacity = 0;
				}
				
	}
	// 封装一个用户名的正则
	function name (zhi01){
		var nameValue = /^([a-zA-Z\·]{1,})$|^([\u4e00-\u9fa5]{2,10})$/;
		return nameValue.test(zhi01);
	}
	// 封装手机号码验证的正则
	function number(zhi02){
		var numberValue = /^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/;
		return numberValue.test(zhi02);
	}
	// 封装一个中文数字输入的正则
	function hanzi(zhi03){
		var hanziValue = /^([0-9\u4e00-\u9fa5]{1,})$/;
		return hanziValue.test(zhi03);
	}

	// 出生日期
	var bron_year = document.getElementById("bron_year");
	var bron_month = document.getElementById("bron_month");
	var bron_day = document.getElementById("bron_day");
	var yanzheng002 = document.getElementsByClassName("yanzheng002")[0];
        bron_year.onclick = function(){
        	bron_year.onmouseout=function(){
        		if (bron_year.value!="请选择") 
        			{
                       bron_month.value=1;
                       bron_day.value=1;
                       yanzheng002.style.opacity=0;
        			}else{
        			   bron_month.value="请选择";
                       bron_day.value="请选择";
                       yanzheng002.style.opacity=1;
        			}
        	}
     }

}