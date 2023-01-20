$(function(){

    //첫 페이지 전환
    $('#openBtn').click(function(){
        $('.bookCoverWrap').addClass('pageTransition');
        $('.bookCoverWrap').fadeOut(1000);
        $('.wrap').removeClass('hide');
    });

});