export default class UserInfo {
    constructor (name, job, avatar) {
        this._name = name
        this._job = job
        this._avatar = avatar
        this._id
    }

    getUserInfo () {
        return {
            name: this._name.textContent,
            info: this._job.textContent,
            avatar: this._avatar.src,
            id: this._id
        }
    }

    setUserInfo(name, info, avatar, _id) {
      this._name.textContent = name
      this._job.textContent = info
      this._avatar.src = avatar;
      this._avatar.alt = name
      this._id = _id;
    }
}
