

export default class Api {
  constructor ({address, token}) {
    this._adress = address
    this._token = token
    // this._options = options
    }

// выгрузить карточки с сервера
  getInitialCards () {
    return fetch(`${this._adress}/cards`, {
      headers : {
        authorization: this._token
      }
    })
    .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
    .catch((err) => {
      console.log('Ошибка')
    })
  }

//Выгрузить данные профиля с сервера
  getInitialProfile () {
    return  fetch(`${this._adress}/users/me`, {
      method:'GET',
      headers : {
        authorization: this._token,
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
  return fetch(`${this._adress}/users/me`, {
    method: 'PATCH',
    headers : {
      authorization: this._token,
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
  return fetch(`${this._adress}/cards`, {
    method: 'POST',
    headers: {
      authorization: this._token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name:item.name,
      link:item.link
    })
  })
  .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
  .catch((err) => {
    console.log(err)
  })
}

//Удалить карточку
deleteAddCard (item) {
  return fetch(`${this._adress}/cards/${item}`, {
    method: 'DELETE',
    headers: {
      authorization: this._token
    }
  })
  .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
  .catch((err) => {
    console.log(err)
  })
}

//Обновление аватара
addAvatar (item) {
  return fetch(`${this._adress}/users/me/avatar`,{
    method: 'PATCH',
    headers: {
      authorization:this._token,
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({
      avatar:item.avatar
    })
  })
  .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
  .catch((err) => {
    console.log(err)
  })
}

addLike (item) {
  return fetch(`${this._adress}/cards/likes/${item}`, {
    method:'PUT',
    headers: {
      authorization:this._token,
      'Content-Type': 'application/json'
    }

  })
  .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
    .catch((err) => {
    console.log(err)
  })
}

deleteLike (item) {
  return fetch(`${this._adress}/cards/likes/${item}`, {
    method:'DELETE',
    headers: {
      authorization:this._token
    }

  })
  .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
  .catch((err) => {
  console.log(err)
  })
}


}
