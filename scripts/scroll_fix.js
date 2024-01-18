$(document).ready(function(){

    $('nav a').click(function(){
        
        var otstupTop=75;
        $('body,html').animate({
        
            scrollTop: $($(this).attr('href')).offset().top-otstupTop

        }, 800);
    });
});