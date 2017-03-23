/**
 * pagination分页插件
 * @version 0.2
 * @url http://www.maxiaoxiang.com
 * @E-mail 251445460@qq.com
 */
;(function($,window,document,undefined){

	//配置参数
	var defaults = {
		totalData:10,			//数据总条数
		showData:10,				//每页显示的条数
		pageCount:9,			//总页数,默认为9
		current:1,				//当前第几页
		prevCls:'prev',			//上一页class
		nextCls:'next',			//下一页class
		prevContent:'<',		//上一页内容
		nextContent:'>',		//下一页内容
		activeCls:'active',		//当前页选中状态
		coping:false,			//首页和尾页
		homePage:'',			//首页节点内容
		endPage:'',				//尾页节点内容
		count:3,				//当前页前后分页个数
		jump:false,				//跳转到指定页数
		jumpIptCls:'jump-ipt',	//文本框内容
		jumpBtnCls:'jump-btn',	//跳转按钮
		jumpBtn:'跳转',			//跳转按钮文本
		callback:function(){}	//回调
	};

	var Pagination = function(element,options){
		//全局变量
		var opts = options||{},//配置
			current,//当前页
			$document = $(document),
			$obj = $(element);//容器
			var data=options.data||{};
			
		//获取总页数
		this.getTotalPage = function(){
			return opts.data.length && opts.showData ? Math.ceil(parseInt(opts.data.length) / opts.showData) : opts.pageCount;
		};

		//获取当前页
		this.getCurrent = function(){
			return current;
		};

		//填充数据
		this.filling = function(index){
			var html = '';
			current = index || opts.current;//当前页码

			var pageCount = this.getTotalPage();
			if(current > 1){//上一页
				html += '<a href="javascript:;" class="'+opts.prevCls+'">'+opts.prevContent+'</a>';
			}else{
				$obj.find('.'+opts.prevCls) && $obj.find('.'+opts.prevCls).remove();
			}
			if(current >= opts.count * 2 && current != 1 && pageCount != opts.count){
				var home = opts.coping && opts.homePage ? opts.homePage : '1';
				html += opts.coping ? '<a href="javascript:;" data-page="1">'+home+'</a><span>...</span>' : '';
			}
			var start = current - opts.count,
				end = current + opts.count;
			
			((start > 1 && current < opts.count) || current == 1) && end++;
			(current > pageCount - opts.count && current >= pageCount) && start++;
			for (;start <= end; start++) {
				if(start <= pageCount && start >= 1){
					if(start != current){
						html += '<a href="javascript:;" data-page="'+start+'">'+ start +'</a>';
					}else{
						html += '<span class="'+opts.activeCls+'">'+ start +'</span>';
					}
				}
			}
			
			if(current + opts.count < pageCount && current >= 1 && pageCount > opts.count){
				var end = opts.coping && opts.endPage ? opts.endPage : pageCount;
				html += opts.coping ? '<span>...</span><a href="javascript:;" data-page="'+pageCount+'">'+end+'</a>' : '';
			}
			if(current < pageCount){//下一页
				html += '<a href="javascript:;" class="'+opts.nextCls+'">'+opts.nextContent+'</a>'
			}else{
				$obj.find('.'+opts.nextCls) && $obj.find('.'+opts.nextCls).remove();
			}

			html += opts.jump ? '<input type="text" class="'+opts.jumpIptCls+'"><a href="javascript:;" class="'+opts.jumpBtnCls+'">'+opts.jumpBtn+'</a>' : '';

			$obj.empty().html(html);
		};

		//绑定事件
		this.eventBind = function(){
			var self = this;
			var pageCount = this.getTotalPage();//总页数
			$obj.on('click','a',function(){
				if($(this).hasClass(opts.nextCls)){
					index = parseInt($obj.find('.'+opts.activeCls).text()) + 1;
				}else if($(this).hasClass(opts.prevCls)){
					index = parseInt($obj.find('.'+opts.activeCls).text()) - 1;
				}else if($(this).hasClass(opts.jumpBtnCls)){
					if($obj.find('.'+opts.jumpIptCls).val() !== ''){
						index = parseInt($obj.find('.'+opts.jumpIptCls).val());
					}else{
						return;
					}
				}else{
					index = parseInt($(this).data('page'));
				}
				self.filling(index);
				typeof opts.callback === 'function' && opts.callback(index);
				current=index;
				$('.pagation-content').empty();
				for(var i=(current-1)*opts.showData;i<current*opts.showData;i++){
					var itemi=$("<div>"+data[i]['name']+':'+'<span>'+data[i]['text']+'</span'+"</div>");
                    $('.pagation-content').append(itemi);  
                    if(i==opts.data.length-1){
                    	return;
                    }
				}
				
			});
			$obj.on('input propertychange','.'+opts.jumpIptCls,function(){
				var val = $(this).val();
				var reg = /[^\d]/g;
	            if (reg.test(val)) {
	                $(this).val(val.replace(reg, ''));
	            }
	            (parseInt(val) > pageCount) && $(this).val(pageCount);
	            if(parseInt(val) === 0){//最小值为1
	            	$(this).val(1);
	            }
			});
			$document.keydown(function(e){ 
		        if(e.keyCode == 13 && $obj.find('.'+opts.jumpIptCls).val()){
		        	var index = parseInt($obj.find('.'+opts.jumpIptCls).val());
		            self.filling(index);
					typeof opts.callback === 'function' && opts.callback(index);
		        }
		    });
		};

		//初始化
		this.init = function(){
			this.filling(opts.current);
			this.eventBind();
		};
		this.init();

	};

	$.fn.pagination = function(parameter,callback){
		if(typeof parameter == 'function'){
			callback = parameter;
			parameter = {};
		}else{
			parameter = parameter || {};
			callback = callback || function(){};
		}
		var options = $.extend({},defaults,parameter);
		return this.each(function(){
			var pagination = new Pagination(this,options);
			//总页数
//			var pageCount=options.pageCount;
			//数据长度
			var data=options.data;
			var len=data.length;
//			var pageCount=options.pageCount;
			var current=options.current;
			var showData=options.showData;
			console.log(data)
			for(var i=(current-1)*showData;i<current*showData;i++){
				var itemi=$("<div>"+data[i]['name']+'<strong>:</strong>'+'<span>'+data[i]['text']+'</span>'+"</div>");  
                    $('.pagation-content').append(itemi);
                    if(i==len-1){
                    	return;
                    }
			}
			callback(pagination);
		});
	};

	return $;

})(jQuery,window,document);