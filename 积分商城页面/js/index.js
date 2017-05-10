$(function(){
	var mySwiper = new Swiper('.swiper-container', {
		autoplay: 2000,//可选选项，自动滑动
	});
//	$('#myModal').modal({
//		keyboard: true
//	});
	$('#dropdownMenu1').click(function(){
		$('.dropdown-menu').css({display:'block'});
	});
	$('#main').click(function(){
		$('.dropdown-menu').css({display:'none'});
	});
	
	/*设为默认地址*/
	var address_switch=false;
	$('.switch').click(function(){
		address_switch=!address_switch;
		if(address_switch){
			$(this).animate({
				left:'0.31rem'
			},500);
			$(this).parent().find('i').animate({
				opacity:1
			},500);
			
		}else{			
			$(this).animate({
				left:'-0.02rem'
			},500);
			$(this).parent().find('i').animate({
				opacity:0
			},500);
		}
	});
	
	//上传头像
	$('#upload-file').on('change', function(){
		var reader = new FileReader();
		reader.onload = function(e) {
			$('.update_img').css({
				'background-image':'url('+e.target.result+')',
//				
			});
		}
		reader.readAsDataURL(this.files[0]);
		this.files = [];
	})
		
		
	
	
		
	
	
});
