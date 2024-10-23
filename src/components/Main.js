import profileBtn from '../images/Vector_btn.png'
import addBtn from '../images/Vector_plus.png'
import { useState, useEffect } from 'react'
import PopupWithForm from './PopupWithForm'
import ProfileForm from './ProfileForm'
import AddForm from './AddForm'
import AvatarForm from './AvatarForm'
import { api } from '../utils/api'
import Card from './Card'
import ImagePopup from './ImagePopup'

export default function Main() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [userInfo, setUserInfo] = useState({})
  const [cards, setCards] = useState([])
  const [imagePopupOpen, setImagePopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState()

  useEffect(() => {
    api.getUser().then(apiUserInfo => {
      setUserInfo(apiUserInfo)
    })
  }, [])
  console.log(userInfo)

  useEffect(() => {
    api.getInitialCards().then(apiInitalCards => {
      setCards(apiInitalCards)
    })
  }, [])

  const handleProfileClick = function () {
    setIsEditProfilePopupOpen(true)
  }
  const handleAddPlaceClick = function () {
    setIsAddPlacePopupOpen(true)
  }
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true)
  }

  const handleCardClick = selectedCardId => {
    console.log(selectedCardId, 'test')
    const selectedCardById = cards.find(card => card._id === selectedCardId)
    setSelectedCard(selectedCardById)
    console.log(selectedCardById, 'test 2')

    setImagePopupOpen(true)
  }

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setImagePopupOpen(false)
  }

  return (
    <main className="main container">
      <section className="profile">
        {isEditProfilePopupOpen && (
          <PopupWithForm
            name="editProfile"
            title="Editar Perfil"
            isOpen={isEditProfilePopupOpen}
            onClosePopup={closeAllPopups}
          >
            <ProfileForm />
          </PopupWithForm>
        )}

        {isAddPlacePopupOpen && (
          <PopupWithForm
            name="addPlace"
            title="Novo local"
            isOpen={isAddPlacePopupOpen}
            onClosePopup={closeAllPopups}
            buttonLabel="Criar"
          >
            <AddForm />
          </PopupWithForm>
        )}

        {isEditAvatarPopupOpen && (
          <PopupWithForm
            name="changeAvatar"
            title="Alterar a foto do perfil"
            isOpen={isEditAvatarPopupOpen}
            onClosePopup={closeAllPopups}
          >
            <AvatarForm />
          </PopupWithForm>
        )}

        {imagePopupOpen && (
          <ImagePopup
            srcImage={selectedCard.link}
            footerLabel={selectedCard.name}
            isOpen={imagePopupOpen}
            onClose={closeAllPopups}
          />
        )}

        <div className="profile__content">
          <button
            className="button profile__button-avatar"
            onClick={handleEditAvatarClick}
          >
            <img
              className="profile__avatar"
              src={userInfo.avatar}
              alt="Foto de Perfil"
            />
          </button>
          <div className="profile__info">
            <div className="profile__title-btn">
              <h1 className="profile__title">{userInfo.name}</h1>
              <button
                className="button profile__btn-title"
                onClick={handleProfileClick}
              >
                <img src={profileBtn} alt="Botão de editar perfil" />
              </button>
            </div>
            <p className="profile__subtitle">{userInfo.about}</p>
          </div>
          <button
            className="button profile__btn-add"
            onClick={handleAddPlaceClick}
          >
            <img src={addBtn} alt="Botão de adicionar" />
          </button>
        </div>
      </section>
      <section className="elements">
        <ul className="elements__list" id="elements__list">
          {cards.map(item => {
            const { link, name, likes, _id } = item
            return (
              <Card
                key={item._id}
                link={link}
                name={name}
                likes={likes}
                _id={_id}
                onCardClick={handleCardClick}
              />
            )
          })}
        </ul>
      </section>
    </main>
  )
}
