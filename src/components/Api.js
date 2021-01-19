

export default class Api {
  constructor ({address, token}) {
    this._address = address
    this._token = token
  }

// выгрузить карточки с сервера
  getInitialCards () {
    return fetch(`${this._address}/cards`, {
      headers : {
        authorization: this._token
      }
    })
    .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
    .catch((err) => {
      console.log(`ошибка:${err}`)
    })
  }

//Выгрузить данные профиля с сервера
  getInitialProfile () {
    return  fetch(`${this._address}/users/me`, {
      method:'GET',
      headers : {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
    .catch((err) => {
      console.log(`ошибка:${err}`)
    })
  }

//Редактирование данных профиля
pathEditProfile (item) {
  return fetch(`${this._address}/users/me`, {
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
  .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
  .catch((err) => {
    console.log(`ошибка:${err}`)
  })
}

//добавить карточку
postAddCard (item) {
  return fetch(`${this._address}/cards`, {
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
    console.log(`ошибка:${err}`)
  })
}

//Удалить карточку
deleteAddCard (item) {
  return fetch(`${this._address}/cards/${item}`, {
    method: 'DELETE',
    headers: {
      authorization: this._token
    }
  })
  .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
  .catch((err) => {
    console.log(`ошибка:${err}`)
  })
}

//Обновление аватара
addAvatar (item) {
  return fetch(`${this._address}/users/me/avatar`,{
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
    console.log(`ошибка:${err}`)
  })
}

addLike (item) {
  return fetch(`${this._address}/cards/likes/${item}`, {
    method:'PUT',
    headers: {
      authorization:this._token,
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
  .catch((err) => {
    console.log(`ошибка:${err}`)
  })
}

deleteLike (item) {
  return fetch(`${this._address}/cards/likes/${item}`, {
    method:'DELETE',
    headers: {
      authorization:this._token
    }
  })
  .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
  .catch((err) => {
    console.log(`ошибка:${err}`)
  })
}
}
