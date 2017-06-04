$(function () {
	$('#wenxin').on('mouseenter',function () {
		$('#weixin_scan').css("width","150px");
		$('#weixin_scan').slideDown();
	}).on('mouseleave',function () {
		$('#weixin_scan').slideUp();
	});
});