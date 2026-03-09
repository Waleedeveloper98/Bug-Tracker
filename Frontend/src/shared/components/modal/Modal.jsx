import "./modal.scss";

const Modal = ({ children }) => {
  return (
    <div className="modal">
      <div className="modal__overlay"></div>

      <div className="modal__content">
        {children}
      </div>
    </div>
  );
};

export default Modal;