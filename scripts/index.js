const profileEditButton = document.querySelector('.profile__edit-button');
const profileEditButtonPopup = document.querySelector('.popup_profile');
const profileInputName = profileEditButtonPopup.querySelector('.popup__name');
const profileInputDescription = profileEditButtonPopup.querySelector('.popup__description');
const profileInputSaveButton = profileEditButtonPopup.querySelector('.popup__save-button');
const profilePopUpForm = profileEditButtonPopup.querySelector('.popup__user-info');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const cardViewPopup = document.querySelector('.popup_place_full-size');
const cardViewPopupName = cardViewPopup.querySelector('.popup__title');
const cardViewPopupPhoto = cardViewPopup.querySelector('.popup__photo');
const closeButtons = document.querySelectorAll('.popup__close-button');
const photoTamplate = document.getElementById('photo-Tamplate');
const photoGrid = document.querySelector('.elements');
const addPhotoCard = document.querySelector('.profile__add-button');
const profileAddButtonPopup = document.querySelector('.popup_place');
const placePopUpForm = profileAddButtonPopup.querySelector('.popup__user-info_place');
const placeinputName = profileAddButtonPopup.querySelector('.popup__name_place');
const placeInputLink = profileAddButtonPopup.querySelector('.popup__description_place');
const popupList = document.querySelectorAll('.popup');
const popupArray = Array.from(popupList);
const esc = 27;
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

const handleCardSubmit = (evt) => {
    evt.preventDefault();
    const name = placeinputName.value;
    const link = placeInputLink.value;
    const cardData =
    {
        name,
        link,
    };
    renderPhotoCard(createPhotoCard(cardData));
    closePopup(profileAddButtonPopup);
    evt.target.reset();

};
const openPopup = (popup) => {
    popup.classList.add('popup_opened');
};
const closePopup = (popup) => {
    popup.classList.remove('popup_opened');
};
const renderPhotoCard = (photoCard) => {
    photoGrid.prepend(photoCard);
}
const handleProfileSubmit = (evt) => {
    evt.preventDefault();
    const name = profileInputName.value;
    const description = profileInputDescription.value;
    profileName.textContent = name;
    profileDescription.textContent = description;
    closePopup(profileEditButtonPopup);
};
const createPhotoCard = (photoData) => {
    const photoCard = photoTamplate.content
        .querySelector('.element')
        .cloneNode(true);
    const cardName = photoCard.querySelector('.element__name');
    const cardImage = photoCard.querySelector('.element__photo');
    cardName.textContent = photoData.name;
    cardImage.src = photoData.link;
    cardImage.alt = photoData.name;
    const deleteButton = photoCard.querySelector('.element__delete-button');
    const likeButton = photoCard.querySelector('.element__like-button');
    const handleDelete = () => {
        photoCard.remove();
    };
    const handleLike = () => {
        likeButton.classList.toggle('element__like-button_clicked');
    };
    cardImage.addEventListener('click', () => {
        openPopup(cardViewPopup);
        cardViewPopupName.textContent = cardName.textContent;
        cardViewPopupPhoto.src = cardImage.src;
        cardViewPopupPhoto.alt = cardName.textContent;
    });
    deleteButton.addEventListener('click', handleDelete);
    likeButton.addEventListener('click', handleLike);
    return photoCard;

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
initialCards.forEach((card) => {
    renderPhotoCard(createPhotoCard(card));
});
addPhotoCard.addEventListener('click', () => {
    openPopup(profileAddButtonPopup);
});
placePopUpForm.addEventListener('submit', handleCardSubmit);


popupArray.forEach((popup) => {
    popup.addEventListener('click', function (evt) {
        if (evt.target === evt.currentTarget) {
            closePopup(popup);
        }

        }); });


popupArray.forEach((popup) => {
            document.addEventListener('keydown', (evt) => {
              if (evt.keyCode === esc) { 
                closePopup(popup); 
              }
            });
          });