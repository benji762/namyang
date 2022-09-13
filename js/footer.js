$(function(){
$('.ft_sns_wrap a').each(function(){
    var img = $(this).find('img')
    var src_off = img.attr('src')
    var src_on = src_off.replace('_off','_on');
    $(this).hover(function(){
      img.attr('src',src_on)
    },function(){
      img.attr('src',src_off);
    });
})
})

