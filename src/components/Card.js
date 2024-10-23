export default function Card({ link, name, likes, _id, onCardClick }) {
  return (
    <li className="elements__list-img">
      <div
        className="elements__list-img-wrapper"
        onClick={() => onCardClick(_id)}
      >
        <img src={link} alt={name} className="elements__item" />
      </div>
      <button className="button elements__btn-trh"></button>
      <div className="elements__description">
        <p className="elements__title">{name}</p>
        <div className="elements__heart-container">
          <button className="button elements__btn-hrt"></button>
          <span className="elements__btn-hrt-counter">{likes.length}</span>
        </div>
      </div>
    </li>
  )
}
