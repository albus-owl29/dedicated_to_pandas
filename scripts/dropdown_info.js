jQuery(function($) {
    var width = $(window).width();
    if (width <= 480) {
        $('#dd_1').click(function() {
  
            if ($(this).parent().find('#dd_info_1').length) {
                $('#dd_info_2, #dd_info_3, #dd_info_4').hide();
                $(this).parent().find('#dd_info_1').slideToggle(500, "swing"); 
  
                return false;
            }
        });
    }
});

jQuery(function($) {
    var width = $(window).width();
    if (width <= 480) {
        $('#dd_2').click(function() {
        
            if ($(this).parent().find('#dd_info_2').length) {
                $('#dd_info_1, #dd_info_3, #dd_info_4').hide();
                $(this).parent().find('#dd_info_2').slideToggle(500, "swing"); 
  
                return false;
            }
        });
    }
});

jQuery(function($) {
    var width = $(window).width();
    if (width <= 480) {
        $('#dd_3').click(function() {
  
            if ($(this).parent().find('#dd_info_3').length) {
                $('#dd_info_1, #dd_info_2, #dd_info_4').hide();
                $(this).parent().find('#dd_info_3').slideToggle(500, "swing"); 
  
                return false;
            }
        });
    }
});

jQuery(function($) {
    var width = $(window).width();
    if (width <= 480) {
        $('#dd_4').click(function() {
  
            if ($(this).parent().find('#dd_info_4').length) {
                $('#dd_info_1, #dd_info_2, #dd_info_3').hide();
                $(this).parent().find('#dd_info_4').slideToggle(500, "swing"); 
  
                return false;
            }
        });
    }
});