import { useEffect } from 'react';
import './Modal.css'

interface ModalProps {
  imageUrl: string;
  alt: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ imageUrl, alt, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <img className="modal-img" src={imageUrl} alt={alt} />
      </div>
    </div>
  );
};

export default Modal;