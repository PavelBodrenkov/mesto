export default class UserInfo {
    constructor ({selectorName, selectorProfession}) {

        this._name = selectorName
        this._job = selectorProfession
    }

    getUserInfo () {
        return {
            name: this._name.textContent,
            info: this._job.textContent
        }
    }

    setUserInfo({name, info}) {
        this._name.textContent = name;
        this._job.textContent = info;
    }
}
