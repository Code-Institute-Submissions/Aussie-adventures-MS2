/*Toggle functions - Learn about Australia cards -Code inspired from Code Institute Course*/

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