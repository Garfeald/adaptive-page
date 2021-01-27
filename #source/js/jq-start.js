$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
});

$(document).ready(function() {
    $('.select__block_img,.select__block_imgWhite').click(function(event) {
        $('.select__body').toggleClass('select__body_active');
        $('.select__block_img').toggleClass('select__block_img_active');
        $('.select__block_imgWhite').toggleClass('select__block_imgWhite_active');
        $('.select__header').toggleClass('select__header_active');
    })
});

$(document).ready(function() {
    $('.select__item').click(function(event) {
        $('.select__body').removeClass('select__body_active');
        $('.select__header').removeClass('select__header_active');
        $('.select__block_img').removeClass('select__block_img_active');
        $('.select__block_imgWhite').removeClass('select__block_imgWhite_active');
    })
});

