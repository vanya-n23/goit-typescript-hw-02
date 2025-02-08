import Modal from "react-modal";
import "./ImageModal.css"

Modal.setAppElement("#root");

const ImageModal = ({ image, onClose }) => {
  return (
    <Modal 
      isOpen={true}
      onRequestClose={onClose}
      style={{
        overlay: { backgroundColor: "rgba(0, 0, 0, 0.8)" },
        content: { border: "none", padding: "0", top: "50%", left: "50%", transform: "translate(-50%, -50%)" },
      }}
    >
      <img className="modal-img" src={image.urls.regular} alt={image.alt_description} />
    </Modal>
  );
};

export default ImageModal;