/*  
	Your Project Title
	Author: You
*/

(function($) {


    /* ====================  tooltip  ========================= */
    $('.masterTooltip').hover(function(){
        // Hover over code
        var title = $(this).attr('title');
        $(this).data('tipText', title).removeAttr('title');
        $('<p class="tooltip"></p>')
            .text(title)
            .appendTo('body')
            .fadeIn('slow')
    }, function() {
        //Hover out code
        $(this).attr('title', $(this).data('tipText'));
        $('.tooltip').remove();
    }).mousemove(function(e) {
       var mousex = e.pageX + 20; //Get X coordinates
       var mousey = e.pageY + 10; //Get Y coordinates
        $('.tooltip')
            .css({ top: mousey, left: mousex })
    });

    /* ===================   Tabbed Accordion For Projects Page ============================= */
    $('#tabs p').hide().eq(0).show();
    $('#tabs p:not(:first)').hide();

    $('#tabs-nav li').click(function(e) {
        e.preventDefault();
        $('#tabs p').hide();

        $('#tabs-nav .current').removeClass("current");
        $(this).addClass('current');
        var clicked = $(this).find('a:first').attr('href');

        $('#tabs ' + clicked).fadeIn('fast');
    }).eq(0).addClass('current');

/* =========== Project Page ====================== */
    $('.modalClick').on('click', function(event){
        event.preventDefault();
        $('#overlay')
            .fadeIn()
            .find('#modal')
            .fadeIn();
    });

    $('.close').on('click', function(event){
        event.preventDefault();
        $('#overlay')
            .fadeOut()
            .find('#modal')
            .fadeOut();

    });

/* ============ Fading Status ================ */
    $('.mystatus').mouseover(function(){
        $(this).fadeTo(100, .3);

    });

    $('.mystatus').mouseover(function(){
        $(this).fadeTo(100,  1);

    })

	
})(jQuery); // end private scope




