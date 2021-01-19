import Popup from './Popup.js'
export default class PopupWidthFormSubmit extends Popup {
  constructor({popupElement}) {
    super(popupElement)
    this._popupElement = popupElement
    this._formElement = this._popupElement.querySelector('.form_type_delete')
  }

  setSubmitAction(action) {
    this._handleSubmitCallback = action;
  }

  setEventListeners() {
    super.setEventListeners()
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault()
      this._handleSubmitCallback()
      super.close()
    })
  }
}
