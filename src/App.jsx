import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

const API_KEY = "2w6R6USrMNGP0vmf6KIMROA0sIy4p5X_FBv1MM1j_IY";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [modalData, setModalData] = useState(null);

  const fetchImages = async () => {
    if (!searchQuery) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${searchQuery}&page=${page}&client_id=${API_KEY}&per_page=15`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch images.");
      }

      const data = await response.json();
      setImages((prev) => [...prev, ...data.results]);
      setTotalPages(Math.ceil(data.total / 15));
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [searchQuery, page]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const openModal = (image) => {
    setModalData(image);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={openModal} />
      {isLoading && <Loader />}
      {!isLoading && images.length > 0 && page < totalPages && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {modalData && <ImageModal image={modalData} onClose={closeModal} />}
    </div>
  );
};

export default App;