import profileBtn from '../images/Vector_btn.png'
import addBtn from '../images/Vector_plus.png'
import { useState } from 'react'
import PopupWithForm from './PopupWithForm'
import ProfileForm from './ProfileForm'
import AddForm from './AddForm'
import AvatarForm from './AvatarForm'

export default function Main() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)

  const handleProfileClick = function () {
    setIsEditProfilePopupOpen(true)
  }
  const handleAddPlaceClick = function () {
    setIsAddPlacePopupOpen(true)
  }
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true)
  }
  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
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

        <div className="profile__content">
          <button
            className="button profile__button-avatar"
            onClick={handleEditAvatarClick}
          >
            <img className="profile__avatar" src=" " alt="Foto de Perfil" />
          </button>
          <div className="profile__info">
            <div className="profile__title-btn">
              <h1 className="profile__title" />
              <button
                className="button profile__btn-title"
                onClick={handleProfileClick}
              >
                <img src={profileBtn} alt="Botão de editar perfil" />
              </button>
            </div>
            <p className="profile__subtitle" />
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
        <ul className="elements__list" />
      </section>
    </main>
  )
}
