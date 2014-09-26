jQuery.fn.conRollover = function(type) {
	var lstart,lend;
	var tstart,tend;

	jQuery(this).append('\n<div class="image_roll_glass"></div><div class="image_roll_zoom"></div>');

	switch (type) {
		case 'top' : lstart='0'; lend='0'; tstart='-100%'; tend='0'; break;
		case 'right' : lstart='100%'; lend='0'; tstart='0'; tend='0'; break;
		case 'bottom' : lstart='0'; lend='0'; tstart='100%'; tend='0'; break;
		case 'left' : lstart='-100%'; lend='0'; tstart='0'; tend='0'; break;
	}

	jQuery(this).find('.image_roll_zoom').css({left:lstart, top:tstart});
	jQuery(this).hover(function(){
		jQuery(this).find('.image_roll_zoom').stop(true, true).animate({left: lend, top:tend},200);
		jQuery(this).find('.image_roll_glass').stop(true, true).fadeIn(200);
	},function() {
		jQuery(this).find('.image_roll_zoom').stop(true).animate({left:lstart, top:tstart},200);
		jQuery(this).find('.image_roll_glass').stop(true, true).fadeOut(200);
	});
};

jQuery(window).load(function() {
	function connectImage() {
		jQuery('.image_rollover_top').unbind('hover').conRollover('top');
		jQuery('.image_rollover_right').unbind('hover').conRollover('right');
		jQuery('.image_rollover_bottom').unbind('hover').conRollover('bottom');
		jQuery('.image_rollover_left').unbind('hover').conRollover('left');
	}

	connectImage();
});

jQuery(window).load(function() {
	function addZero( num ) {
		return ( num >= 0 && num < 10 ) ? '0' + num : num + '';
	}

	var now = new Date(),
		strDate = addZero( now.getDate() ) + '/' + addZero( now.getMonth() + 1 ) + '/' + now.getFullYear();

	jQuery( '#timeline' ).timeline({
		startItem: strDate,
		categories: ['Janeiro','Fevereiro','Mar&ccedil;o','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']
	});
});
jQuery(window).load(function() {
    var $ = jQuery;

    var today = $('#today_date').attr('data-today').split('/');
    console.log(today[1]);
    console.log(today[2]);
    var elem = new Array();
    $('.timeline_line a').each(function(){
        var _href = $(this).attr('href').replace('#','').split('/');
        //var element_date = Date.parse(_href);
        ///var element_date = new Date(_href[2],_href[1],_href[0]);
       // console.log('DIA: '+_href[0]+' MES: '+_href[1]+'  ANO: '+_href[2]);
        var month = _href[1];
        var year = _href[2];
        if(month != '10'){
            var month = _href[1].replace('0','');
        }
        if(month == today[1] && year == today[2]){
            //$(this).trigger('click');
            //console.log($(this).attr('href'));
            elem.push($(this).attr('href'));
            //return false;
        }
    })
    var last = elem[elem.length - 1];
    $('a[href="'+last+'"]').trigger('click');

})

