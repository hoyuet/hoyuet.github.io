$(function(){
	//index
	$('#search').click(function(){
		$(this).animate({
			'background-position-x':'0',
			'padding-left':'20px'
		},500);
		$('.cancle').css({
			display:'inline-block'
		});
		
	});
	$('.cancle').click(function(){
		$('#search').animate({
			'background-position-x':'25',
			'padding-left':'40px'
		},500);
		$(this).css({
			display:'none'
		});
	});
	$('.index-wrap .index-main section').each(function(i){
		$(this).click(function(){
			$('.read-wrap').animate({
				left:0
			},500);			
		});
	});
	
	//read
	;(function(){
		var _index=0;
		var percent=0;
	if(_index==0){
			$('a.prev').hide();
		}else{
			$('a.prev').show();
	}
	$('header.read-header span a').click(function(){
		$('header.read-header ul').show();
		$('header.read-header ul li').each(function(i){
			$('header.read-header ul li').eq(i).click(function(){		
				_index=i;
				$('header.read-header span i').html(i+1);
				$('main.read-main section').hide();				
				$('main.read-main section').eq(i).show();
				$('main.read-main').scrollTop(0);
				$('header.read-header ul').hide();
				$('main.read-main div span strong').html(i+1);
				if(_index==0){
					$('a.prev').hide();
				}else{
					$('a.prev').show();
				}
				if(_index==11){
					$('a.next').hide();
				}else{
					$('a.next').show();
				}
				percent=Math.floor((_index+1)/12*100);
				$('.index-main section p').html(percent+'%');
			});
			
			
		});
	});
	$('a.prev').click(function(){
		_index--;
		if(_index<0){
			$('a.prev').hide();
			return;
		}else if(_index==0){
			$('a.prev').hide();
		}else{
			$('a.prev').show();
		}
		$('a.next').show();
		$('header.read-header span i').html(_index+1);
		$('main.read-main section').hide();				
		$('main.read-main section').eq(_index).show();
		$('main.read-main').scrollTop(0);
		$('main.read-main div span strong').html(_index+1);
		percent=Math.floor((_index+1)/12*100);
		$('.index-main section p').html(percent+'%');
	});
	$('a.next').click(function(){
		_index++;
		if(_index==11){
			$('a.next').hide();
		}else{
			$('a.next').show();
		}
		$('a.prev').show();
		$('header.read-header span i').html(_index+1);
		$('main.read-main section').hide();				
		$('main.read-main section').eq(_index).show();
		$('main.read-main').scrollTop(0);
		$('main.read-main div span strong').html(_index+1);
		percent=Math.floor((_index+1)/12*100);
		$('.index-main section p').html(percent+'%');		
	});
	
	$('header.read-header a.detail').click(function(){
		$('div.detail').animate({
			left:0
		},500);
	});
	$('div.detail a.detail_back').click(function(){
		$('div.detail').animate({
			left:'100%'
		},500);
	});
	$('.read-wrap .read_back').click(function(){
		$('.read-wrap').animate({
			left:'100%'
		},500);
	});
	$('div.shop-wrap a.shop_back').click(function(){
			$('.shop-wrap').animate({
				left:'100%'
			},500);
	});
	$('.index-wrap .shop').click(function(){
		$('.shop-wrap').animate({
			left:0
		},500);
	});
	
	})();
	//shop
	;(function(){
		$('.shop-wrap .shop_buy').click(function(){
			setTimeout(function(){
				$('div.tips').show().animate({opacity:.8},500);

			},500);
			setTimeout(function(){
				$('div.tips').animate({opacity:0},500).hide();

			},2000);
		});
		$('.shop-wrap .massage').click(function(){
			$('.massage-wrap').animate({
				left:0
			},500);
		});
		$('.massage-wrap .massage_back').click(function(){
			$('.massage-wrap').animate({
				left:'100%'
			},500);
		});
	
		
	})();
	//massage
	;(function(){
		$('.massage-footer button').click(function(){
			var val=$('.massage-footer input').val();
			var date=new Date();
			var time=date.getFullYear()+'/'+(date.getMonth()+1)+'/'+date.getDate()+'/'+date.getHours()+':'+date.getMinutes()+':'+'';
			$('<time></time>').html(time).appendTo($('.massage-box'));
			$('<p></p>').html(val).appendTo($('.massage-box'));
			$('.massage-footer input').val('').focus();
			
		});
	})();
	
	//set
	;(function(){
		$('.read-wrap a.set').click(function(){
			$('div.set-box').slideDown();
			$('div.set-box p.size a').each(function(i){
				$(this).click(function(){
					if(i==0){
						$('.read-main p').css({
							'font-size':'14px',
							'line-height':'24px'
						});
					}else if(i==1){
						$('.read-main p').css({
							'font-size':'18px',
							'line-height':'26px'
						});
					}else{
						$('.read-main p').css({
							'font-size':'20px',
							'line-height':'28px'
						});
					}
					$('div.set-box p.size a').removeClass('on');
					$(this).addClass('on');
				});
			});
			$('div.set-box p.style a').each(function(i){
				$(this).click(function(){
					if(i==0){
						$('.read-main').css({							
							'background':'#eee',
							'color':'#000'
						});					
					}else{
						$('.read-main').css({							
							'background':'#333',
							'color':'#fff'
						});	
					}
					$('div.set-box p.style a').removeClass('on');
					$(this).addClass('on');
				});
			});
			$('.read-wrap main').click(function(){
				$('div.set-box').slideUp();				
			});
		});
		
	})();
});
