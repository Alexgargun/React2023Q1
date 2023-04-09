import React, { useEffect, useState } from 'react';
import styles from '../styles/SearchBar.module.css';
import { AiOutlineSearch } from 'react-icons/ai';

interface SearchBarProps {
  getSearchInput: (input: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ getSearchInput }) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const savedSearchTerm = localStorage.getItem('search');
    if (savedSearchTerm) {
      setSearchTerm(savedSearchTerm);
      getSearchInput(savedSearchTerm);
    }
  }, [getSearchInput]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    getSearchInput(event.target.value);
    localStorage.setItem('search', event.target.value);
  };

  return (
    <section className={styles.formSection}>
      <div className="container">
        <form className={styles.formContainer}>
          <label className={styles.searchLabel}>
            <input
              className={styles.searchInput}
              type="search"
              placeholder={'search'}
              onChange={handleInputChange}
              value={searchTerm}
            />
          </label>
          <button type="submit">
            <AiOutlineSearch className={styles.searchIcon} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default SearchBar;
