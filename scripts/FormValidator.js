export class FormValidator {
    constructor(data, formSelector) {
    this._formSelector = formSelector;
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inputInvalidClass = data.inputInvalidClass;
    this._buttonInvalidClass = data.buttonInvalidClass;
    this._disableButtonInvalid = data.disableButtonInvalid;
    }

    // Добовляем оповещение об ошибках
    _showInputError (input, formElement, )  {
        const errorElement = formElement.querySelector(`#${input.id}-error`);
        input.classList.add(this._inputInvalidClass);
        errorElement.textContent = input.validationMessage;
    }

    // Убираем оповещение об ошибках
    _hideInputError (input, formElement) {
        
        const errorElement = formElement.querySelector(`#${input.id}-error`);
        input.classList.remove(this._inputInvalidClass);
        errorElement.textContent = '';
    }

    // Проверяем на валидность
    _isValid (input, formElement) {
        if (!input.validity.valid) {
            this._showInputError (input, formElement);
        }else {
            this._hideInputError (input, formElement);
        }
    }

    // Проверяем на невалидность хотябы 1 инпут
    _hasInvalidInput (inputList) {
        return inputList.some((input) => {
            return !input.validity.valid;
        })
    }

    // Выключаем/включаем кноку
    _toggleButtonState (inputList, buttonElement) {
        if(this._hasInvalidInput(inputList)) {
            this.disabledButton(buttonElement);
        }else {
            this.removeDisabledButton(buttonElement);
        }
    }

    disabledButton (buttonElement) {
        buttonElement.classList.add(this._disableButtonInvalid)
        buttonElement.disabled = true;
    }

    removeDisabledButton (buttonElement) {
        buttonElement.classList.remove(this._disableButtonInvalid)
        buttonElement.disabled = false;
    }

    // Сбрасываем форму
    resetForm (formElement) {
        formElement.reset()
        const inputList = Array.from(formElement.querySelectorAll(this._inputSelector));
        inputList.forEach((input) => {
            this._hideInputError(input, formElement)
        })
    }
    

    // Добавляем слушатель всем полям
    _setEventListeners (formElement, buttonElement) {
        const inputList = Array.from(formElement.querySelectorAll(this._inputSelector));
        this._toggleButtonState(inputList, buttonElement);
        inputList.forEach((input) => {
            input.addEventListener('input', () => {
                this._isValid(input, formElement);
                this._toggleButtonState(inputList, buttonElement);
            });
        });
    };

    // Добавляем слушатель кнопок в формах
    enableValidation ()  {
    const formElement = document.querySelector(this._formSelector);
    const buttonElement = formElement.querySelector(this._submitButtonSelector);
    formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
          this.disabledButton(buttonElement);
        })
        this._setEventListeners(formElement, buttonElement);
        
    }
}






