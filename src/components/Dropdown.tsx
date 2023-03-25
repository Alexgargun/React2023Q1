import React, { Component } from 'react';
import { countries } from '../utils/constants';
import styles from '../styles/AddFormData.module.css';

interface SelectCountryProps {
  countries: string[];
  selectCountryRef: React.RefObject<HTMLSelectElement>;
  error?: string;
}

class Dropdown extends Component<SelectCountryProps> {
  selectCountry: React.RefObject<HTMLSelectElement>;

  constructor(props: SelectCountryProps) {
    super(props);
    this.selectCountry = React.createRef();
  }

  render() {
    const { selectCountryRef, error } = this.props;
    return (
      <div>
        <label htmlFor="selectCountryId">
          Country
          <select
            name="selectCountry"
            id="selectCountryId"
            ref={selectCountryRef || this.selectCountry}
          >
            <option value="select">Select</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </label>
        {error && <span className={styles.error}>{error}</span>}
      </div>
    );
  }
}

export default Dropdown;
