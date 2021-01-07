export default class Card {
    constructor ({data, handleCardClick}, cardSelector) {
      this._name = data.name
      this._link = data.link
      this._cardSelector = cardSelector
      this._handleCardClick = handleCardClick



    }

    _getTemplate () {
      const cardElement = this._cardSelector
      .content
      .querySelector('.element')
      .cloneNode(true)
      return cardElement;
    }

    generateCard () {
      this._element = this._getTemplate()
      this._setEventListeners()
      this._subtitleElement = this._element.querySelector('.element__subtitle')
      this._subtitleElement.textContent = this._name
      this.photoElement.src = this._link
      this.photoElement.alt = `${this._name}`
      return this._element;
    }

    _setEventListeners () {
      this._likes = this._element.querySelector('.button_type_like');
      let likeCount = this._element.querySelector('.element__counter_like').innerHTML;

        this._likes.addEventListener('click', () => {
          if(this._likes.classList.contains('button_type_like_active')) {
            this._likes.classList.remove('button_type_like_active')
            --likeCount
            if(likeCount === 0) {
              likeCount = ""
            }
          }else {
            this._likes.classList.add('button_type_like_active')
            ++likeCount
          }
          this._element.querySelector('.element__counter_like').innerHTML = likeCount
      });

      this.photoElement = this._element.querySelector('.element__photo')
      this.photoElement.addEventListener('click', () => {
        this._handleCardClick()
      })
    }
    //  Удаляем карточки
    _deleteCard () {
      this._element.remove();
    }
  // добавляем лайк
    // _hendleAddLike () {
    //  this._likes.classList.toggle('button_type_like_active');

    // }
}






