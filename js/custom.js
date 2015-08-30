// Search activate
$(function() {
    $('.menu-btn.search-open').click(function() {
        $('#logo, #navbar').hide();
        $('.search-container').slideDown('fast');
    });
    $('.menu-btn.search-close').click(function() {
        $('.search-container').hide();
        $('#logo, #navbar').slideDown('fast');
    });
});
