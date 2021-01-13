import Popup from './Popup.js'
export default class PopupWidthFormSubmit extends Popup {
  constructor({popupElement, element}) {
    super(popupElement)
    this._popupElement = popupElement
    this._element = element
    this._formElement = document.querySelector('.form_type_delete')
    // this._handleDeleteIconClick = handleDeleteIconClick
  }

  setEventListeners () {
    this._element.addEventListener('click', () => {
      super.open()
      this._formElement.addEventListener('submit', (evt) => {
        console.log('submit')
        evt.preventDefault()
        this._element.closest('.element').remove()
        this.close()
      })
    })
    super.setEventListeners()
  }

close () {
  super.close()
  this._formElement.removeEventListener('submit', (evt) => {
    console.log('submit')
    evt.preventDefault()
     const element = document.querySelector('.element')
    element.remove()
  })
}


}
