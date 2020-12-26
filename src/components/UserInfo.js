export default class UserInfo {
    constructor ({SelectorName, SelectorProfession}) {
        
        this._name = SelectorName
        this._job = SelectorProfession
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