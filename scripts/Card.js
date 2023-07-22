import { openPopup, closePopup } from './index.js'; 

export const initialCards = [
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
export const photoGrid = document.querySelector('.elements');
const addPhotoCard = document.querySelector('.profile__add-button');
const profileAddButtonPopup = document.querySelector('.popup_place');
const placePopUpForm = profileAddButtonPopup.querySelector('.popup__user-info_place');
const placeinputName = profileAddButtonPopup.querySelector('.popup__name_place');
const placeInputLink = profileAddButtonPopup.querySelector('.popup__description_place');
const renderPhotoCard = (photoCard) => {
    photoGrid.prepend(photoCard);
}
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
const createPhotoCard = (cardData) => {
    const card = new Card(cardData.name, cardData.link);
    return card.generateCard();
};

addPhotoCard.addEventListener('click', () => {
    openPopup(profileAddButtonPopup);
});
placePopUpForm.addEventListener('submit', handleCardSubmit);

export class Card { 
    constructor(name, link) { 
      this._name = name; 
      this._link = link; 
      this._element = this._getTemplate(); 
    } 

    _getTemplate() { 
        return photoTamplate.content 
            .querySelector('.element') 
            .cloneNode(true); 
    } 
    generateCard () { 
        this._element.querySelector('.element__photo').src = this._link; 
        this._element.querySelector('.element__photo').alt = this._name; 
        this._element.querySelector('.element__name').textContent = this._name; 
        this._setEventListeners();  
        return this._element;   
    } 
    _handleLike = (e) => {
        e.target.classList.toggle('element__like-button_clicked'); 
    } 

    _handleDelete = (e) => {
        e.target.closest('.element').remove(); 
    }
    
    _handleOpenPopup = (e) => {
        const cardViewPopup = document.querySelector('.popup_place_full-size'); 
        const cardViewPopupName = cardViewPopup.querySelector('.popup__title');
        const cardViewPopupPhoto = cardViewPopup.querySelector('.popup__photo');
        openPopup(cardViewPopup);
        cardViewPopupName.textContent = this._name;
        cardViewPopupPhoto.src = this._link;
        cardViewPopupPhoto.alt = this._name;
    } 

    _setEventListeners() { 
        const cardImage = this._element.querySelector('.element__photo');
        const deleteButton = this._element.querySelector('.element__delete-button');
        const likeButton = this._element.querySelector('.element__like-button');
        likeButton .addEventListener('click', this._handleLike);
        deleteButton.addEventListener('click', this._handleDelete); 
        cardImage.addEventListener('click', this._handleOpenPopup); 
         };
} 
