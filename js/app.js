$(function(){
    // scroll animation
    //
    //
    let coverWrap = $('.bookCoverWrap');
    let coverStr = $('.coverStrInner');
    let book = $('.book');

    $(window).scroll(function(){
        let browserHeight = window.innerHeight;
        const scrollValue = $(document).scrollTop();

        // if(scrollValue >= 300){
        //     coverStr.addClass('openActive1');
        //     book.addClass('openActive1');
        // } else {
        //     coverStr.removeClass('openActive1');
        //     book.removeClass('openActive1');
        // }

        // if(scrollValue >= 500){
        //     coverStr.addClass('openActive2');
        //     book.addClass('openActive2');
        // } else {
        //     coverStr.removeClass('openActive2');
        //     book.removeClass('openActive2');
        // }

        // if(scrollValue >= 700){
        //     coverStr.addClass('openActive3');
        //     book.addClass('openActive3');
        // }

        // if(scrollValue >= 800){
        //     coverWrap.fadeOut(500);
        //     coverWrap.siblings('.wrap').removeClass('hide');
        // }


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




        console.log(browserHeight);
        console.log(scrollValue);
    });

});