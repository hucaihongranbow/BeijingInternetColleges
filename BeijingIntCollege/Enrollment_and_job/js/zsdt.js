window.onload = function(){
		var Two_page = document.getElementById('Two_page');
		var One_page = document.getElementById('One_page');
	    var Three_page = document.getElementById('Three_page');
	    var Four_page = document.getElementById('Four_page');
        var num_one = document.getElementById('num_one');
        var num_two = document.getElementById('num_two');
        var num_three = document.getElementById('num_three');
        var num_four = document.getElementById('num_four');
        var content_pages=document.getElementsByClassName('content_page');
        var num = document.getElementsByClassName('num');
        	console.log(num)
        for (var i = 0; i < num.length; i++) {
        	num[i].index = i;
        	var next = document.getElementsByClassName('next');
             next[0].onclick = function(){
             	Two_page.style.display = 'block';
                One_page.style.display = 'none';
		        Three_page.style.display='none';
		        Four_page.style.display='none';
		        num_one.style.backgroundColor = 'white';
		        num_two.style.backgroundColor = '#488FCD';
		        num_three.style.backgroundColor = 'white';
		        num_four.style.backgroundColor = 'white';
		        
                }
            
        	num[i].onclick = function(){
        		var x=this.index;
        		console.log(x)
             if (x===0) {
             	Two_page.style.display = 'none';
		        One_page.style.display = 'block';
		        Three_page.style.display='none';
		        Four_page.style.display='none';
		        num_one.style.backgroundColor = '#488FCD';
		        num_two.style.backgroundColor = 'white';
		        num_three.style.backgroundColor = 'white';
		        num_four.style.backgroundColor = 'white';
             }else if (x===1){
                Two_page.style.display = 'block';
                One_page.style.display = 'none';
		        Three_page.style.display='none';
		        Four_page.style.display='none';
		        num_one.style.backgroundColor = 'white';
		        num_two.style.backgroundColor = '#488FCD';
		        num_three.style.backgroundColor = 'white';
		        num_four.style.backgroundColor = 'white';
             }else if (x===2) {
             	Two_page.style.display = 'none';
		        One_page.style.display = 'none';
		        Three_page.style.display='block';
		        Four_page.style.display='none';
		        num_one.style.backgroundColor = 'white';
		        num_two.style.backgroundColor = 'white';
		        num_three.style.backgroundColor = '#488FCD';
		        num_four.style.backgroundColor = 'white';
             }else if (x===3) {
             	Two_page.style.display = 'none';
		        One_page.style.display = 'none';
		        Three_page.style.display='none';
		        Four_page.style.display='block';
		        num_one.style.backgroundColor = 'white';
		        num_two.style.backgroundColor = 'white';
		        num_three.style.backgroundColor = 'white';
		        num_four.style.backgroundColor = '#488FCD';
             }
             var prev = document.getElementsByClassName('prev');
             var next = document.getElementsByClassName('next');
             next[0].onclick = function(){
             	x++;
             	if (x>=3) {
             		x=3;
             		console.log(x)
             	}
             	if (x===0) {
             	Two_page.style.display = 'none';
		        One_page.style.display = 'block';
		        Three_page.style.display='none';
		        Four_page.style.display='none';
		        num_one.style.backgroundColor = '#488FCD';
		        num_two.style.backgroundColor = 'white';
		        num_three.style.backgroundColor = 'white';
		        num_four.style.backgroundColor = 'white';
                }else if (x===1){
                Two_page.style.display = 'block';
                One_page.style.display = 'none';
		        Three_page.style.display='none';
		        Four_page.style.display='none';
		        num_one.style.backgroundColor = 'white';
		        num_two.style.backgroundColor = '#488FCD';
		        num_three.style.backgroundColor = 'white';
		        num_four.style.backgroundColor = 'white';
                }else if (x===2) {
             	Two_page.style.display = 'none';
		        One_page.style.display = 'none';
		        Three_page.style.display='block';
		        Four_page.style.display='none';
		        num_one.style.backgroundColor = 'white';
		        num_two.style.backgroundColor = 'white';
		        num_three.style.backgroundColor = '#488FCD';
		        num_four.style.backgroundColor = 'white';
                }else if (x===3) {
             	Two_page.style.display = 'none';
		        One_page.style.display = 'none';
		        Three_page.style.display='none';
		        Four_page.style.display='block';
		        num_one.style.backgroundColor = 'white';
		        num_two.style.backgroundColor = 'white';
		        num_three.style.backgroundColor = 'white';
		        num_four.style.backgroundColor = '#488FCD';
                }
             }
             prev[0].onclick = function(){
             	x--;
             	if (x<=0) {
             		x=0;
             	}
                if (x===0) {
             	Two_page.style.display = 'none';
		        One_page.style.display = 'block';
		        Three_page.style.display='none';
		        Four_page.style.display='none';
		        num_one.style.backgroundColor = '#488FCD';
		        num_two.style.backgroundColor = 'white';
		        num_three.style.backgroundColor = 'white';
		        num_four.style.backgroundColor = 'white';
                }else if (x===1){
                Two_page.style.display = 'block';
                One_page.style.display = 'none';
		        Three_page.style.display='none';
		        Four_page.style.display='none';
		        num_one.style.backgroundColor = 'white';
		        num_two.style.backgroundColor = '#488FCD';
		        num_three.style.backgroundColor = 'white';
		        num_four.style.backgroundColor = 'white';
                }else if (x===2) {
             	Two_page.style.display = 'none';
		        One_page.style.display = 'none';
		        Three_page.style.display='block';
		        Four_page.style.display='none';
		        num_one.style.backgroundColor = 'white';
		        num_two.style.backgroundColor = 'white';
		        num_three.style.backgroundColor = '#488FCD';
		        num_four.style.backgroundColor = 'white';
                }else if (x===3) {
             	Two_page.style.display = 'none';
		        One_page.style.display = 'none';
		        Three_page.style.display='none';
		        Four_page.style.display='block';
		        num_one.style.backgroundColor = 'white';
		        num_two.style.backgroundColor = 'white';
		        num_three.style.backgroundColor = 'white';
		        num_four.style.backgroundColor = '#488FCD';
                }
             	
             }
        	}
        }


}