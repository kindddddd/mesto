const profileEditButton = document.querySelector('.profile__edit-button');
const profileEditButtonPopup = document.querySelector('.popup');
const profileCloseButton = profileEditButtonPopup.querySelector('.popup__close-button');
const profileInputName = profileEditButtonPopup.querySelector('.popup__name');
const profileInputDescription = profileEditButtonPopup.querySelector('.popup__description');
const profileInputSaveButton = profileEditButtonPopup.querySelector('.popup__save-button');
const profilePopUpForm = profileEditButtonPopup.querySelector('.popup__user-info');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
function handleFormSubmit(evt) {
    evt.preventDefault();
    const name = profileInputName.value;
    const description = profileInputDescription.value;
    profileName.textContent = name;
    profileDescription.textContent = description;
    profileEditButtonPopup.classList.remove('popup_opened');
}

profileEditButton.addEventListener('click', () => {
    profileEditButtonPopup.classList.add('popup_opened');
    profileInputName.value = profileName.textContent;
    profileInputDescription.value = profileDescription.textContent;
})

profileCloseButton.addEventListener('click', () => {
    profileEditButtonPopup.classList.remove('popup_opened');

})

profilePopUpForm.addEventListener('submit', handleFormSubmit);


