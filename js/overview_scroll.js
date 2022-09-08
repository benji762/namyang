$(function(){
    $(window).scroll(function(){
        if ($(document).scrollTop() >= 700){ 
            $('#section1 .s1_art.fir').removeClass('scroll');
		    $('#section1 .s1_art.fir').addClass('scroll');
		}
		else{
            $('#section1 .s1_art.fir').removeClass('scroll');
        }

        if($(document).scrollTop() >=1200){
            $('#section1 .s1_art.sec').removeClass('scroll');
			$('#section1 .s1_art.sec').addClass('scroll');
		}
        else{
            $('#section1 .s1_art.sec').removeClass('scroll');
        }
        
        if($(document).scrollTop() >= 1800){
            $('#section1 .s1_art.third').removeClass('scroll');
			$('#section1 .s1_art.third').addClass('scroll');
		}
        else{
        $('#section1 .s1_art.third').removeClass('scroll');
        }
})
})
