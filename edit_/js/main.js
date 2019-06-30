$(document).ready(function(){       
    var scroll_menu = 0;
    $(document).scroll(function() { 
        scroll_menu = $(this).scrollTop();
        if(scroll_menu > 100) {
            $(".navi_bar").addClass('.bg_menu');
        } 
        if(scroll_menu < 100) {
            $(".navi_bar").removeClass('.bg_menu');
        } 
    });
});