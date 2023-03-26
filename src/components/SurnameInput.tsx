import React, { Component } from 'react';
import styles from '../styles/AddFormData.module.css';

type SurnameInputProps = {
  surnameRef: React.RefObject<HTMLInputElement>;
  error?: string;
};

class SurnameInput extends Component<SurnameInputProps> {
  input: React.RefObject<HTMLInputElement>;

  constructor(props: SurnameInputProps) {
    super(props);
    this.input = React.createRef();
  }

  render() {
    const { surnameRef, error } = this.props;
    return (
      <div>
        <input
          type="text"
          placeholder="Surname"
          className={styles.searchInput}
          ref={surnameRef}
          name="surname"
        />
        {error && <span className={styles.error}>{error}</span>}
      </div>
    );
  }
}

export default SurnameInput;
