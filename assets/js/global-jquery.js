//Toggle functions - Learn about Australia cards -Code inspired from Code Institute Course

$(document).ready(function() {
    $(".invisible").hide();
});
$(".find-out-btn").click(function() {
    $(this).siblings("p").removeClass('invisible').toggle("fast");
});


$(function() {
    $(".find-out-btn").click(function() {

        if ($(this).text() === 'Find out more...') {
            $(this).text('Find out less...');

        } else {
            $(this).text('Find out more...');
        }
    });
});


//Gallery filter 

$('.gallery-list-item').click(function() {
    let value = $(this).attr('data-filter');
    if (value === 'all') {
        $('.filter').show(250);
    } else {
        $('.filter').not('.' + value).hide(250);
        $('.filter').filter('.' + value).show(250);
    }
});

$('.gallery-list-item').click(function() {
    $(this).addClass('active-item').siblings().removeClass('active-item');

});