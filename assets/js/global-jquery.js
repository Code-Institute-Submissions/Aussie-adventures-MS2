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



//Reasons to visit Australia Icons animations (trigger scroll)

$(document).ready(function() {
    $(window).scroll(function() {
        let position = $(this).scrollTop();
        if (position >= 450) {
            $('.text-secondary').addClass("moveFromLeft");
            $('.text-success').addClass("moveFromBottom");
            $('.text-danger').addClass("moveFromRight");


        } else {
            $('.text-secondary').removeClass("moveFromLeft");
            $('.text-success').removeClass("moveFromBottom");
            $('.text-danger').removeClass("moveFromRight");

        }
    });
});


// Opens/Close the taking-notes app 

$(".open-notes-app").on("click", function() {
    $("#taking-notes-app").toggleClass("opened");
    if ($(this).text() == "Open taking-notes App") {
        $(this).text("Open taking-notes App");
    } else {
        $(this).text("Close taking-notes App");
    }
});