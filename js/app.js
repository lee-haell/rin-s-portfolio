$(function(){
    // scroll animation
    let coverWrap = $('.bookCoverWrap');
    let coverStr = $('.coverStrInner');
    let book = $('.book');

    $(window).scroll(function(){
        let browserHeight = window.innerHeight;
        const scrollValue = $(document).scrollTop();

        if(scrollValue >= browserHeight/10){
            coverStr.addClass('openActive1');
            book.addClass('openActive1');
        } 
        if(scrollValue >= browserHeight/6){
            coverStr.addClass('openActive2');
            book.addClass('openActive2');
        }
        if(scrollValue >= browserHeight/4){
            coverStr.addClass('openActive3');
            book.addClass('openActive3');
        }
        if(scrollValue >= browserHeight/2){
            coverWrap.fadeOut(500);
            coverWrap.siblings('.wrap').removeClass('hide');
        }
    });

});