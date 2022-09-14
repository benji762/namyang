$(function(){
    $(window).scroll(function(){
        if ($(document).scrollTop() >= 700){ 
            $('#section1 .s1_art.fir').removeClass('scroll');
		    $('#section1 .s1_art.fir').addClass('scroll');
		}
		else{
            $('#section1 .s1_art.fir').removeClass('scroll');
        }

        if($(document).scrollTop() >=1100){
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
        if($(document).scrollTop() >= 2200){
            $('#section2').removeClass('scroll');
			$('#section2').addClass('scroll');
		}
        else{
        $('#section2').removeClass('scroll');
        }
        if($(document).scrollTop() >= 2800){
            $('#section3').removeClass('scroll');
			$('#section3').addClass('scroll');
		}
        else{
        $('#section3').removeClass('scroll');
        }
})
})
