import Popup from './Popup.js'
export default class PopupWidthFormSubmit extends Popup {
  constructor({popupElement}) {
    super(popupElement)
    this._popupElement = popupElement
    // this._element = element
    //  this._formElement = document.querySelector('.form_type_delete')
    // this._handleDeleteIconClick = handleDeleteIconClick
  }

  setEventListeners () {
        super.open()
      //  this._formElement.addEventListener('submit', (evt) => {
      //     console.log('submit')
      //      evt.preventDefault()
      //      element.remove()

      super.setEventListeners()
  }
}
