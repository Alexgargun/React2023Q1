import React from 'react';
import SearchBar from '../components/SearchBar';
import CardList from '../components/CardList';

interface HomeProps {
  className?: string;
}
interface HomeState {
  searchInput: string;
}

class Home extends React.Component<HomeProps, HomeState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      searchInput: '',
    };
  }
  getSearchInput = (input: string) => {
    const capitalizedInput = input.charAt(0).toUpperCase() + input.slice(1);
    this.setState({ searchInput: capitalizedInput });
  };

  render() {
    return (
      <>
        <div className="header-title">
          <h2>Home Page</h2>
        </div>
        <SearchBar getSearchInput={this.getSearchInput} />
        <CardList searchInput={this.state.searchInput} />
      </>
    );
  }
}
export default Home;
