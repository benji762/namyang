$(function(){


    //nav_hover


  $('.nav').hover(function(){
    $('.depth2_bg').stop().slideDown();
  },function(){
    $('.depth2_bg').stop().slideUp();
  })

  $('.depth2').hide();

  $('.gnb >li').each(function(){
    $(this).hover(function(){
        $(this).find('.depth2').show()
    },function(){
        $(this).find('.depth2').hide()
    })
  })

  //btn_nav_click
  var window_size = window.outerWidth;
$('.btn_nav').click(function(){
  $('.btn_nav_click').animate({'right' : '0'})
  })

  $('.btn_nav.close').click(function(){
    if(window_size <= 1024){
      $('.btn_nav_click').animate({'right' : '-100%'})
      $('.btn_nav_click_depth2_ani').hide()
      $('.btn_nav_click_depth3_ani').hide()
    }
    else{
      $('.btn_nav_click').animate({'right' : '-100%'})
    $('.btn_nav_click_depth2_ani').hide()
    $('.btn_nav_click_depth3_ani').hide()
    $('.btn_nav_click_depth2_ani').animate({'left':'80%'})
    $('.btn_nav_click_depth3_ani').animate({'left':'50%'})
  }
    
  })


 // btn_nav_click_gnb li hover //
  $('.btn_nav_click_gnb >li').each(function(){
    $(this).mouseenter(function(){
      if(window_size <= 1024){
        
      }
      else{
        $('.btn_nav_click_depth2_ani').hide()
        $(this).find('.btn_nav_click_depth2_ani').show()
      }
    })
  })

   $('.btn_nav_click_gnb > li').mouseenter(function(){
    if(window_size <= 1024){
    }
    else{
    $('.btn_nav_click_depth2_ani').animate({'left':'100%'})
    }
  })

  // btn_nav_click_gnb li hover //
  $('.btn_nav_click_depth2 >li').each(function(){
    $(this).mouseenter(function(){
      if(window_size <= 1024){
      }
      else{
        $('.btn_nav_click_depth3_ani').hide()
        $(this).find('.btn_nav_click_depth3_ani').show()
      }
    })
  })

   $('.btn_nav_click_depth2 > li').mouseenter(function(){
    $('.btn_nav_click_depth3_ani').animate({'left':'70%'})
  })  


  // btn_nav_click_gnb_li click
  $('.btn_nav_click_gnb > li').each(function(){
    var depth2_show_btn = $(this).find('>p')
    var depth3_show_btn = $(this).find('.btn_nav_click_depth2 > li > p')
    var depth2 = $(this).find('.btn_nav_click_depth2_ani')
    var depth3 = $(this).find('.btn_nav_click_depth3_ani')
    depth2_show_btn.click(function(){
      if(window_size <= 1024){
        $('.btn_nav_click_depth2_ani').hide()
        depth2.slideDown()
      }
      else{}
    })
  })

  $('.btn_nav_click_depth2 > li').each(function(){
    var depth3_show_btn = $(this).find('>p')
    var depth3 = $(this).find('.btn_nav_click_depth3_ani')
    depth3_show_btn.click(function(){
      if(window_size <= 1024){
        $('.btn_nav_click_depth3_ani').hide()
        depth3.slideDown()
      }
      else{}
    })
  })



  // btn_search_click
  $('.btn_search_in').hide();
  $('.btn_search').click(function(){
    $('.btn_search_in').stop().slideDown();
    $(".overlay").css({ visibility:"visible", 
                                     opacity:1 });
  })
  $('.btn_search_close').click(function(){
    $('.btn_search_in').stop().slideUp();
    $(".overlay").css({ visibility:"hidden", 
                                     opacity:0 });
  })

  // 외부영역클릭시 .btn_search_in 닫힘
  $(document).mouseup(function (e){
    if($(".btn_search_in").has(e.target).length === 0){
      $(".btn_search_in").stop().slideUp();
      $(".overlay").css({ visibility:"hidden", 
                                     opacity:0 });
    }
  })

  //외부영역클릭시 .btn_language_in 닫힘
  // $(document).mouseup(function (e){
  //   if($(".btn_language_in").has(e.target).length === 0){
  //     $(".btn_language_in ").stop().fadeOut();
  //     btn_sta = 0;
  //   }
  // })

  // btn_language_click
  var btn_sta = 0;
  $('.btn_language_in').hide();
  $('.btn_language').click(function(){
    if(btn_sta == 0){
      $('.btn_language_in').stop().fadeIn();
      btn_sta = 1;
    }
    else{
      $('.btn_language_in').stop().fadeOut();
      btn_sta = 0;
    }    
  })
})