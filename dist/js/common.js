(function(){
	var html = document.documentElement;
    var hWidth = html.getBoundingClientRect().width;
	var lx = browserRedirect();
	if(lx=='pc'){
		html.style.fontSize = 25 + "px";
	}else{
		html.style.fontSize = hWidth/15 + "px";
	}
})();

$(document).ready(function(){
	FastClick.attach(document.body);
//	$(document).click(function() {
//		$('#nav_icon').removeClass('nav_icon_zk');
//		$('#nav_nav').slideUp().removeClass('nav_nav_zk');
//	});
});

//判断是pc端还是移动端
function browserRedirect() {
	var lx = 'phone';
  	var sUserAgent = navigator.userAgent.toLowerCase();
  	var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
  	var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
  	var bIsMidp = sUserAgent.match(/midp/i) == "midp";
  	var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
  	var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
  	var bIsAndroid = sUserAgent.match(/android/i) == "android";
  	var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
  	var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
  	if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
    	lx = 'phone';
  	} else {
  		lx = 'pc';
  	}
  	return lx;
}
//菜单展开
function menuZk(obj,event){
	event.stopPropagation();
	$(obj).addClass('open');
	$('#nav_nav').slideDown().addClass('nav_nav_zk');
	$(obj).removeAttr('onclick');
	$(obj).attr('onclick','menuZd(this,event)');
}
//菜单折叠
function menuZd(obj,event){
	event.stopPropagation();
	$(obj).removeClass('open');
	$('#nav_nav').slideUp().removeClass('nav_nav_zk');
	$(obj).removeAttr('onclick');
	$(obj).attr('onclick','menuZk(this,event)');
}
