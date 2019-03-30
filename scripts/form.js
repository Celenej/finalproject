(function($){

    'use strict';

    const $sn = $('.sn');
    const $si = $('input', $sn);
    const $ri = $('.radio-group input');
    const $cs = $('#cs');

    $sn.hide();
    $si.attr('disabled', 'disabled');

    $ri.change(function(){

        if($cs.is(':checked')){
            $sn.show();
            $si.removeAttr('disabled');
        }else{
            $sn.hide();
            $si.attr('disabled', 'disabled');
        }
    
    });

})(jQuery);