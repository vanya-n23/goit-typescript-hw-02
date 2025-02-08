import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Modal from './components/Modal/Modal';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import { fetchImages, Image } from './services/api';
import './App.css'

const App: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [totalImages, setTotalImages] = useState<number>(0);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const { results, total } = await fetchImages(query, page);
        setImages((prev) => [...prev, ...results]);
        setTotalImages(total);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  const handleSearch = (newQuery: string) => {
    if (query === newQuery) return;
    setQuery(newQuery);
    setImages([]);
    setPage(1);
    setTotalImages(0);
  };

  return (
    <div className='container'>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      {loading && <Loader />}
      <ImageGallery images={images} onImageClick={setSelectedImage} />
      {images.length < totalImages && !loading && <LoadMoreBtn onClick={() => setPage((prev) => prev + 1)} />}
      {selectedImage && <Modal imageUrl={selectedImage} alt="Selected" onClose={() => setSelectedImage(null)} />}
    </div>
  );
};

export default App;