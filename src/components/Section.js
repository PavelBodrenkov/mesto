export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = containerSelector;
  }

  addItem(element, isPrepened) {
    if(isPrepened === true) {
      this._container.append(element);
    }else {
      this._container.prepend(element);
    }
  }

  // renderItems(items) {
  //   items.forEach(element => {
  //     this._renderer(element)
  //   });

  // }

  renderItems(item) {
    if(Array.isArray(item) === true) {
      item.forEach(item => this._renderer(item))
  }else {
    this._renderer(item)
  }
}
}
