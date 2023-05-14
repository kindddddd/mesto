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


const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const photoTemplate = document.getElementById('photo-Template');
const photoGrid = document.querySelector('.elements');

const createPhotoCard = (photoData) => {
    const photoCard = photoTemplate.content
        .querySelector('.element')
        .cloneNode(true);
    return photoCard;
};

const renderPhotoCard = (photoCard) => {
    photoGrid.prepend(photoCard);
}

initialCards.forEach((card) => {
    renderPhotoCard(createPhotoCard(card));
});