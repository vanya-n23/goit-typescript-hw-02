import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./SearchBar.css"

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim() === "") {
      toast.error("Please enter a search term!");
      return;
    }

    onSubmit(query);
    setQuery("");
  };

  return (
    <header className="Headder">
      <Toaster />
      <form className="form-headder" onSubmit={handleSubmit}>
        <input 
          className="input-search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
        <button className="bnt-search" type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;