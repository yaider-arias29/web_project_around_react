import trashIcon from '../images/trash-icon-remove.svg';
import likeIcon from '../images/Vector.svg';

export default function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const { name, link, isLiked } = card;

  const cardLikeButtonClassName = `elements__icon ${
    isLiked ? 'elements__icon-active' : ''
  }`;

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <li className="elements__cards">
      <img
        src={trashIcon}
        className="elements__remove"
        alt="Eliminar"
        onClick={handleDeleteClick}
      />
      <img
        src={link}
        className="elements__image"
        alt={name}
        onClick={handleClick}
      />
      <div className="elements__description">
        <h2 className="elements__title">{name}</h2>
        <img
          src={likeIcon}
          className={cardLikeButtonClassName}
          alt="Me gusta"
          onClick={handleLikeClick}
        />
      </div>
    </li>
  );
}