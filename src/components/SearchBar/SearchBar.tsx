import { useState, FormEvent } from 'react';
import './SearchBar.css'

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim() === '') return;
    onSubmit(query);
    setQuery('');
  };

  return (
    <header className="Headder">
      <form className='form-headder' onSubmit={handleSubmit}>
        <input
          className='input-search'
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search images..."
        />
        <button className='bnt-search' type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;