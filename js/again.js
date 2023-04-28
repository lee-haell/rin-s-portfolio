$(function(){

  /* menu click */
  const menu = $('.menu');

  menu.click(function(){
    menu.removeClass('active');
    $(this).addClass('active');
  });


  /* scroll event */
  // $(window).scroll(function(){
  //   const circle = $('.circle');
  //   let browserHeight = window.innerHeight;
  //   const scrollValue = $(document).scrollTop();

  //   console.log(scrollValue);

  //   if(scrollValue >= browserHeight/2){
  //     circle.addClass('scroll');
  //   }

  // });








});