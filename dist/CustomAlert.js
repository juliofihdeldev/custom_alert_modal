'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('./styles/custom-alert.css');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CustomAlert = function () {
  function CustomAlert() {
    _classCallCheck(this, CustomAlert);

    this.isVisible = false;
    this.title = '';
    this.message = '';
    this.buttons = [];
    this.modalContainer = null;
    this.alertContainer = null;
    this.closeOnClickModal = false;
    this.closeOnEscKeyPress = false;
  }

  _createClass(CustomAlert, [{
    key: 'showAlert',
    value: function showAlert(title, message, buttons) {
      var closeOnClickModal = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      this.isVisible = true;
      this.title = title;
      this.message = message;
      this.buttons = buttons;
      this.closeOnClickModal = closeOnClickModal;
      this.closeOnEscKeyPress = closeOnEscKeyPress;
      this.renderAlert();
    }
  }, {
    key: 'hideAlert',
    value: function hideAlert() {
      this.isVisible = false;
      this.modalContainer.remove();
    }
  }, {
    key: 'renderAlert',
    value: function renderAlert() {
      var _this = this;

      this.modalContainer = document.createElement('div');
      this.modalContainer.className = 'modal-container';
      this.modalContainer.addEventListener('click', function (event) {
        if (event.target === _this.modalContainer && _this.closeOnClickModal) {
          _this.hideAlert();
        }
      });

      this.alertContainer = document.createElement('div');
      this.alertContainer.className = 'alert-container';

      var buttonsContainer = document.createElement('div');
      buttonsContainer.className = 'buttons-container';

      var titleText = document.createElement('div');
      titleText.className = 'title-text';
      titleText.textContent = this.title;

      var messageText = document.createElement('div');
      messageText.className = 'message-text';
      messageText.textContent = this.message;

      this.alertContainer.appendChild(titleText);
      this.alertContainer.appendChild(messageText);

      this.buttons.forEach(function (button) {
        var buttonElement = document.createElement('button');
        if (button && button.style && button.style === 'cancel') {
          buttonElement.className = 'cancel-button';
        } else {
          buttonElement.className = 'alert-button';
        }
        buttonElement.textContent = button.text;
        buttonElement.addEventListener('click', function () {
          button.onPress && button.onPress();
          _this.hideAlert();
        });

        buttonsContainer.appendChild(buttonElement);
        _this.alertContainer.appendChild(buttonsContainer);
      });

      this.modalContainer.appendChild(this.alertContainer);
      document.body.appendChild(this.modalContainer);

      window.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && _this.closeOnEscKeyPress) {
          _this.hideAlert();
        }
      });
    }
  }]);

  return CustomAlert;
}();

module.exports = CustomAlert;