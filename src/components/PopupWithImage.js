import{popupBigPhoto} from './../utils/constants.js'
import{popupBigTitle} from './../utils/constants.js'
import Popup from './../components/Popup.js';

export default class PopupWithImage extends Popup{
    constructor (data, popupSelector) {
        super(popupSelector)
        this._name = data.name
        this._link = data.link
      
    }

    open () {
        super.open()
        popupBigPhoto.src = this._link
        popupBigTitle.textContent = this._name
        popupBigPhoto.alt = "изображение `${this._name}`"
        
    }
    
}