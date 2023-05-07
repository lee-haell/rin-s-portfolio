$(function(){

  
  /* menu click */
  const menu = $('.menu');

  menu.click(function(){
    menu.removeClass('active');
    $(this).addClass('active');
  });


  /* resume link */
  const resume = $('.introListWrap');

  resume.click(function(){
    $(location).attr('href', 'https://haell.notion.site/Rin-d3f785d078e940f282ada31f83013d37');
  });


});