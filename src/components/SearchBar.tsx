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
  private formRef = React.createRef<HTMLFormElement>();
  constructor(props: SearchBarProps, {}) {
    super(props);

    this.state = {
      value: '',
    };
  }

  componentDidMount(): void {
    const inputValue = localStorage.getItem('search');
    if (inputValue) {
      this.setState({ value: inputValue });
    }
  }

  componentDidUpdate(
    prevProps: Readonly<SearchBarProps>,
    prevState: Readonly<SearchBarState>
  ): void {
    if (prevState.value !== this.state.value) {
      localStorage.setItem('search', this.state.value);
    }
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: event.target.value });
    console.log(event.target.value);
  };
  handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    this.props.getSearchInput(this.state.value);
  };

  handleClear = () => {
    this.setState({ value: '' });
    this.formRef.current?.reset();
  };

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
