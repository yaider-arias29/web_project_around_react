export default function Popup({ isOpened, onClose, title, children }) {
  return (
    <div className={`popup ${isOpened ? 'popup_opened' : ''}`}>
      <div className={`popup__content ${!title ? ".popup__content_content_image" : ""}`}>
        <button
          aria-label="Close modal"
          className="popup__closed"
          type="button"
          onClick={onClose} 
        />
        {title && <h3 className="popup__title">{title}</h3>}
        {children}
      </div>
    </div>
  );
}