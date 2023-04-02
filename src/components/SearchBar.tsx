import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styles from '../styles/SearchBar.module.css';
import { AiOutlineSearch } from 'react-icons/ai';

interface SearchBarProps {
  getSearchInput: (input: string) => void;
}

type SearchFormData = {
  searchInput: string;
};

const SearchBar: React.FC<SearchBarProps> = ({ getSearchInput }) => {
  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchFormData>();

  const inputValue = watch('searchInput', '');

  useEffect(() => {
    localStorage.setItem('search', inputValue);
  }, [inputValue]);

  useEffect(() => {
    const searchInput = localStorage.getItem('search');
    if (searchInput) {
      getSearchInput(searchInput);
      setValue('searchInput', searchInput);
    }
  }, [getSearchInput, setValue]);

  const onSubmit = (data: SearchFormData) => {
    getSearchInput(data.searchInput || '');
  };

  return (
    <section className={styles.formSection}>
      <div className="container">
        <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
          <label className={styles.searchLabel}>
            <input
              className={styles.searchInput}
              type="search"
              placeholder={'search'}
              {...register('searchInput')}
            />
          </label>
          {errors.searchInput && <p>{errors.searchInput.message}</p>}
          <button type="submit">
            <AiOutlineSearch className={styles.searchIcon} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default SearchBar;
