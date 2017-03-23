/**
 * Created by Administrator on 2016/11/1.
 */
$(function(){
    var old=0;
    var bFlag=false;
    var now=0;
    var timer=null;
    $('#carouse').mouseenter(function(){
        clearInterval(timer);
        $('ol li').on('click',function(){
            if(!bFlag){
                bFlag=true;
                $('ol li').removeClass('on');
                $(this).addClass('on');
                var $index=$('ol li').index($(this));

                if(old==$index){
                    $('.tab-pane').eq(old).css({left:0,top:'0px'});
                }else{
                    $('.tab-pane').css({left:'500px',top:'0px'});
                    $('.tab-pane').eq(old).css({left:0,top:'0px','z-index':100});
                    $('.tab-pane').eq(old).removeClass('lightSpeedIn').removeClass('lightSpeedOut').addClass('lightSpeedOut');
                    $('.tab-pane').eq($index).css({left:0,top:'0px','z-index':1000}).removeClass('lightSpeedIn').removeClass('lightSpeedOut').addClass('lightSpeedIn');
                }
                old=$index;
                now=$index;
                setTimeout(function(){
                    bFlag=false;
                },1000);
            }
        });
    });
    $('#carouse').mouseleave(function(){
        timer=setInterval(function(){
            if(!bFlag){
                bFlag=true;
                var $index=now;
                $('ol li').removeClass('on');
                $('ol li').eq($index).addClass('on');


                if(old==$index){
                    $('.tab-pane').eq(old).css({left:0,top:'0px'}); bFlag=false;
                }else{
                    $('.tab-pane').css({left:'500px',top:'0px'});
                    $('.tab-pane').eq(old).css({left:0,top:'0px','z-index':100});
                    $('.tab-pane').eq(old).removeClass('lightSpeedIn').removeClass('lightSpeedOut').addClass('lightSpeedOut');
                    $('.tab-pane').eq($index).css({left:0,top:'0px','z-index':1000}).removeClass('lightSpeedIn').removeClass('lightSpeedOut').addClass('lightSpeedIn');
                    bFlag=false;
                }

                old=$index;
                now++;
                if(now==4){
                    now=0;
                }
            }
        },2000);

    });

    timer=setInterval(function(){
        if(!bFlag){
            bFlag=true;
            var $index=now;
            $('ol li').removeClass('on');
            $('ol li').eq($index).addClass('on');


            if(old==$index){
                $('.tab-pane').eq(old).css({left:0,top:'0px'}); bFlag=false;
            }else{
                $('.tab-pane').css({left:'500px',top:'0px'});
                $('.tab-pane').eq(old).css({left:0,top:'0px','z-index':100});
                $('.tab-pane').eq(old).removeClass('lightSpeedIn').removeClass('lightSpeedOut').addClass('lightSpeedOut');
                $('.tab-pane').eq($index).css({left:0,top:'0px','z-index':1000}).removeClass('lightSpeedIn').removeClass('lightSpeedOut').addClass('lightSpeedIn');
                bFlag=false;
            }

            old=$index;
            now++;
            if(now==4){
                now=0;
            }
        }
    },2000);

});
