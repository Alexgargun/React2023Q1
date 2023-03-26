import React, { Component } from 'react';
import styles from '../styles/AddFormData.module.css';

type NameInputProps = {
  inputRef: React.RefObject<HTMLInputElement>;
  error: string;
};

class NameInput extends Component<NameInputProps> {
  input: React.RefObject<HTMLInputElement>;

  constructor(props: NameInputProps) {
    super(props);
    this.input = React.createRef();
  }

  render() {
    const { inputRef, error } = this.props;
    return (
      <div>
        <input
          type="text"
          placeholder="Firstname"
          className={styles.searchInput}
          ref={inputRef}
          name="name"
        />
        {error && <span className={styles.error}>{error}</span>}
      </div>
    );
  }
}

export default NameInput;
