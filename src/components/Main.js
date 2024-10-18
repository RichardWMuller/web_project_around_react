import profileBtn from '../images/Vector_btn.png'
import addBtn from '../images/Vector_plus.png'
import { useState } from 'react'

export default function Main() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState()
  const handleProfileClick = function () {
    setIsEditProfilePopupOpen(true)
  }

  return (
    <main className="main container">
      <section className="profile">
        <div className="profile__content">
          <button className="button profile__button-avatar">
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
          <button className="button profile__btn-add">
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
