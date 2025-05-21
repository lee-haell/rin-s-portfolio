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
    $(location).attr('href', 'https://haell.notion.site/1fa53f67076e8048abd6eb53a63ec3a9?pvs=4');
  });


});