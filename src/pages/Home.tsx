import React from 'react';
import SearchBar from '../components/SearchBar';
import CardList from '../components/CardList';
// import capitalizeWords from 'utils/constants';

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
      searchInput: localStorage.getItem('search') || '',
    };
  }

  getSearchInput = (input: string) => {
    this.setState({ searchInput: input });
  };

  render() {
    console.log(this.state.searchInput);
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
