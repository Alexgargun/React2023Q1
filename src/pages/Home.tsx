import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import CardList from '../components/CardList';

function Home() {
  const [searchInput, setSearchInput] = useState<string>(localStorage.getItem('search') || '');

  const getSearchInput = (input: string) => {
    setSearchInput(input);
  };

  console.log('searchInput', searchInput);

  return (
    <>
      <div className="header-title">
        <h2>Home Page</h2>
      </div>
      <SearchBar getSearchInput={getSearchInput} />
      <CardList searchInput={searchInput} />
    </>
  );
}
export default Home;
