const profileEditButton = document.querySelector('.profile__edit-button');
const profileEditButtonPopup = document.querySelector('.popup_profile');
const profileCloseButton = profileEditButtonPopup.querySelector('.popup__close-button');
const profileInputName = profileEditButtonPopup.querySelector('.popup__name');
const profileInputDescription = profileEditButtonPopup.querySelector('.popup__description');
const profileInputSaveButton = profileEditButtonPopup.querySelector('.popup__save-button');
const profilePopUpForm = profileEditButtonPopup.querySelector('.popup__user-info');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const openPopup = (popup) => {
    popup.classList.add('popup_opened');
};
const closePopup = (popup) => {
    popup.classList.remove('popup_opened');
};
function handleFormSubmit(evt) {
    evt.preventDefault();
    const name = profileInputName.value;
    const description = profileInputDescription.value;
    profileName.textContent = name;
    profileDescription.textContent = description;
    profileEditButtonPopup.classList.remove('popup_opened');
};

profileEditButton.addEventListener('click', () => {
    openPopup(profileEditButtonPopup);
    profileInputName.value = profileName.textContent;
    profileInputDescription.value = profileDescription.textContent;
});

profileCloseButton.addEventListener('click', () => {
    closePopup(profileEditButtonPopup);
});

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

const photoTamplate = document.getElementById('photo-Tamplate');
const photoGrid = document.querySelector('.elements');
const addPhotoCard = document.querySelector('.profile__add-button');
const createPhotoCard = (photoData) => {
    const photoCard = photoTamplate.content
        .querySelector('.element')
        .cloneNode(true);
    const cardName = photoCard.querySelector('.element__name');
    const cardImage = photoCard.querySelector('.element__photo');
    cardName.innerHTML = photoData.name;
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

    const cardViewPopup = document.querySelector('.popup_place_full-size');
    const cardViewPopupName = cardViewPopup.querySelector('.popup__title');
    const cardViewPopupPhoto = cardViewPopup.querySelector('.popup__photo');
    const cardViewCloseButton = cardViewPopup.querySelector('.popup__close-button');


    cardViewCloseButton.addEventListener('click', () => {
        cardViewPopup.classList.remove('popup_opened');
    });
    cardImage.addEventListener('click', () => {
        openPopup(cardViewPopup);
        cardViewPopupName.textContent = cardName.textContent;
        cardViewPopupPhoto.src = cardImage.src;
    });

    deleteButton.addEventListener('click', handleDelete);
    likeButton.addEventListener('click', handleLike);
    return photoCard;

};

const renderPhotoCard = (photoCard) => {
    photoGrid.prepend(photoCard);
}

initialCards.forEach((card) => {
    renderPhotoCard(createPhotoCard(card));
});

const profileAddButtonPopup = document.querySelector('.popup_place');

addPhotoCard.addEventListener('click', () => {
    openPopup(profileAddButtonPopup);
})

const placeCloseButton = profileAddButtonPopup.querySelector('.popup__close-button');

placeCloseButton.addEventListener('click', () => {
    profileAddButtonPopup.classList.remove('popup_opened');

})

const handleCardSubmit = (evt) => {
    evt.preventDefault();
    const placeinputName = profileAddButtonPopup.querySelector('.popup__name_place');
    const placeInputLink = profileAddButtonPopup.querySelector('.popup__description_place');
    const name = placeinputName.value;
    const link = placeInputLink.value;
    const CardData =
    {
        name,
        link,
    };

    renderPhotoCard(createPhotoCard(CardData));
    closePopup(profileAddButtonPopup);
}


const placePopUpForm = profileAddButtonPopup.querySelector('.popup__user-info_place');
placePopUpForm.addEventListener('submit', handleCardSubmit);

