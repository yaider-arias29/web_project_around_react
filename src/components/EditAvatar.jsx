import Popup from './Popup.jsx';


export default function EditAvatar({ onClose }) {
  return (
    <Popup onClose={onClose}>
      <div className="popup__container">
        <form className="popup__form">
          <h3 className="popup__title">Cambiar foto de perfil</h3>
          <input
            type="url"
            className="popup__input popup__input_type_avatar-link"
            placeholder="Enlace a la imagen"
            id="input-avatar-link"
            name="avatar"
            required
          />
          <span className="popup__input-error input-avatar-link-error"></span>
          <button type="submit" className="popup__button">Guardar</button>
        </form>
      </div>
      </Popup>
  );
};
