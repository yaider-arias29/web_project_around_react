import { useContext } from 'react';
import profileImage from '../images/Avatar.png';
import editIcon from '../images/Edit-Button.png';
import addIcon from '../images/Add-Button.png';
import ImagePopup from './ImagePopup.jsx';
import Card from './Card.jsx';
import NewCard from './NewCard.jsx';
import Popup from './Popup.jsx';
import EditProfile from './EditProfile.jsx';
import EditAvatar from './EditAvatar.jsx';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Main({
  cards,
  popup,
  onOpenPopup,
  onClosePopup,
  onCardLike,
  onCardDelete,
  onAddPlaceSubmit,
}) {
  const { currentUser } = useContext(CurrentUserContext);

  function handleCardClick(card) {
    onOpenPopup({ children: <ImagePopup card={card} /> });
  }

  return (
    <main className="content">
      <div className="profile">
        <div className="profile__image-container">
          <img
            className="profile__image"
            src={currentUser.avatar || profileImage}
            alt="Foto de perfil"
          />
          <div
            className="profile__image-overlay"
            onClick={() => onOpenPopup({ children: <EditAvatar /> })}
          ></div>
        </div>
        <div className="profile__info">
          <p className="profile__name">{currentUser.name}</p>
          <p className="profile__ocupation">{currentUser.about}</p>
        </div>
        <button
          className="profile__edit"
          onClick={() => onOpenPopup({ children: <EditProfile /> })}
        >
          <img className="profile__icon-edit" src={editIcon} alt="icon-edit" />
        </button>
        <button
          className="profile__add"
          aria-label="Add card"
          type="button"
          onClick={() =>
            onOpenPopup({
              children: <NewCard onAddPlaceSubmit={onAddPlaceSubmit} />,
            })
          }
        >
          <img className="profile__icon-add" src={addIcon} alt="icon-add" />
        </button>
      </div>

      <ul className="cards__list">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={handleCardClick}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
        ))}
      </ul>

      <div className="elements"></div>

      {popup && <Popup onClose={onClosePopup}>{popup.children}</Popup>}
    </main>
  );
}

export default Main;