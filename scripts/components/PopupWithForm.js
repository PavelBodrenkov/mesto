import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
    constructor (popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._popupSelector = popupSelector;
        this._handleFormSubmit = handleFormSubmit;
        this._formElement = this._popupSelector.querySelector('.form');
    }

    _getInputValues() {
        this._inputList = Array.from(
        this._formElement.querySelectorAll('.popup__data'));
        this._inputValues = {};
        this._inputList.forEach((inputSelector) => {
          this._inputValues[inputSelector.name] = inputSelector.value;
      });
      return this._inputValues;
    }

    setEventListeners () {
        super.setEventListeners()
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            this.close();
        })
    }

    close () {
    super.close();
    this._formElement.reset();
    }
}