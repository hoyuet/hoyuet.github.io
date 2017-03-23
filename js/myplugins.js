/**
 * Created by hoyuet on 2017/1/4.
 */
$.fn.extend({
    borderCenter:function(opt) {
        opt = opt || {};
        var enterColor = opt.enterColor || '#333';
        var leaveColor = opt.leaveColor || '#fff';
        var w = opt.width;
        var h = opt.height;
        var borderWidth = opt.borderWidth || 4;
        var enterTime = opt.enterTime || 500;
        var leaveTime = opt.leaveTime || 500;
        var spanTstyle = 'z-index:999;position: absolute; display:block;background: ' + leaveColor + ';text-align: center;top: 0px;left: 0px;height: ' + borderWidth + 'px;width: 100%;';
        var spanRstyle = 'z-index:999;position: absolute; display:block;background: ' + leaveColor + ';text-align: center;top: 0px;right: 0px;width: ' + borderWidth + 'px;height: 100%;';
        var spanBstyle = 'z-index:999;position: absolute; display:block;background: ' + leaveColor + ';text-align: center;bottom: 0px;right: 0px;height: ' + borderWidth + 'px;width: 100%;';
        var spanLstyle = 'z-index:999;position: absolute; display:block;background: ' + leaveColor + ';text-align: center;bottom: 0px;left: 0px;width: ' + borderWidth + 'px;height: 100%;';
        var iTstyle = 'display: inline-block;width: 0px;height: ' + borderWidth + 'px;background: ' + enterColor + ';position: absolute;top: 0;left: 50%;margin-left: 0px;';
        var iRstyle = 'display: inline-block;width: ' + borderWidth + 'px;height: 0px;background: ' + enterColor + ';position: absolute;top: 50%;left: 0;margin-top: 0px;';
        var iBstyle = 'display: inline-block;width: 0px;height: ' + borderWidth + 'px;background: ' + enterColor + ';position: absolute;top: 0;left: 50%;margin-left: 0px;';
        var iLstyle = 'display: inline-block;width: ' + borderWidth + 'px;height: 0px;background: ' + enterColor + ';position: absolute;top: 50%;left: 0;margin-top: 0px;';
        if($(this).css('position')!=='absolute'&&!$(this).css('position')!=='relative'){
            $(this).css({position:'relative'});
        }
        var createDiv = $(
            '<span class="t" style="' + spanTstyle + '"><i style="' + iTstyle + '"></i></span>' +
            '<span class="r" style="' + spanRstyle + '"><i style="' + iRstyle + '"></i></span>' +
            '<span class="b" style="' + spanBstyle + '"><i style="' + iBstyle + '"></i></span>' +
            '<span class="l" style="' + spanLstyle + '"><i style="' + iLstyle + '"></i></span>'
        ).prependTo($(this));
        $(this).hover(function () {
            $(this).find('.t i,.b i').animate({
                width: w,
                'margin-left': -w / 2
            }, enterTime);
            $(this).find('.r i,.l i').animate({
                height: h,
                'margin-top': -h / 2
            }, enterTime);
        }, function () {
            $(this).find('.t i,.b i').animate({
                width: 0 + 'px',
                'margin-left': 0 + 'px'
            }, leaveTime);
            $(this).find('.r i,.l i').animate({
                height: 0 + 'px',
                'margin-top': 0 + 'px'
            }, leaveTime);
        });
    },
    borderStart:function(opt){
        opt=opt||{};
        var enterColor = opt.enterColor || '#333';
        var leaveColor = opt.leaveColor || '#333';
        var w = opt.width;
        var h = opt.height;
        console.log($(this));
        var borderWidth = opt.borderWidth || 2;
        var enterTime = opt.enterTime || 500;
        var leaveTime = opt.leaveTime || 500;
        var spanTstyle = 'z-index:999;position: absolute;top: 0;left: 0;height: '+borderWidth+'px;';
        var spanRstyle ='z-index:999;position: absolute;top: 0;right: 0;width: '+borderWidth+'px;';
        var spanBstyle ='z-index:999;position: absolute;bottom: 0;right: 0;height: '+borderWidth+'px;';
        var spanLstyle ='z-index:999;position: absolute;bottom: 0;left: 0;width: '+borderWidth+'px;';
        if($(this).css('position')!=='absolute'&&!$(this).css('position')!=='relative'){
            $(this).css({position:'relative'});
        }
        var createDiv = $(
            '<span class="t" style="' + spanTstyle + '"></span>' +
            '<span class="r" style="' + spanRstyle + '"></span>' +
            '<span class="b" style="' + spanBstyle + '"></span>' +
            '<span class="l" style="' + spanLstyle + '"></span>'
        ).prependTo($(this));
        $(this).hover(function () {

            //$(this).css({background:leaveColor});
            $(this).find('span').css({background:enterColor});
            $(this).find('.t,.b').animate({
                width:w
            },enterTime);
            $(this).find('.r,.l').animate({
                height:h
            },enterTime);
        },function(){
            //$(this).css({background:enterColor});
            $(this).find('span').css({background:leaveColor});
            $(this).find('.t,.b').animate({
                width:'0px'
            },leaveTime);
            $(this).find('.r,.l').animate({
                height:'0px'
            },leaveTime);
        });
    }
});