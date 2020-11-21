// Добовляем оповещение об ошибках
const showInputError = (form, input, config) => {
    const errorElement = form.querySelector(`#${input.id}-error`);
    input.classList.add(config.inputInvalidClass);
    errorElement.textContent = input.validationMessage;
}

// Убираем оповещение об ошибках
const hideInputError = (form, input, config) => {
    const errorElement = form.querySelector(`#${input.id}-error`);
    input.classList.remove(config.inputInvalidClass);
    errorElement.textContent = '';
}

// Проверяем на валидность
const isValid = (form, input, config) => {
    if (!input.validity.valid) {
        showInputError(form, input, config);
    }else {
        hideInputError (form, input, config);
    }
}

// Проверяем на невалидность хотябы 1 инпут
const hasInvalidInput = (inputList) => {
    return inputList.some((input) => {
        return !input.validity.valid;
    })
}

// Выключаем/включаем кноку
const toggleButtonState = (inputList, button, config) => {
    if(hasInvalidInput(inputList)) {
        button.setAttribute('disabled', true);
        button.classList.add(config.buttonInvalidClass);
    }else {
        button.removeAttribute('disabled');
        button.classList.remove(config.buttonInvalidClass);
    }
}

// Добавляем слушатель всем полям
const setEventListeners = (form, config) => {
    const inputList = Array.from(form.querySelectorAll(config.inputSelector));
    const buttonElement = form.querySelector(config.submitButtonSelector);
            inputList.forEach((input) => {
        input.addEventListener('input', () => {
        isValid(form, input, config);
        toggleButtonState(inputList, buttonElement, config);
        });
    });
};

function validInput () {
    buttonTypeEdit.addEventListener('click', function () {

    })
}
  

// Добавляем слушатель кнопок в формах
const enableValidation = (config) => {
const formList = document.querySelectorAll(config.formSelector);
formList.forEach((form) => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })
    setEventListeners(form, config);
})
}

const validationConfig = {
    formSelector: '.form',
    inputSelector: '.popup__data',
    submitButtonSelector: '.button',
    inputInvalidClass: 'popup__data_type_error',
    buttonInvalidClass: 'button_type_inactive'
};

enableValidation(validationConfig);

