import React, { Component } from 'react';
import styles from '../styles/SearchBar.module.css';
import { AiOutlineSearch } from 'react-icons/ai';

interface SearchBarProps {
  getSearchInput: (input: string) => void;
}

interface SearchBarState {
  value: string;
}

class SearchBar extends Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);

    this.state = {
      value: localStorage.getItem('search') || '',
    };
  }

  getSearchInput = (input: string) => this.props.getSearchInput(input);

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const capitalizedInput = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
    this.getSearchInput(capitalizedInput || ''); // instant search
    this.setState({ value: capitalizedInput });
    localStorage.setItem('search', this.state.value);
  };
  handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // by clicking on search button / submitting form

    // this.props.getSearchInput(this.state.value);
  };

  // componentWillUnmount(): void {
  //   localStorage.setItem('search', this.state.value);
  // }

  render() {
    console.log(this.state.value);
    return (
      <section className={styles.formSection}>
        <div className="container">
          <form className={styles.formContainer} onSubmit={this.handleSubmit}>
            <label className={styles.searchLabel}>
              <input
                className={styles.searchInput}
                type="search"
                placeholder={'search'}
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <button type="submit">
              <AiOutlineSearch className={styles.searchIcon} />
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default SearchBar;
