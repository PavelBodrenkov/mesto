import {element} from './../utils/constants.js'
import Popup from './Popup.js'
export default class PopupWidthFormSubmit extends Popup {
  constructor(popupElement, element) {
    super(popupElement)
    this._popupElement = popupElement
    this._element = element

  }

setEventListeners () {
  this._element.addEventListener('click', (evt) => {

      if(this._element) {

        evt.target.closest('.element').remove()
      }
    })
}


}
