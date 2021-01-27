
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


let select = function () {
    let selectTitle = document.querySelectorAll('.select__title');
    let selectItem = document.querySelectorAll('.select__item');

    selectTitle.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select'),
            currentText = select.querySelector('.select__title');
        currentText.innerText = text;
        select.classList.remove('is-active');

    }

};


select();


const slider = document.querySelector('.input__range_item');
const value = document.querySelector('.range__percent')
value.textContent = slider.value
slider.oninput = function() {
    value.textContent = this.value;
}
