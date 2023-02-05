$(function(){
    // scroll animation
    //
    //
    let coverStr = $('.coverStrInner');
    let book = $('.book');

    $(window).scroll(function(){
        const scrollValue = $(document).scrollTop();

        if(scrollValue >= 300){
            coverStr.addClass('openActive1');
            book.addClass('openActive1');
        } else {
            coverStr.removeClass('openActive1');
            book.removeClass('openActive1');
        }

        if(scrollValue >= 500){
            coverStr.addClass('openActive2');
            book.addClass('openActive2');
        } else {
            coverStr.removeClass('openActive2');
            book.removeClass('openActive2');
        }




        console.log(scrollValue);
    });

});