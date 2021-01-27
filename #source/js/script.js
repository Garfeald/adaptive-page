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