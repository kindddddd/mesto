
function setInputValidState(config, input, errorElement) { 
    input.classList.remove(config.inputErrorClass); 
    errorElement.textContent = ''; 
} 
 
function setInputInvalidState(config, input, errorElement) { 
    input.classList.add(config.inputErrorClass); 
    errorElement.classList.add(config.errorClass); 
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
 
function toggleButtonValidity(config, form) { 
    const submitButton = form.querySelector(config.submitButtonSelector); 
  
    if (form.checkValidity()) { 
        enableButton(config, submitButton); 
    } else { 
        disableButton(config, submitButton); 
    } 
} 
 
 
function setSubmitListener(config, form){ 
    form.addEventListener('submit', function (evt) { 
        evt.preventDefault(); 
        toggleButtonValidity(config, form); 
    }); 
  
} 
 
function enableValidation({ formSelector, inputSelector, ...rest}) { 
    const forms = document.querySelectorAll(formSelector); 
    const formsArray = Array.from(forms); 
  
    formsArray.forEach(function (form) { 
        setSubmitListener(rest, form); 
        toggleButtonValidity(rest, form);    
    });    
  
    const inputs = document.querySelectorAll(inputSelector); 
    const inputsArray = Array.from(inputs); 
  
    inputsArray.forEach(function (input) { 
        input.addEventListener('input', () => { 
            checkInputValidity(rest, input); 
            formsArray.forEach(function (form) { 
                toggleButtonValidity(rest, form); 
            });   
        }); 
    }); 
}; 
enableValidation({ 
    formSelector: '.popup__user-info', 
    inputSelector: '.popup__inputs', 
    submitButtonSelector: '.popup__save-button', 
    inactiveButtonClass: 'popup__save-button_inactive', 
    inputErrorClass: 'popup__inputs_invalid', 
    errorClass: 'popup__error-span_error' 
}); 