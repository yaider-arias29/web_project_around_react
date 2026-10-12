import { useRef, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

export default function EditAvatar() {
  const { handleUpdateAvatar } = useContext(CurrentUserContext);
  const avatarRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    handleUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <div className="popup__container">
      <form className="popup__form" name="avatar-form" onSubmit={handleSubmit}>
        <h3 className="popup__title">Cambiar foto de perfil</h3>
        <input
          type="url"
          className="popup__input popup__input_type_avatar-link"
          placeholder="Enlace a la imagen"
          id="input-avatar-link"
          name="avatar"
          required
          ref={avatarRef}
        />
        <span className="popup__input-error input-avatar-link-error"></span>
        <button type="submit" className="popup__button">Guardar</button>
      </form>
    </div>
  );
}
