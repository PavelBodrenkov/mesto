(()=>{"use strict";var e=document.querySelector(".popup_type_edit"),t=document.querySelector(".popup_add_type-photo"),n=(document.querySelector(".button_type_close"),document.querySelector(".button_type_close-photo"),document.querySelector(".button_type_edit")),o=document.querySelector(".profile__name"),r=document.querySelector(".profile__subtitle"),i=document.querySelector(".popup__data_type_name"),u=document.querySelector(".popup__data_type_job"),a=document.querySelector(".button_type_add-card"),c=document.querySelector(".form_type_photo"),l=document.querySelector(".form_type_edit"),s=(document.querySelector(".popup__data_type_location"),document.querySelector(".popup__data_type_link"),document.querySelector(".popup_type_photo"),document.querySelector(".button_type_big-close"),document.querySelector(".button_type_save-edit")),p=document.querySelector(".elements__content"),f=document.querySelector(".popup_type_photo"),d=document.querySelector(".popup__big-photo"),y=document.querySelector(".popup__big-title"),_=document.querySelector(".button_type_save-add");function v(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}document.querySelector(".element__photo"),document.querySelector(".element__subtitle");var h=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=t}var t,n;return t=e,(n=[{key:"open",value:function(){var e=this;this._popupSelector.classList.add("popup_opened"),document.addEventListener("keydown",(function(t){e._handleEscClose(t)})),document.addEventListener("click",(function(t){e._closeByOverlayClick(t)}))}},{key:"close",value:function(){this._popupSelector.classList.remove("popup_opened")}},{key:"_handleEscClose",value:function(e){27===e.keyCode&&this.close()}},{key:"_closeByOverlayClick",value:function(e){(e.target.classList.contains("popup_opened")||e.target.classList.contains("button_type_close"))&&this.close()}},{key:"setEventListeners",value:function(){var e=this;document.removeEventListener("keydown",(function(t){e._handleEscClose(t)})),document.removeEventListener("click",(function(t){e._closeByOverlayClick(t)}))}}])&&v(t.prototype,n),e}();function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function k(e,t,n){return(k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(u,e);var t,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(o);if(r){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._name=e.name,n._link=e.link,n}return t=u,(n=[{key:"open",value:function(){k(w(u.prototype),"open",this).call(this),d.src=this._link,y.textContent=this._name,d.alt="изображение `${this._name}`"}}])&&b(t.prototype,n),u}(h);function C(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var q=function(){function e(t,n,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=t,this._renderer=n,this._container=o}var t,n;return t=e,(n=[{key:"addItem",value:function(e,t){!0===t?this._container.append(e):this._container.prepend(e)}},{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}}])&&C(t.prototype,n),e}();function L(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var O=function(){function e(t,n){var o=t.data,r=t.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=o.name,this._link=o.link,this._cardSelector=n,this._handleCardClick=r}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._setEventListeners(),this._element.querySelector(".element__subtitle").textContent=this._name,this._element.querySelector(".element__photo").src=this._link,this._element}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".button_type_delete").addEventListener("click",(function(){e._deliteCard()})),this._element.querySelector(".button_type_like").addEventListener("click",(function(){e._hendleAddLike()})),this._element.querySelector(".element__photo").addEventListener("click",(function(){e._handleCardClick()}))}},{key:"_deliteCard",value:function(){this._element.remove()}},{key:"_hendleAddLike",value:function(e){this._element.querySelector(".button_type_like").classList.toggle("button_type_like_active")}}])&&L(t.prototype,n),e}();function I(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var j=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=n,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inputInvalidClass=t.inputInvalidClass,this._buttonInvalidClass=t.buttonInvalidClass,this._disableButtonInvalid=t.disableButtonInvalid}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=t.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputInvalidClass),n.textContent=e.validationMessage}},{key:"_hideInputError",value:function(e,t){var n=t.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputInvalidClass),n.textContent=""}},{key:"_isValid",value:function(e,t){e.validity.valid?this._hideInputError(e,t):this._showInputError(e,t)}},{key:"_hasInvalidInput",value:function(e){return e.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(e,t){this._hasInvalidInput(e)?this.disabledButton(t):this.removeDisabledButton(t)}},{key:"disabledButton",value:function(e){e.classList.add(this._disableButtonInvalid),e.disabled=!0}},{key:"removeDisabledButton",value:function(e){e.classList.remove(this._disableButtonInvalid),e.disabled=!1}},{key:"resetForm",value:function(e){var t=this;e.reset(),Array.from(e.querySelectorAll(this._inputSelector)).forEach((function(n){t._hideInputError(n,e)}))}},{key:"_setEventListeners",value:function(e,t){var n=this,o=Array.from(e.querySelectorAll(this._inputSelector));this._toggleButtonState(o,t),o.forEach((function(r){r.addEventListener("input",(function(){n._isValid(r,e),n._toggleButtonState(o,t)}))}))}},{key:"enableValidation",value:function(){var e=this,t=document.querySelector(this._formSelector),n=t.querySelector(this._submitButtonSelector);t.addEventListener("submit",(function(t){t.preventDefault(),e.disabledButton(n)})),this._setEventListeners(t,n)}}])&&I(t.prototype,n),e}();function P(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var B=function(){function e(t){var n=t.SelectorName,o=t.SelectorProfession;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=n,this._job=o}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,info:this._job.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.info;this._name.textContent=t,this._job.textContent=n}}])&&P(t.prototype,n),e}();function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function D(e,t,n){return(D="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=A(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function V(e,t){return!t||"object"!==x(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(u,e);var t,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=A(o);if(r){var n=A(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return V(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._popupSelector=e,n._handleFormSubmit=t,n._formElement=n._popupSelector.querySelector(".form"),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=Array.from(this._formElement.querySelectorAll(".popup__data")),this._inputValues={},this._inputList.forEach((function(t){e._inputValues[t.name]=t.value})),this._inputValues}},{key:"setEventListeners",value:function(){var e=this;D(A(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues()),e.close()}))}},{key:"close",value:function(){D(A(u.prototype),"close",this).call(this),this._formElement.reset()}}])&&R(t.prototype,n),u}(h),U=new q([{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],(function(e){var t=new O({data:e,handleCardClick:function(){new E(e,f).open(),console.log("handle click card")}},"#element-add").generateCard();U.addItem(t,!0)}),p);U.renderItems();var N=new h(e);N.setEventListeners(),n.addEventListener("click",(function(){G.removeDisabledButton(s),G.resetForm(l);var e=M.getUserInfo();i.value=e.name,u.value=e.info,N.open()}));var z=new h(t);a.addEventListener("click",(function(){H.disabledButton(_),H.resetForm(c),z.setEventListeners(),z.open()}));var M=new B({SelectorName:o,SelectorProfession:r});new F(e,(function(e){console.log(e),M.setUserInfo({name:e.name,info:e.profession})})).setEventListeners(),new F(t,(function(e){console.log(e);var t=new O({data:{name:e.point,link:e.photo},handleCardClick:function(){new E({name:e.point,link:e.photo},f).open()}},"#element-add").generateCard();U.addItem(t,!1)})).setEventListeners();var $={inputSelector:".popup__data",submitButtonSelector:".button",inputInvalidClass:"popup__data_type_error",buttonInvalidClass:"button_type_inactive",disableButtonInvalid:"button_type_inactive"},G=new j($,".form_type_edit");G.enableValidation();var H=new j($,".form_type_photo");H.enableValidation()})();