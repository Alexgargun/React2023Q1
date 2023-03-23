import React, { Component, FormEvent, RefObject } from 'react';
import styles from '../styles/SearchBar.module.css';
import FormState from '../models/forms';

interface FormProps {
  uppdateFormState: (formData: FormState) => void;
}

class Forms extends Component<FormProps> {
  input: RefObject<HTMLInputElement>;
  dateOfBirth: RefObject<HTMLInputElement>;
  subscribe: RefObject<HTMLInputElement>;
  selectGender: RefObject<HTMLSelectElement>;
  termsAndConditions: RefObject<HTMLInputElement>;

  constructor(props: FormProps) {
    super(props);
    this.state = {
      id: 0,
      name: '',
      dateOfBirth: '',
      selectGender: '',
      subscribe: false,
      termsAndConditions: false,
    };

    this.input = React.createRef();
    this.dateOfBirth = React.createRef();
    this.selectGender = React.createRef();
    this.subscribe = React.createRef();
    this.termsAndConditions = React.createRef();
  }

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = {
      id: Date.now(),
      name: this.input.current?.value || '',
      dateOfBirth: this.dateOfBirth.current?.value || '',
      selectGender: this.selectGender.current?.value || '',
      subscribe: this.subscribe.current?.value === 'yes' || false,
      termsAndConditions: this.termsAndConditions.current?.checked || false,
    };
    this.setState(formData);
    this.props.uppdateFormState(formData);
  };
  render() {
    console.log(this.state);
    return (
      <section style={{ padding: '74px' }} className={styles.formSection}>
        <div className="container">
          <form
            onSubmit={this.handleSubmit}
            className={styles.formContainer}
            style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '10px' }}
          >
            <label className={styles.searchLabel}>
              Name:
              <input
                type="text"
                className={styles.searchInput}
                ref={this.input}
                name="name"
                required
              />
            </label>
            <label>
              Date of Birth:
              <input
                type="date"
                name="dateOfBirth"
                id="dateOfBirth"
                ref={this.dateOfBirth}
                required
              />
            </label>
            <label>
              Gender:
              <select name="gender" id="gender" ref={this.selectGender} required>
                <option value="select">--Select--</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>

            <label>
              <input
                type="radio"
                name="subscribe"
                value="yes"
                id="subscribeYes"
                ref={this.subscribe}
                required
              />
              Yes, I want to subscribe to the newsletter
            </label>
            <label>
              <input
                type="radio"
                name="subscribe"
                value="no"
                id="subscribeNo"
                ref={this.subscribe}
                required
              />
              No, thanks
            </label>
            <label>
              <input
                type="checkbox"
                name="termsAndConditions"
                id="termsAndConditions"
                ref={this.termsAndConditions}
                required
              />
              I agree to the terms and conditions
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </section>
    );
  }
}

export default Forms;
