// $(function(){
// 	$(window).resize(function(){
// 	location.reload();
// 	})

// })


new Swiper('.s2_slider', {
	initialSlide: 0,
	slidesPerView : 3,
	spaceBetween : 0,
	slidesPerGroup : 1,
	// 스크롤바 설정하기
	scrollbar : {
		el : '.swiper-scrollbar',
		draggable: true,
		dragSize:200 
	},
	freeMode: true,
	breakpoints: {
		// when window width is >= 600px
		600: {
		  slidesPerView: 1,
		  scrollbar : {
			el : '.swiper-scrollbar',
			draggable: true,
			dragSize:100 
		},
		//   freeMode: false,
		},
		// when window width is >= 1600px
		1200: {
		  slidesPerView: 2,
		}
	  }
});

new Swiper('.s4_slider', {
	speed : 8000,
	initialSlide: 0,
	slidesPerView : 5,
	spaceBetween : 100,
	slidesPerGroup : 1,
	freeMode: true,
	// loop: true,
	autoplay : {
		delay: 0,
	},
	breakpoints: {
		// when window width is >= 320px
		400: {
		  slidesPerView: 1,
		  spaceBetween: 20
		},
		700: {
			slidesPerView: 2,
			spaceBetween: 20
		  },
		// when window width is >= 480px
		1024: {
		  slidesPerView: 3,
		  spaceBetween: 30
		},
		// when window width is >= 640px
		1600: {
		  slidesPerView: 4,
		  spaceBetween: 40
		}
	  }
	})

	var s7_slider = new Swiper('.s7_slider', {
		initialSlide: 0,
		slidesPerView: 'auto',
        centeredSlides: true,
		spaceBetween : 130,
		slidesPerGroup : 1,
		loop: true,
		autoplay : {
			delay: 5000,
		},
		speed : 1000
		// centeredSlides: true,
		// CenteredSlidesBounds :true
	})
	// active를 센터로 해야해서 margin-left로 위치설정해줬음