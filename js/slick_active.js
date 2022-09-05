$(function(){
  $(".lazy").slick({
    lazyLoad: 'ondemand', // ondemand progressive anticipated
    infinite: true,
    arrows : true,
    dots : true,
    autoplay : true,
    fade:true,
    speed : 2000
  });
})
