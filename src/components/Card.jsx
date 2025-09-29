import trashIcon from '../images/trash-icon-remove.svg';
import likeIcon from '../images/Vector.svg';

export default function Card({ card, onCardClick, handleDeleteClick }) {
    
  
    return (
    <li className="elements__cards">
      <img src={trashIcon} className="elements__remove" alt="trash-icon" 
       onClick={onclose} />
      <img
        src={card.link}
        className="elements__image"
        alt={card.name}
        onClick={() => {
            onCardClick(card)

        }}
      />
     
    
      <div className="elements__description">
        <h2 className="elements__title">{card.name}</h2>
        <img src={likeIcon} className="elements__icon" alt="elements-icon" />
      </div>
    </li>
  );

}