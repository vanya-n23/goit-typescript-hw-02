import { Image } from '../../services/api';
import './ImageGallery.css'

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (url: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  return (
    <ul className="list-image">
      {images.map(({ id, urls, alt_description }) => (
        <li className='item-img' key={id} onClick={() => onImageClick(urls.regular)}>
          <img src={urls.small} alt={alt_description} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;