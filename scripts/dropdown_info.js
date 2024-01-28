jQuery(function($) {
    $('#dd_1').click(function() {
  
        if ($(this).parent().find('#dd_info_1').length) {
            $('#dd_info_2, #dd_info_3, #dd_info_4').hide();
            $(this).parent().find('#dd_info_1').slideToggle(200); 
  
            return false;
        }
  
    });
});

jQuery(function($) {
    $('#dd_2').click(function() {
        if ($(this).parent().find('#dd_info_2').length) {
            $('#dd_info_1, #dd_info_3, #dd_info_4').hide();
            $(this).parent().find('#dd_info_2').slideToggle(200); 
  
            return false;
        }
  
    });
});

jQuery(function($) {
    $('#dd_3').click(function() {
  
        if ($(this).parent().find('#dd_info_3').length) {
            $('#dd_info_1, #dd_info_2, #dd_info_4').hide();
            $(this).parent().find('#dd_info_3').slideToggle(200); 
  
            return false;
        }
  
    });
});

jQuery(function($) {
    $('#dd_4').click(function() {
  
        if ($(this).parent().find('#dd_info_4').length) {
            $('#dd_info_1, #dd_info_2, #dd_info_3').hide();
            $(this).parent().find('#dd_info_4').slideToggle(200); 
  
            return false;
        }
  
    });
});

$(document).mouseup( function(e){$('.dropdown_info').hide()})