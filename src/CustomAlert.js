import './styles/custom-alert.css';

class CustomAlert {
    constructor() {
      this.isVisible = false;
      this.title = '';
      this.message = '';
      this.buttons = [];
      this.modalContainer = null;
      this.alertContainer = null;
      this.closeOnClickModal = false;
      this.closeOnEscKeyPress = false;
    }
  
    showAlert(title, message, buttons, closeOnClickModal = false) {
      this.isVisible = true;
      this.title = title;
      this.message = message;
      this.buttons = buttons;
      this.closeOnClickModal = closeOnClickModal;
      this.closeOnEscKeyPress = closeOnEscKeyPress;
      this.renderAlert();
    }
  
    hideAlert() {
      this.isVisible = false;
      this.modalContainer.remove();
    }
  
    
  
    renderAlert() {
      this.modalContainer = document.createElement('div');
      this.modalContainer.className = 'modal-container';
      this.modalContainer.addEventListener('click', (event) => {
        if (event.target === this.modalContainer && this.closeOnClickModal) {
          this.hideAlert();
        }
      });
  
      this.alertContainer = document.createElement('div');
      this.alertContainer.className = 'alert-container';
  
      const buttonsContainer = document.createElement('div');
      buttonsContainer.className = 'buttons-container';
  
      const titleText = document.createElement('div');
      titleText.className = 'title-text';
      titleText.textContent = this.title;
  
      const messageText = document.createElement('div');
      messageText.className = 'message-text';
      messageText.textContent = this.message;
  
      this.alertContainer.appendChild(titleText);
      this.alertContainer.appendChild(messageText);
  
      this.buttons.forEach((button) => {
        const buttonElement = document.createElement('button');
        if (button && button.style && button.style === 'cancel') {
          buttonElement.className = 'cancel-button';
        } else { 
          buttonElement.className = 'alert-button';
        }
        buttonElement.textContent = button.text;
        buttonElement.addEventListener('click', () => {
          button.onPress && button.onPress();
          this.hideAlert();
        });
        
        buttonsContainer.appendChild(buttonElement);
        this.alertContainer.appendChild(buttonsContainer);
  
      });
  
      this.modalContainer.appendChild(this.alertContainer);
      document.body.appendChild(this.modalContainer);
  
  
      window.addEventListener('keydown', (event) => { 
        if (event.key === 'Escape' && this.closeOnEscKeyPress) {
          this.hideAlert();
        }
      });
    }
}
  
module.exports = CustomAlert;

  