import { useState, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

export default function EditProfile() {
  const { currentUser, handleUpdateUser } = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser.name || '');
  const [description, setDescription] = useState(currentUser.about || '');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdateUser({ name, about: description });
  };

  return (
    <form
      className="popup__form"
      name="profile-form"
      id="edit-profile-form"
      onSubmit={handleSubmit}
    >
      <h3 className="popup__title">Editar perfil</h3>
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_name"
          id="name-input"
          maxLength="40"
          minLength="2"
          name="name"
          placeholder="Nombre"
          required
          type="text"
          value={name}
          onChange={handleNameChange}
        />
        <span className="popup__error" id="name-input-error"></span>
      </label>
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_job"
          id="job-input"
          maxLength="200"
          minLength="2"
          name="job"
          placeholder="Acerca de mí"
          required
          type="text"
          value={description}
          onChange={handleDescriptionChange}
        />
        <span className="popup__error" id="job-input-error"></span>
      </label>
      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}