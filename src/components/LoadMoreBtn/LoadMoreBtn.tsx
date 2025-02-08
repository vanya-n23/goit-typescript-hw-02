import './LoadMoreBtn.css'

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button className="load-btn" onClick={onClick}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;