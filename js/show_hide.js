$(function(){

    //family_site_wrap
    var family_btn_sta = 0;
	$('#footer .family_site').hide()
    $('#footer .btn_family_site').click(function(){
        if (family_btn_sta == 0){
        $('#footer .family_site').stop().slideDown();
        $(this).addClass('on');
        family_btn_sta = 1;
        }
        else{
            $('#footer .family_site').stop().slideUp();
            $(this).removeClass('on');
            family_btn_sta = 0;
        }
    })

    //pop_up
    $('.popup_footer .today_close').click(function(){
        $('.popup').hide();
    })
    $('.popup_footer .close').click(function(){
        $('.popup').hide();
    })
    $('.popup_top_close').click(function(){
        $('.popup').hide();
    })
})

