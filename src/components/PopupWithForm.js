import closeBtn from '../images/close_icon.svg'

export default function PopupWithForm({ name, title, children, isOpen }) {
  return (
    <div className={`popup ${isOpen ? 'popup__opened' : ''}`}>
      <form className={{ name }} name="editProfile">
        <button type="button" className="popup__close-btn">
          <img
            className="popup__close-btn-icon"
            src={closeBtn}
            alt="botão de fechar janela"
          />
        </button>
        <h2 className="popup__title">{title}</h2>
        {children}
        <button
          type="submit"
          className="popup__save-btn popup__button-disabled"
        >
          Salvar
        </button>
      </form>
    </div>
  )
}
