

//slide class
var classNow = 0;
var class_swiper = new Swiper('.class_swiper',{
	effect : 'fade',
	fade: {
	  crossFade: true
	},
	loop:true,
	prevButton:'.class_prev',
	nextButton:'.class_next',
	onInit: function(swiper) {
        swiperAnimateCache(swiper);
        swiperAnimate(swiper);
    },
	onTransitionEnd:function(swiper){
		swiperAnimate(swiper);
		classNow = swiper.realIndex;
		$('.class_tab li').removeClass('on');
		$('.class_tab li').eq(classNow).addClass('on');
	}
});
$('.class_tab li').each(function(i){
	$(this).click(function(){
		$('.class_tab li').removeClass('on');
		$('.class_tab li').eq(i).addClass('on');
		class_swiper.slideTo(i+1);
	});
});

jQuery(document).ready(function(){


    // sllick mon phai
    $('.slide-mon-phai').slick({
        dots: true,
        arrows: false,
        // autoplay: true,
        
    });
  
   
});




















