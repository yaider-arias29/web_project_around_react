 export default function Card({ card, onCardClick }) {
    
  
    return (
    <li className="elements__cards">
      <img
        src={card.link}
        className="elements__image"
        alt={card.name}
        onClick={() => {
            console.log('¡Se hizo clic en la imagen!');
            onCardClick(card)

        }}
      />
     
    
      <div className="elements__description">
        <h2 className="elements__title">{card.name}</h2>
      </div>
    </li>
  );

}