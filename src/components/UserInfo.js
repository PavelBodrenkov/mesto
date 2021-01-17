export default class UserInfo {
    constructor (name, job) {
        this._name = name
        this._job = job
        // this._avatar = avatar
        this._id


    }

    getUserInfo () {
        return {
            name: this._name.textContent,
            info: this._job.textContent,
            id: this._id,

        }
    }

    setData({name, info}) {
      this._name.textContent = name;
      this._job.textContent = info;
    }

    setUserInfo(name, info, _id) {
        this._name.textContent = name;
        this._job.textContent = info;
        // this._avatar.src = avatar;
        this._id = _id;
    }
}
