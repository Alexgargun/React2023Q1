import React, { Component } from 'react';
import styles from '../styles/DateInput.module.css';

type DateInputProps = {
  dateOfBirthRef: React.RefObject<HTMLInputElement>;
  error?: string;
};

class DateInput extends Component<DateInputProps> {
  input: React.RefObject<HTMLInputElement>;

  constructor(props: DateInputProps) {
    super(props);
    this.input = React.createRef();
  }

  render() {
    const { dateOfBirthRef, error } = this.props;
    return (
      <div className={styles.dateOfBirthContainer}>
        <label htmlFor="dateOfBirth">
          Date of Birth:
          <input type="date" name="dateOfBirth" id="dateOfBirth" ref={dateOfBirthRef} />
        </label>
        {error && <span>{error}</span>}
      </div>
    );
  }
}

export default DateInput;
