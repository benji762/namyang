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
    // $('.popup_footer .today_close').click(function(){
    //     $('.popup').hide();
    // })
    $('.popup_footer .close').click(function(){
        $('.popup').hide();
    })
    $('.popup_top_close').click(function(){
        $('.popup').hide();
    })

     var getCookie = function (cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1);
            if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
        }
        return "";
    }
    // 쿠키획득
    var setCookie = function (cname, cvalue, exdays) {
        var todayDate = new Date();
        todayDate.setTime(todayDate.getTime() + (exdays*24*60*60*1000));    
        var expires = "expires=" + todayDate.toUTCString(); 
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }
    // 쿠키설정
    var couponClose = function(sta){
        if(sta == 1){
            setCookie("close","Y",1);//1을 7로 하면 일주일로 늘어남
        }
    // 시간설정
        $("#popupDiv").hide();
    }
    $(document).ready(function(){
        var cookiedata = document.cookie;
        if(cookiedata.indexOf("close=Y")<0){
            $("#popupDiv").show();
        }else{
            $("#popupDiv").hide();
        }
        //쿠키 데이터가 존재하지 않을경우 보이고 존재 할 경우 없어집니다
        $(".today_close").click(function(){
            couponClose(1);
        });
    });
    // .btn-close를 눌렀을 경우 couponClose가 0에서 1로 바뀌며 바뀌었을경우 setCookie("close","Y",1);설정이 들어가 #popupDiv를 숨기게 됩니다
})

