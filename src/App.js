import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { useState } from 'react'

import closeBtn from './images/close_icon.svg'
import PopupWithForm from './components/PopupWithForm'

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Main />
        <Footer />
        <PopupWithForm
          name="popup__form"
          title="Editar Perfil"
          isOpen={isEditProfilePopupOpen}
        >
          <div className="popup__input-container">
            <div className="popup__control popup__size">
              <input
                id="name"
                className="popup__input-box popup__input-box-name"
                type="text"
                name="name"
                minLength={2}
                maxLength={40}
                required=""
              />
              <span className="popup__error" />
            </div>
            <div className="popup__control">
              <input
                id="job"
                className="popup__input-box popup__input-box-job"
                type="text"
                name="job"
                minLength={2}
                maxLength={200}
                required=""
              />
              <span className="popup__error" />
            </div>
          </div>
        </PopupWithForm>
        <PopupWithForm name="popupAdd__form" title="Novo local" isOpen={false}>
          <div className="popupAdd__input-container">
            <div className="popupAdd__control popupAdd__size">
              <input
                id="title"
                className="popupAdd__input-box popupAdd__input-box-title"
                type="text"
                name="title"
                placeholder="Título"
                minLength={2}
                maxLength={30}
                required=""
              />
              <span className="popupAdd__error" />
            </div>
            <div className="popupAdd__control">
              <input
                id="link"
                className="popupAdd__input-box popupAdd__input-box-link"
                type="url"
                name="link"
                placeholder="Link da imagem"
                minLength={15}
                required=""
              />
              <span className="popupAdd__error" />
            </div>
          </div>
        </PopupWithForm>
        {/* <div className="popup">
          <form className="popup__form" name="editProfile">
            <button type="button" className="popup__close-btn">
              <img
                className="popup__close-btn-icon"
                src={closeBtn}
                alt="botão de fechar janela"
              />
            </button>
            <h2 className="popup__title">Editar Perfil</h2>
            
            <button
              type="submit"
              className="popup__save-btn popup__button-disabled"
            >
              Salvar
            </button>
          </form>
        </div>
         */}
        <div className="popup popupImg">
          <div className="popupImg-container">
            <button type="button" className="popup__close-btn">
              <img
                className="popupImg-close-btn-icon"
                src={closeBtn}
                alt="botão de fechar janela"
              />
            </button>
            <img className="popupImg-modal" src=" " alt="" />
            <p className="popupImg-footer" />
          </div>
        </div>

        {/* <div className="popupAdd">
          <form className="popupAdd__form" name="addPlace">
            <button type="button" className="popupAdd__close-btn">
              <img
                className="popupAdd__close-btn-icon"
                src={closeBtn}
                alt="botão de fechar janela"
              />
            </button>
            <h2 className="popupAdd__title">Novo local</h2>
            <div className="popupAdd__input-container">
              <div className="popupAdd__control popupAdd__size">
                <input
                  id="title"
                  className="popupAdd__input-box popupAdd__input-box-title"
                  type="text"
                  name="title"
                  placeholder="Título"
                  minLength={2}
                  maxLength={30}
                  required=""
                />
                <span className="popupAdd__error" />
              </div>
              <div className="popupAdd__control">
                <input
                  id="link"
                  className="popupAdd__input-box popupAdd__input-box-link"
                  type="url"
                  name="link"
                  placeholder="Link da imagem"
                  minLength={15}
                  required=""
                />
                <span className="popupAdd__error" />
              </div>
            </div>
            <button type="submit" className="popupAdd__save-btn">
              Criar
            </button>
          </form>
        </div> */}

        <div className="popup__delete">
          <form className="popup__delete-form" name="deleteConfirmation">
            <button type="button" className="popup__delete-close">
              <img
                className="popup__delete-close-btn-icon"
                src={closeBtn}
                alt="botão de fechar janela"
              />
            </button>
            <h2 className="popup__title">Tem certeza?</h2>
            <button
              type="submit"
              className="popup__delete-btn popup__delete-button-disabled"
            >
              Sim
            </button>
          </form>
        </div>

        <div className="popup__change-avatar">
          <form className="popup__change-avatar-form" name="changeAvatar">
            <img
              className="popup__change-avatar-btn-icon"
              src={closeBtn}
              alt="botão de fechar janela"
            />
            <h2 className="popup__change-avatar-title">
              Alterar a foto do perfil
            </h2>
            <div className="popup__change-avatar-control">
              <input
                id="link"
                className="popup__change-avatar-input-box popup__change-avatar-input-box-link"
                type="url"
                name="link"
                placeholder="Link da foto"
                minLength={15}
                required=""
              />
            </div>
            <button type="submit" className="popup__change-avatar-save-btn">
              Salvar
            </button>
          </form>
        </div>
      </div>
      <template id="elements__list" />
    </>
  )
}

export default App
