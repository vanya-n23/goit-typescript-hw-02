import "./LoadMoreBtn.css"

const LoadMoreBtn = ({ onClick }) => {
  return (
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      <button className="load-btn" onClick={onClick}>Load more</button>
    </div>
  );
};

export default LoadMoreBtn;