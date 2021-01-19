

export default class Card {
    constructor ({data, handleCardClick, hendelDeleteClick, hendleAddLikeClick}, cardSelector, userId) {
      this._name = data.name
      this._link = data.link
      this._id = data._id
      this._likes = data.likes
      this._userId = userId
      this._owner = data.owner._id
      this._isLiked = false

      this._cardSelector = cardSelector
      this._handleCardClick = handleCardClick
      this._hendelDeleteClick = hendelDeleteClick
      this._hendleAddLikeClick = hendleAddLikeClick

      this._element = this._getTemplate()
      this._buttonDelete = this._element.querySelector('.button_type_delete')
      this._likesButton = this._element.querySelector('.button_type_like');
      this._likeCount = this._element.querySelector('.element__counter_like')
    }

    _getTemplate () {
      const cardElement = this._cardSelector
      .content
      .querySelector('.element')
      .cloneNode(true)
      return cardElement;
    }

    generateCard () {
      this._setEventListeners()
      this._subtitleElement = this._element.querySelector('.element__subtitle')
      this._subtitleElement.textContent = this._name
      this.photoElement.src = this._link
      this.photoElement.alt = `${this._name}`
      this._likeCount.textContent = this._likes.length
      this._renderLike(this._clickLike(this._likes))
      if(this._owner !== this._userId) {
        this._buttonDelete.remove()
      }
      console.log(this._userId)
      return this._element;
    }

    getId () {
      return this._id
    }

     _setEventListeners () {
       if(this._buttonDelete) {
       this._buttonDelete.addEventListener('click', () => {
         this._hendelDeleteClick(this._id)
       })
       }

       this._likesButton.addEventListener('click', () => {
         this._hendleAddLikeClick(this._id, this._isLiked, (data) => { this._likeStatus(data) })
       });
       this.photoElement = this._element.querySelector('.element__photo')
       this.photoElement.addEventListener('click', () => {
         this._handleCardClick()
       })
     }
    //  Удаляем карточки
    deleteCard () {
      this._element.remove();

    }

_clickLike (arr) {
  for (let i = 0; i<arr.length; i++) {
    if(arr[i]._id === this._userId){
      return true;
    }

  }
  return false;
}

_renderLike (data) {
  if(data === true) {
    this._likesButton.classList.add('button_type_like_active')
    this._isLiked = true
  }else {
    this._likesButton.classList.remove('button_type_like_active')
    this._isLiked = false
  }
}

_likeStatus (data) {
  this._likeCount.textContent = data.likes.length
  this._renderLike(this._clickLike(data.likes))
}

}








