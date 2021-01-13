export default class Card {
    constructor ({data, handleCardClick}, cardSelector) {
      this._name = data.name
      this._link = data.link
      this._cardSelector = cardSelector
      this._handleCardClick = handleCardClick
      // this._owner = (data.owner._id === utils)

    //  console.log(data.owner._id)

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
      // if(this._owner) {
      //   console.log('ggg')
      // }else {
      //   console.log(false)
      // }

      this._likes = this._element.querySelector('.button_type_like');
      this._likes.addEventListener('click', () => {
        this._hendleAddLike()
      });
      this.photoElement = this._element.querySelector('.element__photo')
      this.photoElement.addEventListener('click', () => {
        this._handleCardClick()
      })

        // this._element.querySelector('.button_type_delete').addEventListener('click', () => {
        //   this._deleteCard()
        //   this._element.querySelector('.button_type_delete').style.visibility = 'visible'
        // })




    }
    //  Удаляем карточки
    // _deleteCard () {
    //   this._element.remove();
    // }
  // добавляем лайк
  _hendleAddLike() {
    this._likeCount = this._element.querySelector('.element__counter_like').textContent;
    if (this._likes.classList.contains('button_type_like_active')) {
      this._likes.classList.remove('button_type_like_active')
      --this._likeCount
      if (this._likeCount === 0) {
        this._element.querySelector('.element__counter_like').style.display = 'none'
      }
    } else {
      this._likes.classList.add('button_type_like_active')
      ++this._likeCount
      this._element.querySelector('.element__counter_like').style.display = 'block'
    }
    this._element.querySelector('.element__counter_like').textContent = this._likeCount
  }
}






