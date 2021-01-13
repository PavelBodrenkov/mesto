

export default class Api {
  constructor (options) {
    this._options = options
    }
// выгрузить карточки с сервера
  getInitialCards () {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-19/cards', {
      headers : {
        authorization: '175e5d69-964d-4046-a547-a053671ab7db'
      }
    })

    .then(res => {
      if(res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка:${res.status}`);
    })

    .then((item) => {
      return item
    })

  }
//Выгрузить данные профиля с сервера
  getInitialProfile () {
    return  fetch('https://mesto.nomoreparties.co/v1/cohort-19/users/me', {
      method:'GET',
      headers : {
        authorization: '175e5d69-964d-4046-a547-a053671ab7db',
        'Content-Type': 'application/json'

      }
    })
    .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))

       .catch((err) => {
      console.log('Ошибка')
    })
  }

//Редактирование данных профиля
pathEditProfile (item) {
  return fetch('https://mesto.nomoreparties.co/v1/cohort-19/users/me', {
    method: 'PATCH',
    headers : {
      authorization: '175e5d69-964d-4046-a547-a053671ab7db',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: item.name,
      about:item.about
    })
  })
}

//добавить карточку
postAddCard (item) {
  return fetch('https://mesto.nomoreparties.co/v1/cohort-19/cards', {
    method: 'POST',
    headers: {
      authorization: '175e5d69-964d-4046-a547-a053671ab7db',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name:item.name,
      link:item.link
    })
  })
  .then(res => {
    if(res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка:${res.status}`);
  })
  .then((item) => {
    return item
  })
  .catch((err) => {
    console.log(err)
  })
}

//Удалить карточку
deleteAddCard () {
  return fetch('https://mesto.nomoreparties.co/v1/cohort-19/cards/5ffc7f6d30cbab0274373974', {
    method: 'DELETE',
    headers: {
      authorization:'175e5d69-964d-4046-a547-a053671ab7db'
    }
  })
  .then(res => {
    if(res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка:${res.status}`);
  })

  .catch((err) => {
    console.log(err)
  })
}
//Обновление аватара
addAvatar (item) {
  return fetch('https://mesto.nomoreparties.co/v1/cohort-19/users/me/avatar',{
    method: 'PATCH',
    headers: {
      authorization:'175e5d69-964d-4046-a547-a053671ab7db',
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({
      avatar:item.avatar

    })
  })
  .then(res => {
    if(res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка:${res.status}`);
  })
  .then((item) => {
    return item
  })
  .catch((err) => {
    console.log(err)
  })

}

}
