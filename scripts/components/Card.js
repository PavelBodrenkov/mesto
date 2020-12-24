export default class Card {
    constructor ({data, handleCardClick}, cardSelector) {
      this._name = data.name
      this._link = data.link
      this._cardSelector = cardSelector
      this._handleCardClick = handleCardClick
    }
  
    _getTemplate () {
      const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true)
      return cardElement;
    }
  
    generateCard () {
      this._element = this._getTemplate()
      this._setEventListeners()
      this._element.querySelector('.element__subtitle').textContent = this._name
      this._element.querySelector('.element__photo').src = this._link
      return this._element;
    }
  
    _setEventListeners () {
      this._element.querySelector('.button_type_delete').addEventListener('click', () => {
        this._deliteCard ()
      })
  
      this._element.querySelector('.button_type_like').addEventListener('click', () => {
        this._hendleAddLike ()
      })
  
      this._element.querySelector('.element__photo').addEventListener('click', () => {
        this._handleCardClick()
      })
    }
    //  Удаляем карточки
    _deliteCard () {
      this._element.remove();
    }
  // добавляем лайк
    _hendleAddLike (evt) {
      this._element.querySelector('.button_type_like').classList.toggle('button_type_like_active');
    }
 
}




 
  
  