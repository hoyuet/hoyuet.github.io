/**
 * Created by Administrator on 2016/12/16.
 */
 $(function(){
     //nav点击效果
    var index=$('#index-aside-l nav').find('li.on').index();
    $('#index-aside-l nav li').hover(function(){
    	$('#index-aside-l nav li').eq(index).addClass('on');
        $('#index-aside-l nav li').removeClass('on');
        $(this).addClass('on');
    },function(){
        $('#index-aside-l nav li').removeClass('on');
        $('#index-aside-l nav li').eq(index).addClass('on');
    });
     $('#index-aside-l nav li').on('click',function(){
         $('main').css({display:'none'});
         $(this).addClass('active');
         index=$(this).index();
         var cName=$(this).find('i')[0].className.split('-')[1];
         $('#index-aside-l nav li').removeClass('active');
         $('main').each(function(i,t){
            var idName=$('main').eq(i)[0].getAttribute('id').split('-')[1];
             if(cName===idName){
                 //console.log(i);//index
                 $('main').removeClass('bounceIn');
                 $('main').eq(i).css({display:'block'}).addClass('bounceIn');
             }
         });
     });

     //index-main下的手风琴效果
    $('.accordion div span').on('click',function(){

        if($(this).parent().find('p').css('display')=='block'){
            $('.accordion i').removeClass('icon-chevron-up').addClass('icon-chevron-down');
            $(this).parent().find('p').slideUp();
        }else {
            $('.accordion i').removeClass('icon-chevron-up').addClass('icon-chevron-down');
            $('.accordion div p').slideUp();
            $(this).parent().find('p').slideToggle();
            $(this).find('i').removeClass('icon-chevron-down').addClass('icon-chevron-up');
        }
    });

     //#index-home .profile-r img 背景转换效果
     var block=$('#index-home').css('display');
     if(block=='block'){
         var aImgBg=[1,2,3];
         var i=0;
         setInterval(function(){
             $('#index-home .profile-r img').attr({
                 src:"images/img-profile/about_"+aImgBg[i]+".png"
             });
             i++;
             if(i>2){
                 i=0;
             }

         },10000);
     }

     //pagation 分页功能效果
		var pageData=[
			{'name':'zhangsan','text':'henhao'},
			{'name':'zhangsan','text':'henhao'},
			{'name':'zhangsan','text':'henhao'},
			{'name':'zhangsan','text':'henhao'},
			{'name':'zhangsan','text':'henhao'},
			{'name':'zhangsan','text':'henhao'},
			{'name':'zhangsan','text':'henhao'},
			{'name':'zhangsan','text':'henhao'},
			{'name':'zhangsan','text':'henhao'},
			{'name':'zhangsan','text':'henhao'},
			{'name':'zhangsan','text':'henhao'},
			{'name':'zhangsan','text':'henhao'},
			{'name':'zhangsan','text':'henhao'},
			{'name':'zhangsan','text':'henhao'},
			{'name':'zhangsan','text':'henhao'},
			{'name':'zhangsan','text':'henhao'},
			{'name':'zhangsan','text':'henhao'},
			{'name':'zhangsan','text':'henhao'},
			{'name':'zhangsan','text':'henhao'},
			{'name':'zhangsan','text':'henhao'},
			{'name':'zhangsan','text':'henhao'},
			{'name':'zhangsan','text':'henhao'},
			{'name':'zhangsan','text':'henhao'}
		];
	
	 	$('.page-number').pagination({
	        data:pageData,
	        showData:7,
	//          pageCount:3,
	        jump:true,
	        coping:true,
	        homePage:'首页',
	        endPage:'末页',
	        prevContent:'上页',
	        nextContent:'下页'
	    });
    
     //提交评论
     $('#clear').on('click',function(){
     	$('#message textarea').val('').focus();
     });
     $('#send').on('click',function(){
     	var oName=$('#message input[name]').val();
     	var oText=$('#message textarea[name]').val();
     	var json={};
 		json['name']=oName;
     	json['text']=oText;
     	$('.pagation-content').empty();
     	pageData.unshift(json);
     	$('.page-number').pagination({
            data:pageData,
            showData:7,
//          pageCount:3,
            jump:true,
            coping:true,
            homePage:'首页',
            endPage:'末页',
            prevContent:'上页',
            nextContent:'下页'
        });
        $('#message input[name]').val('').focus();
     	$('#message textarea').val('');
     	
     });


     //#index-tasks section figture
     $('#index-tasks section figure').on('mouseenter',function(){
         $(this).find('a').animate({top:'-30px'},500);
         $(this).find('figcaption').animate({top:'-30px'},500);
     });
     $('#index-tasks section figure').on('mouseleave',function(){
         $(this).find('a').animate({top:'0px'},500);
         $(this).find('figcaption').animate({top:'0px'},500);
     });
     $('#index-tasks section#effects figure').each(function(){
         $(this).borderStart({
             width:230,
             height:315
         });
     });
     $('#index-tasks section#objects figure').each(function(){
         $(this).borderCenter({
             width:230,
             height:315
         });
     });
     $('#index-tasks section#plugins figure').each(function(){
         $(this).borderStart({
             width:230,
             height:315
         });
     });
     
     //#index-coffee
     $('#index-coffee article section form button').each(function(i){
     	$(this).click(function(){
     		$('#index-coffee article section form button').removeClass('on');
     		$(this).addClass('on');
     		var html=$(this).html();			
     		switch(html){
     			case 'all':
     				$('#index-coffee article section div').find('a').css({display:'inline-block'});
     			break;
     			case '相声':
     				$('#index-coffee article section div a').css({display:'none'});
     				$('#index-coffee article section div').find('a.xs').css({display:'inline-block'});
     			break;
     			case '小品':
     				$('#index-coffee article section div a').css({display:'none'});
     				$('#index-coffee article section div').find('a.xp').css({display:'inline-block'});     	
     			break;
     			case '电影':
     				$('#index-coffee article section div a').css({display:'none'});
     				$('#index-coffee article section div').find('a.dy').css({display:'inline-block'});     			
     			break;
     		}
     	});
     });
     //#index-coffee article section div a
     $('#index-coffee article section div a').each(function(){
     	$(this).mouseenter(function(){
     		$(this).find('span').stop().animate({bottom:0},500)
     	});
     	$(this).mouseleave(function(){
     		$(this).find('span').stop().animate({bottom:-30},500)
     	});
     });

     //edit
     $('#carouse').css({
         display:'block'
     });
     //#index-edit div.content a
     $('#index-edit .content').hover(function(){
         $(this).find('a').css({
             display:'block',
             lineHeight:'144px'
         }).animate({
             top:0
         },300);
     },function(){
         $(this).find('a').css({
             display:'block'
         }).animate({
             top:144
         },300);
     });
     //book
     var aDiv = $('#index-book section div');
     aDiv.each(function () {
         var oSpan = $(this).find('span');
         $(this).mouseenter(function (ev) {
             var n = getN(ev, $(this));
             switch (n) {
                 case 0://right
                     oSpan.css({left: '200px', top: '0'});
                     oSpan.stop().animate({left: '0'}, {duration: 200});
                     break;
                 case 1://bottom
                     oSpan.css({left: '0', top: '200px'});
                     oSpan.stop().animate({top: '0'}, {duration: 200});
                     break;
                 case 2://left
                     oSpan.css({left: '-200px', top: '0'});
                     oSpan.stop().animate({left: '0'}, {duration: 200});
                     break;
                 case 3://top
                     oSpan.css({left: '0', top: '-200px'});
                     oSpan.stop().animate({top: '0'}, {duration: 200});
                     break;
             }
         });

         $(this).mouseleave(function (ev) {
             var n = getN(ev, $(this));
             switch (n) {
                 case 0://right
                     oSpan.stop().animate({left: '200px'}, {duration: 200});
                     break;
                 case 1://bottom
                     oSpan.stop().animate({top: '200px'}, {duration: 200});
                     break;
                 case 2://left
                     oSpan.stop().animate({left: '-200px'}, {duration: 200});
                     break;
                 case 3://top
                     oSpan.stop().animate({top: '-200px'}, {duration: 200});
                     break;
             }
         });
     });

     function getN(ev, jq) {
         var y = jq.height() / 2 + jq.offset().top - ev.clientY;
         var x = jq.width() / 2 + jq.offset().left - ev.clientX;

         //进入出去时的角度(弧度转换成角度)
         var a = Math.atan2(y, x) * 180 / Math.PI;
         return Math.round((a + 180) / 90) % 4;

     }


     //version
     var timer_version=null;
     $('#version').mouseenter(function(){
         $(this).find('div').animate({
             right:0
         },1000);
     });
     $('#version').mouseleave(function(){
         var _this=$(this);
        timer_version=setTimeout(function(){
            _this.find('div').animate({
                right:-100
            },1000);
        },30);
     });

     //set
     var now_set=0;
     $('#set span').on('click',function(){
         if(now_set==0){
             $(this).parent().animate({
                 left:0
             },'easein');
             now_set++;
         }else{
             $(this).parent().animate({
                 left:-270
             },'easein');
             now_set=0;
         }
     });
  	//#go-index-home
	$('#go-index-home').click(function(){
		$('main').css({display:'none'});
        $('main#index-home').css({display:'block'});
        index=0;
        $('#index-aside-l nav li').removeClass('on');
        $('#index-aside-l nav li').eq(index).addClass('on');
        $('main').removeClass('bounceIn');
        $('main').eq(index).css({display:'block'}).addClass('bounceIn');
	});

   
     
     
 });


