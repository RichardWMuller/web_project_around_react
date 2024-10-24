import closeBtn from '../images/close_icon.svg'

export default function PopupWithForm({
  name,
  title,
  buttonLabel = 'Salvar',
  children,
  isOpen,
  onClosePopup
}) {
  return (
    <div className={`popup ${isOpen ? 'popup__opened' : ''}`}>
      <form className="popup__form" name={name}>
        <button
          type="button"
          className="popup__close-btn"
          onClick={onClosePopup}
        >
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
          {buttonLabel}
        </button>
      </form>
    </div>
  )
}