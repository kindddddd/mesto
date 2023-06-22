
function setInputValidState(config, input, errorElement) {
    input.classList.remove(config.inputErrorClass);
    errorElement.classList.add('popup__error_hidden');
    errorElement.textContent = '';
}

function setInputInvalidState(config, input, errorElement) {
    input.classList.add(config.inputErrorClass);
    errorElement.classList.add(config.errorClass);
    errorElement.classList.remove('popup__error_hidden');
    errorElement.textContent = input.validationMessage;

}

function checkInputValidity(config, input) {
    const errorElement = document.querySelector(`#error-${input.id}`);

 
    if (input.checkValidity()) {
        setInputValidState(config, input, errorElement);
    } else {
        setInputInvalidState(config, input, errorElement);
    }   
}

function disableButton({ inactiveButtonClass }, button) {
    button.setAttribute('disabled', '');
    button.classList.add(inactiveButtonClass);
}

function enableButton({ inactiveButtonClass }, button) {
    button.removeAttribute('disabled');
    button.classList.remove(inactiveButtonClass);
}

function toggleButtonValidity({ submitButtonSelector, ...rest }, form) {
    const submitButton = form.querySelector(submitButtonSelector);

    if (form.checkValidity()) {
        enableButton(rest, submitButton);
    } else {
        disableButton(rest, submitButton);
    }
}


function setSubmitListener(config, form) {
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        toggleButtonValidity(config, form);
    });
}

function enableValidation({ formSelector, inputSelector, ...rest}) {
    const form = document.querySelector(formSelector);
    
    setSubmitListener(rest, form);
    toggleButtonValidity(rest, form);

    const inputs = form.querySelectorAll(inputSelector);
    const inputsArray = Array.from(inputs);

    inputsArray.forEach(function (input) {
        input.addEventListener('input', () => {
            checkInputValidity(rest, input);
            toggleButtonValidity(rest, form);
        });
    });
}

enableValidation({
    formSelector: '.popup__user-info',
    inputSelector: '.popup__inputs',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_inactive',
    inputErrorClass: 'popup__inputs_invalid',
    errorClass: 'popup__error'
  }); 
  