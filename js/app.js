$(function(){
    // scroll animation
    //
    //
    let marqueeStr = $('.textList');

    $(window).scroll(function(){
        const scrollValue = $(document).scrollTop();
        console.log(scrollValue);

        if(scrollValue >= 500){
            marqueeStr.removeClass('scrollUp');
            marqueeStr.addClass('scrollDown');
        } 
        else {
            marqueeStr.removeClass('scrollDown');
            marqueeStr.addClass('scrollUp');
        }

    });




});