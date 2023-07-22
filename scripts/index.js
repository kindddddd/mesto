import { Card, initialCards, photoGrid} from './Card.js'; 
import { FormValidator, formsArray, validationConfig} from './FormValidator.js'; 
const profileEditButton = document.querySelector('.profile__edit-button');
const profileEditButtonPopup = document.querySelector('.popup_profile');
const profileInputName = profileEditButtonPopup.querySelector('.popup__name');
const profileInputDescription = profileEditButtonPopup.querySelector('.popup__description');
const profileInputSaveButton = profileEditButtonPopup.querySelector('.popup__save-button');
const profilePopUpForm = profileEditButtonPopup.querySelector('.popup__user-info');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const closeButtons = document.querySelectorAll('.popup__close-button');
const popupList = document.querySelectorAll('.popup');
const popupArray = Array.from(popupList);
const esc = 27;
const closeByEsc = (evt) => {   
    const openedPopup = document.querySelector('.popup_opened');
    if (evt.keyCode === esc && openedPopup) {    
        closePopup(openedPopup);    
    }   
};        
export const openPopup = (popup) => { 
    popup.classList.add('popup_opened'); 
    document.addEventListener('keydown', closeByEsc);   
  };
export const closePopup = (popup) => { 
    popup.classList.remove('popup_opened'); 
    document.removeEventListener('keydown', closeByEsc);   
  };

const handleProfileSubmit = (evt) => {
    evt.preventDefault();
    const name = profileInputName.value;
    const description = profileInputDescription.value;
    profileName.textContent = name;
    profileDescription.textContent = description;
    closePopup(profileEditButtonPopup);
};

profileEditButton.addEventListener('click', () => {
    openPopup(profileEditButtonPopup);
    profileInputName.value = profileName.textContent;
    profileInputDescription.value = profileDescription.textContent;
});
profilePopUpForm.addEventListener('submit', handleProfileSubmit);
closeButtons.forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popup));
});

popupArray.forEach((popup) => {
    popup.addEventListener('click', function (evt) {
        if (evt.target === evt.currentTarget) {
            closePopup(popup);
        }

        }); });

   
initialCards.forEach((item) => { 
            const card = new Card(item.name, item.link); 
            const cardElement = card.generateCard(); 
            photoGrid.prepend(cardElement); 
        });  
        
formsArray.forEach(form => {
            const formValidator = new FormValidator(validationConfig, form);
            formValidator.enableValidation();
        });       