const profileEditButton = document.querySelector('.profile__edit-button');
const profileEditButtonPopup = document.querySelector('.popup');
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
function handleFormSubmit(evt) {
    evt.preventDefault();
    const name = profileInputName.value;
    const description = profileInputDescription.value;
    profileName.textContent = name;
    profileDescription.textContent = description;
    profileEditButtonPopup.classList.remove('popup_opened');
}

profileEditButton.addEventListener('click', () => {
    openPopup(profileEditButtonPopup);
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