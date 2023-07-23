
export class FormValidator {
    constructor(config, formElement) {
        this._config = config;
        this._formElement = formElement;
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
        const submitButton = this._formElement.querySelector(this._config.submitButtonSelector);
        if (this._formElement.checkValidity()) {
            this._enableButton(submitButton);
        } else {
            this._disableButton(submitButton);
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
        const inputsArray = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
        inputsArray.forEach(input => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input);
                this._toggleButtonValidity();
            });
        });
    }

    enableValidation() {
        this._setEventListeners();
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

