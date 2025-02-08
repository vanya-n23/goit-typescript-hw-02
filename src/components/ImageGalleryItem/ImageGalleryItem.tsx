import './ImageGalleryItem.css'

interface ImageGalleryItemProps {
  smallImage: string;
  largeImage: string;
  alt: string;
  onClick: (largeImageURL: string) => void;
}

const ImageGalleryItem: React.FC<ImageGalleryItemProps> = ({ smallImage, largeImage, alt, onClick }) => {
  return (
    <li className="image-card" onClick={() => onClick(largeImage)}>
      <img src={smallImage} alt={alt} />
    </li>
  );
};

export default ImageGalleryItem;