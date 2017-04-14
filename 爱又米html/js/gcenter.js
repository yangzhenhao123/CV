(function(doc, win) {
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function() {
			var clientWidth = docEl.clientWidth;
			if (!clientWidth) return;
			docEl.style.fontSize = 100 * (clientWidth / 1080) + 'px';
		};
	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

function changeDivHeight(){               
        var heig = $(window).height(); 
        $(" ").css("min-height", heig);
}
window.onresize=function(){  
         changeDivHeight();  
}  
$(function(){
changeDivHeight(); 
});


$(document).ready(function () {
	$("#").click(function () {
	 	$(".").css("display", "block");
	 });
	 $(".lmy_yd_sdzxlb_gb").click(function () {
	 	$(".lmy_yd_sdzxlb").css("display", "none");
	 });
 });
 
$(function(){
		$('#yd_popup_botton').click(function(){
			$("#yd_popup_open").css("display", "block");
			$('#yd_popup_open').animate({'top':'0','opacity':'100'},{duration:800,easing:'easeInOutCirc',
			complete:function(){  
			
			}});
		});
	});
$(function(){
		$('#yd_popup_botton_right').click(function(){
			$("#yd_popup_open_right").css("display", "block");
			$('#yd_popup_open_right').animate({'left':'0','opacity':'1'},{duration:800,easing:'easeInOutCirc',
			complete:function(){  
			
			}});
		});
	});
$(function(){
		$('#yd_popup_down').click(function(){
			$("#yd_popup_open").css("display", "none");
			$('#yd_popup_open', window.parent.document).animate({'top':'1000','opacity':'0'},{duration:800,easing:'easeInOutCirc',
			complete:function(){  
			
			}});
			$("#yd_popup_open_right").css("display", "none");
			$('#yd_popup_open_right', window.parent.document).animate({'left':'1000','opacity':'0'},{duration:800,easing:'easeInOutCirc',
			complete:function(){  
			
			}});
		});
	});
	
$(function(){
		$('#yd_buy_botton').click(function(){
			$("#yd_buy_open").css("display", "block");
			$('.yd_module_buy_content').animate({'bottom':'0','opacity':'1'},{duration:500,easing:'easeInOutCirc',
			complete:function(){  
			
			}});
		});
	});
$(function(){
		$('#yd_buy_down').click(function(){
			$('.yd_module_buy_content').animate({'bottom':'-500px','opacity':'0'},{duration:500,easing:'easeInOutCirc',
			complete:function(){  
			$("#yd_buy_open").css("display", "none");
			}});
		});
	});
	
 setTimeout(function(){
		$("#yd_return_home_animation").animate({bottom:'1.5rem',opacity:'1'},500);
	 	},1000)
 
 /* 微信客服*/
  setTimeout(function(){
		$("#yd_return_home_call").animate({bottom:'1.5rem',opacity:'1'},500);
		$('#yd_return_home_call').click(function(){
			$(".yd_return_call_popup").css("display", "block");
			$("body").css("overflow", "hidden");
		});
		$('.yd_return_call_popup_down').click(function(){
			$(".yd_return_call_popup").css("display", "none");
			$("body").css("overflow", "auto");
		});
	 },1000)
  
 /* 微信客服 end*/

 /* 宝贝详情页滑出更多*/
$(function(){
		$('#yd_foundmore').click(function(){
			$("#yd_found_appear").css("display", "block");
			$("body").css("overflow", "hidden");
			$('#yd_found_appear', window.parent.document).animate({'right':'0','opacity':'1'},{duration:800,easing:'easeInOutCirc',
			complete:function(){  
			}});
			$('.yd_baby_details_title', window.parent.document).animate({'right':'0','opacity':'1'},{duration:800,easing:'easeInOutCirc',
			complete:function(){  
			}});
		});
		$('#yd_found_appear span').click(function(){
			$('#yd_found_appear', window.parent.document).animate({'right':'-1000px','opacity':'0'},{duration:800,easing:'easeInOutCirc',
			complete:function(){  
				$("#yd_found_appear").css("display", "none");
				$("body").css("overflow", "auto");
			}});
		});
});
/* 宝贝详情页滑出更多 end*/

 /* 宝贝详情页顶部下滑固定头部
$(function(){
	//var h1 =  $(".yd_shuffling").height();
	//var h2 = $(".yd_shuffling").height();
	//var ss =  $(document).scrollTop();
	//alert(h2);
	$(window).scroll(function(){
		var  h1=$(".yd_module_one").height()
		var s = $(document).scrollTop();
        console.log(s);
		if(s< h1){
			$('.yd_module_baby_top').removeClass('yya');
			$('.yd_module_baby_top').addClass('gizle');
		}if(s >=h1){
			$('.yd_module_baby_top').removeClass('gizle');
			$('.yd_module_baby_top').addClass('yya');
		}
		/*if(s > h2){
			$('.yd_index_nav').addClass('gizle');
			if(s > ss){
				$('.yd_index_nav').removeClass('sabit');
			}else{
				$('.yd_index_nav').addClass('sabit');
			}
			ss = s;
		}*/


	//});
	
//});
 /* 宝贝详情页顶部下滑消失，上滑出现 end*/
 /* 音屏js*/
$(document).ready(function(){
	
		$('#yd_audio_play').click(function(){
			var img_xx= $("#yd_audio_play img").attr("src");
			if(img_xx == "img/y_22.png")
		        {
		         $("#yd_audio_play img").attr("src","img/y_22_01.png");
				var audioEle = $("#yd_audio_file")[0];
			    audioEle.play();	//播放
		        }else{
		        	 $("#yd_audio_play img").attr("src","img/y_22.png");
				var audioEle = $("#yd_audio_file")[0];
			    audioEle.pause();	//暂停
				}
			});				
		});
 /* 音屏js end*/
