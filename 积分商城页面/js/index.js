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
			});
		}
		reader.readAsDataURL(this.files[0]);
		this.files = [];
	})
		
	//首页tips点击事件
	$('.container-index .tips').on('click',function(){
		$('div.tips-content-mask').slideDown(300);
		$('.tips-content').animate({
			right:0
		},500);
		$('.tips-content ul li').eq(0).on('click',function(){
			
			$('.container-index .div-modal').show(500);
			$('.container-index .div-modal-content').slideDown(200);
			$('.container-index .div-modal-content').find('button').on('click',function(){
				$('.container-index .div-modal-content').slideUp(200);
				
				$('.container-index .div-modal').hide(500);
				$('div.tips-content-mask').on('click',function(){
					setTimeout(function(){
						$('.tips-content').animate({
							right:'-3rem'
						},300);
						$('div.tips-content-mask').slideUp(500)
					},500);
				});				
			});
		});
	});
	//结算页面点击确认支付
	$('#footer .pay').on('click',function(){
		$('.settlement-carry-mask').css({display:'block'});
		$('.settlement-carry-popover-content').animate({	
				top:'0'
			},500);
		$('.settlement-carry-popover-content button.cancel').on('click',function(){
			$('.settlement-carry-popover-content').animate({	
				top:'-10rem'
			},500,function(){
				$('.settlement-carry-mask').css({display:'none'});
			});
		});
	});
	
	//商品详情页立即兑换
	$('#footer .exchange').on('click',function(){
		$('.settlement-carry-mask').css({display:'block'});
		$('.settlement-carry-popover-content').animate({	
				top:'0'
			},500);
		$('.settlement-carry-popover-content button.cancel').on('click',function(){
			$('.settlement-carry-popover-content').animate({	
				top:'-10rem'
			},500,function(){
				$('.settlement-carry-mask').css({display:'none'});
			});
		});
	});
	//商品详情页点击已选
	$('#main .nums').on('click',function(){
		$('.nums-select').animate({
			bottom:0
		},500);
		var val=$('.count-result').val();
		var add=$('.count-add');
		var sub=$('.count-sub');
		add.on('click',function(){
			val++;
			$('.count-result').val(val)
		});
		sub.on('click',function(){
			val--;
			if(val===0){
				val=1;
			}
			$('.count-result').val(val)
			
			
		});
		$('.behavior .exchange').on('click',function(){
			$('.settlement-carry-mask').css({display:'block'});
			$('.settlement-carry-popover-content').animate({	
					top:'0'
				},500);
			$('.settlement-carry-popover-content button.cancel').on('click',function(){
				$('.settlement-carry-popover-content').animate({	
					top:'-10rem'
				},500,function(){
					$('.settlement-carry-mask').css({display:'none'});
				});
			});
		});
		$('.nums-select .close').on('click',function(){
			$('.nums-select').animate({
				bottom:'-5rem'
			},500);
		});
	});
	//商品详情页点击填写地址
	if($('.address').html()==''){
		$('.address').html('添加地址：');
	}
	$('.address').on('click',function(){
		$('.address-fill').animate({
			bottom:0
		},500);
		$('.address-fill ul li').on('click',function(){
			$('.address').html('<span class="address-span">'+$(this).html()+'</span>');
			$('.address-fill').animate({
				bottom:'-10rem'
			},500);
		});
		$('.address-fill .close').on('click',function(){
			$('.address-fill').animate({
				bottom:'-10rem'
			},500);
		});
	});
	//上拉查看图文详情
	/*
	 * 这个效果在电脑上没有效果，不知道在手机上有没有效果
	 */
//	$('#main').dropload({
//	    scrollArea : window,
//	    loadDownFn : function(me){
//	        $.ajax({
//	            type: 'GET',
//	            url: 'json/more.json',
//	            dataType: 'json',
//	            success: function(data){
//	                alert(data);
//	                // 每次数据加载完，必须重置
//	                me.resetload();
//	            },
//	            error: function(xhr, type){
//	                alert('Ajax error!');
//	                // 即使加载出错，也得重置
//	                me.resetload();
//	            }
//	        });
//	    }
//	});

	$(window).on("scroll",function(){
		var aa=$(document).height();
		var bb=$(this).scrollTop();
		var cc=$(this).height();
		var dd=aa-bb-cc;
		if(dd<50){
//		$(".js-load-more").show();
		var html='<p>22222222222222222222222222</p><p>22222222222222222222222222</p><p>22222222222222222222222222</p><p>22222222222222222222222222</p>';
		//请求数据，然后添加内容，成功后隐藏加载器
		// $.ajax(){ }
		setTimeout(function(){
			$(".m-content").append(html);
	//		$(".js-load-more").hide();
			},2000);
		}
	});
		
	
	
});
