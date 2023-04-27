$(function(){

  /* menu click */
  const menu = $('.menu');

  menu.click(function(){
    menu.removeClass('active');
    $(this).addClass('active');
  });


  /* scroll event */
  $(window).scroll(function(){
    const circle = $('.circle');
    let browserHeight = window.innerHeight;
    const scrollValue = $(document).scrollTop();

    if(scrollValue >= browserHeight/100){
      circle.addClass('scroll');
    }

    console.log(scrollValue);
  });








});