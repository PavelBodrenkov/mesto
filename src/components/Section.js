export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = containerSelector;
  }

  addItem(element, isAppend) {
    if(isAppend === true) {
      this._container.append(element);
    }else {
      this._container.prepend(element);
    }
  }

  renderItems(item) {
    item.forEach(item => {
      this._renderer(item)
    });
  }
}
