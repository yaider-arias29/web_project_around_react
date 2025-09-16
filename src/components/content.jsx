
import profileImage from '../images/Avatar.png';
import editIcon from '../images/Edit-Button.png';
import addIcon from '../images/Add-Button.png';
import trashIcon from '../images/trash-icon-remove.svg';
import ImagePopup from './ImagePopup.jsx';
import Card from './Card.jsx';
import NewCard from './NewCard.jsx';
import Popup from './Popup.jsx';
import EditProfile from './EditProfile.jsx';
import EditAvatar from './EditAvatar.jsx'
import { useState } from "react"; 
const cards = [
  {
    isLiked: false,
    _id: '5d1f0611d321eb4bdcd707dd',
    name: 'Yosemite Valley',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:10:57.741Z',
  },
  {
    isLiked: false,
    _id: '5d1f064ed321eb4bdcd707de',
    name: 'Lake Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:11:58.324Z',
  },
    {
      isLiked: false,
      _id: '5d1f064ed321eb4bdcd707df',
      name: "Montañas Calvas",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
    },
    {
      isLiked: false,
      _id: '5d1f064ed321eb4bdcd707dg',
      name: "Latemar",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
    },
    {
      isLiked: false,
      _id: '5d1f064ed321eb4bdcd707dh',
      name: "Parque Nacional de la Vanoise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
    },
    {
      isLiked: false,
      _id: '5d1f064ed321eb4bdcd707di',
      name: "Lago di Braies",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
    },
];

console.log(cards);

function Main() {
  const [open, setOpen] = useState(false)
  const [popup, setPopup] = useState(null);
  const editProfilePopup = { title: "Editar perfil", children: <EditProfile /> };
  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
  const editAvatar = { title: "Editar avatar", children: <EditAvatar />};

  function handleOpenPopup(popup) {
    setPopup(popup);
  }
  
  function handleClosePopup() {
    setPopup(null);
  }

  function handleCardClick(card) {
    setOpen(true);
  setPopup({
    children: <ImagePopup card={card} onClose={handleClosePopup} />,
  });
}

  return (
    <main className="content">
      <div className="profile">
        <div className="profile__image-container">
          <img className="profile__image" src={profileImage} alt="image-profile" />
          <div className="profile__image-overlay"
          onClick={() => handleOpenPopup(editAvatar)}></div> 
        </div>
        <div className="profile__info">
          <p className="profile__name">Jacques Cousteau</p>
          <p className="profile__ocupation">Explorador</p>
        </div>
        <button className="profile__edit"
        onClick={() => handleOpenPopup(editProfilePopup)}>
          <img className="profile__icon-edit" src={editIcon} alt="icon-edit" />
        </button>
        <button className="profile__add"
          aria-label="Add card"
          type="button"
        onClick={() => setPopup(newCardPopup)}
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
  />
))}
  </ul>
      <div className="elements"></div>
      <template className="elements__container" id="elements__container">
        <div className="elements__cards">
          <img src={trashIcon} className="elements__remove" alt="trash-icon" />
          <img className="elements__image" alt="" />
          <div className="elements__description">
            <p className="elements__title"></p>
            <div className="elements__icon"></div>
          </div>
        </div>
      </template>
      {popup && (
        <Popup 
    isOpened={open}
    onClose={handleClosePopup} 
    title={popup.title}
  >
    {popup.children}
  </Popup>
)}

    </main>
  );
}


export default Main;

