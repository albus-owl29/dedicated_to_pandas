$(document).ready(function(){

    $('nav a').click(function(){
        
        var otstupTop=80;
        $('body,html').animate({
        
            scrollTop: $($(this).attr('href')).offset().top-otstupTop

        }, 800);
    });
});