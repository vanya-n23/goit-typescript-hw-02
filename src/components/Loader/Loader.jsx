import { Circles } from "react-loader-spinner";
import "./Loader.css"

const Loader = () => {
  return (
    <div className="loader-overlay">
      <Circles color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default Loader;