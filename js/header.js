
  $(function(){
    var window_size = window.outerWidth;
    $('header').addClass('whitecolor');
  })
$(window).scroll(function(){
    if ($(document).scrollTop() >= 1){ 
      $('header').removeClass('whitecolor');
      $('header').addClass('fixed');
      $('.btn_nav.close').addClass('scroll_down')
      $('.mo_btn_nav.close').addClass('scroll_down')
    } //if
    else{ 
      $('header').addClass('whitecolor');
      $('header').removeClass('fixed');
      $('.btn_nav.close').removeClass('scroll_down')
      $('.mo_btn_nav.close').removeClass('scroll_down')

      
    }//else
  }) //$(window).scroll

