if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

    $(document).mouseup(function (e) {
        var dd = $("#dd_1"); var dd_info = $("#dd_info_1");
        if (dd.has(e.target).length === 0) {dd_info.slideUp(500, "swing");}
    });
    $(document).mouseup(function (e) {
        var dd = $("#dd_2"); var dd_info = $("#dd_info_2");
        if (dd.has(e.target).length === 0) {dd_info.slideUp(500, "swing");}
    });
    $(document).mouseup(function (e) {
        var dd = $("#dd_3"); var dd_info = $("#dd_info_3");
        if (dd.has(e.target).length === 0) {dd_info.slideUp(500, "swing");}
    });
    $(document).mouseup(function (e) {
        var dd = $("#dd_4"); var dd_info = $("#dd_info_4");
        if (dd.has(e.target).length === 0) {dd_info.slideUp(500, "swing");}
    });

    jQuery(function($) {
            $('#dd_1').click(function a() {
                $('#dd_info_1').stop();
                if ($(this).parent().find('#dd_info_1').length) {
                    $('#dd_info_2, #dd_info_3, #dd_info_4').hide();
                    $(this).parent().find('#dd_info_1').slideToggle(500, "swing");
                    return false;
                }
            });
    });
    
    jQuery(function($) {
       
            $('#dd_2').click(function() {
                $('#dd_info_2').stop();
                if ($(this).parent().find('#dd_info_2').length) {
                    $('#dd_info_1, #dd_info_3, #dd_info_4').hide();
                    $(this).parent().find('#dd_info_2').slideToggle(500, "swing"); 
                    return false;
                }
            });
    });
    
    jQuery(function($) {
    
            $('#dd_3').click(function() {
                $('#dd_info_3').stop();
                if ($(this).parent().find('#dd_info_3').length) {
                    $('#dd_info_1, #dd_info_2, #dd_info_4').hide();
                    $(this).parent().find('#dd_info_3').slideToggle(500, "swing"); 
                    return false;
                }
            });
    });
    
    jQuery(function($) {
        
            $('#dd_4').click(function() {
                $('#dd_info_4').stop();
                if ($(this).parent().find('#dd_info_4').length) {
                    $('#dd_info_1, #dd_info_2, #dd_info_3').hide();
                    $(this).parent().find('#dd_info_4').slideToggle(500, "swing"); 
                    return false;
                }
            });
    });
    
if (window.addEventListener) {
    var once = false;
    window.addEventListener('touchstart', function(){
        if (!once) {once = true;}});
}

} else {
    
    $("#dd_1").hover(function () {
        $("#dd_info_1").stop().slideDown(500, "swing");
    }, function(){
        $("#dd_info_1").stop().slideUp(500, "swing");
    });
    $("#dd_2").hover(function () {
        $("#dd_info_2").stop().slideDown(500, "swing");
    }, function(){
        $("#dd_info_2").stop().slideUp(500, "swing");
    });
    
    $("#dd_3").hover(function () {
        $("#dd_info_3").stop().slideDown(500, "swing");
    }, function(){
        $("#dd_info_3").stop().slideUp(500, "swing");
    });
    
    $("#dd_4").hover(function () {
        $("#dd_info_4").stop().slideDown(500, "swing");
    }, function(){
        $("#dd_info_4").stop().slideUp(500, "swing");
    });
        
}