import Popup from './Popup.jsx';

export default function EditProfile() {
  return (
    <form
      className="popup__form"
      name="profile-form"
      id="edit-profile-form"
      noValidate
    >
      <h3 className="popup__title">Cambiar perfil</h3>
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
        />
        <span className="popup__error" id="job-input-error"></span>
      </label>
      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}