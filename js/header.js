
  $(function(){
    $('header').addClass('whitecolor');
  })
$(window).scroll(function(){
    if ($(document).scrollTop() >= 1){ 
      $('header').removeClass('whitecolor');
      $('header').addClass('fixed');
      $('.btn_language_in').css({'top' : ' 45px' })
      $('.btn_nav.close').css({'top' : ' 10px' })
    } //if
    else{ 
      $('header').addClass('whitecolor');
      $('header').removeClass('fixed');
      $('.btn_language_in').css({'top' : ' 65px' })
      $('.btn_nav.close').css({'top' : ' 40px' })
      
    }//else
  }) //$(window).scroll
