
export class FormValidator {
    constructor(config, formElement) {
        this._config = config;
        this._formElement = formElement;
        this._inputsArray = Array.from(this._formElement.querySelectorAll(this._config.inputSelector)); 
        this._submitButton = this._formElement.querySelector(this._config.submitButtonSelector);

    }

    _setInputValidState(input, errorElement) {
        input.classList.remove(this._config.inputErrorClass);
        errorElement.textContent = '';
    }

    _setInputInvalidState(input, errorElement) {
        input.classList.add(this._config.inputErrorClass);
        errorElement.classList.add(this._config.errorClass);
        errorElement.textContent = input.validationMessage;
    }

    _checkInputValidity(input) {
        const errorElement = document.querySelector(`#error-${input.id}`);
        if (input.checkValidity()) {
            this._setInputValidState(input, errorElement);
        } else {
            this._setInputInvalidState(input, errorElement);
        }     
    }

    _toggleButtonValidity() {
        if (this._formElement.checkValidity()) {
            this._enableButton(this._submitButton);
        } else {
            this._disableButton(this._submitButton);
        }
    }

    _disableButton(button) {
        button.setAttribute('disabled', '');
        button.classList.add(this._config.inactiveButtonClass);
    }

    _enableButton(button) {
        button.removeAttribute('disabled');
        button.classList.remove(this._config.inactiveButtonClass);
    }

    _setEventListeners() { 
        this._inputsArray.forEach(input => { 
            input.addEventListener('input', () => { 
                this._checkInputValidity(input); 
                this._toggleButtonValidity();
                if(input.value === ''){
                    this._disableButton(this._submitButton);
                }
            }); 
        }); 
    } 
    

    enableValidation() {
        this._setEventListeners();
        this._toggleButtonValidity();
    }

    resetValidation() {
        this._inputsArray.forEach(input => {
            const errorElement = document.querySelector(`#error-${input.id}`);
            if(input.value === ''){
                this._disableButton(this._submitButton);
            } else {
                this._setInputValidState(input, errorElement);
            }
        });
        this._toggleButtonValidity();
    }
    
}


export const validationConfig = {
    formSelector: '.popup__user-info',
    inputSelector: '.popup__inputs',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_inactive',
    inputErrorClass: 'popup__inputs_invalid',
    errorClass: 'popup__error-span_error'
};


const formProfile = document.querySelector('.popup__user-info_profile'); 
const formPlace = document.querySelector('.popup__user-info_place'); 

export const formValidatorProfile = new FormValidator(validationConfig, formProfile);
export const formValidatorPlace = new FormValidator(validationConfig, formPlace);

