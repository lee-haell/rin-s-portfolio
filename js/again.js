$(function(){

  /* menu click */
  const menu = $('.menu');

  menu.click(function(){
    menu.removeClass('active');
    $(this).addClass('active');
  });

});