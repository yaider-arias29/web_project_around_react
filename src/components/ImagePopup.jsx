import Popup from './Popup.jsx'; 

export default function ImagePopup({ card, onClose }) {
  return (
    <Popup onClose={onClose} title={card.name}>
      <img className="elements__image" src={card.link} alt={card.name} />
    </Popup>
  );
}