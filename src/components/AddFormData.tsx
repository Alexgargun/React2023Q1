import React, { Component, FormEvent, RefObject } from 'react';
import styles from '../styles/AddFormData.module.css';
import FormState from '../models/forms';

interface FormProps {
  uppdateFormState: (formData: FormState) => void;
}

type FormErrors = {
  [key: string]: string;
};

interface FormStateInterface extends FormState {
  errors: FormErrors;
}

const errorMessages = {
  toShort: 'Name should be at least 1 characters',
  isCapitalized: `Name should be capitalized'`,
  surname: 'Surname should be at least 3 characters',
  dateOfBirth: 'Date of birth is required',
  selectGender: 'Please select a gender',
  subscribe: 'Please select "Yes" to subscribe',
  termsAndConditions: 'Please agree to the terms and conditions',
};

class Forms extends Component<FormProps, FormStateInterface> {
  input: RefObject<HTMLInputElement>;
  surname: React.RefObject<HTMLInputElement>;
  email: RefObject<HTMLInputElement>;
  dateOfBirth: RefObject<HTMLInputElement>;
  subscribe: RefObject<HTMLInputElement>;
  selectGender: RefObject<HTMLSelectElement>;
  termsAndConditions: RefObject<HTMLInputElement>;

  constructor(props: FormProps) {
    super(props);
    this.state = {
      id: 0,
      name: '',
      surname: '',
      email: '',
      dateOfBirth: '',
      selectGender: '',
      subscribe: true,
      termsAndConditions: false,
      errors: {
        name: '',
        surname: '',
        dateOfBirth: '',
        selectGender: '',
        termsAndConditions: '',
      },
    };

    this.input = React.createRef();
    this.surname = React.createRef();
    this.email = React.createRef();
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
      surname: this.surname.current?.value || '',
      email: this.email.current?.value || '',
      dateOfBirth: this.dateOfBirth.current?.value || '',
      selectGender: this.selectGender.current?.value || '',
      subscribe: this.subscribe.current?.value === 'yes' || false,
      termsAndConditions: this.termsAndConditions.current?.checked || false,
    };
    let errorNameMessage = '';
    if (formData.name.length < 1) {
      errorNameMessage = errorMessages.toShort;
    } else if (formData.name.charAt(0).toLowerCase() === formData.name.charAt(0)) {
      errorNameMessage = errorMessages.isCapitalized;
    }
    let errorSurnameMessage = '';
    if (formData.surname.length < 1) {
      errorSurnameMessage = errorMessages.toShort;
    } else if (formData.surname.charAt(0).toLowerCase() === formData.surname.charAt(0)) {
      errorSurnameMessage = errorMessages.isCapitalized;
    }

    const errors: FormErrors = {
      name: errorNameMessage,
      surname: errorSurnameMessage,
      dateOfBirth: !formData.dateOfBirth ? errorMessages.dateOfBirth : '',
      selectGender: formData.selectGender === 'select' ? errorMessages.selectGender : '',
      // subscribe: formData.subscribe === false ? errorMessages.subscribe : '',
      termsAndConditions:
        formData.termsAndConditions === false ? errorMessages.termsAndConditions : '',
    };

    console.log(Object.values(errors));

    const hasErrors = Object.values(errors).some((error) => error !== '');

    if (Object.values(errors).some((error) => error !== '')) {
      this.setState({ errors });
      return;
    }

    this.props.uppdateFormState(formData);
    this.setState({
      errors: {
        name: '',
        surname: '',
        dateOfBirth: '',
        selectGender: '',
        termsAndConditions: '',
      },
    });
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
              <input type="text" className={styles.searchInput} ref={this.input} name="name" />
            </label>
            {this.state.errors.name && (
              <span className={styles.error}>{this.state.errors.name}</span>
            )}
            <label className={styles.searchLabel}>
              Surname:
              <input type="text" className={styles.searchInput} ref={this.surname} name="surname" />
            </label>
            {this.state.errors.name && (
              <span className={styles.error}>{this.state.errors.name}</span>
            )}
            <label htmlFor="">
              Email:
              <input type="email" className={styles.searchInput} ref={this.email} name="email" />
            </label>
            {this.state.errors.name && (
              <span className={styles.error}>{this.state.errors.name}</span>
            )}
            <label>
              Date of Birth:
              <input type="date" name="dateOfBirth" id="dateOfBirth" ref={this.dateOfBirth} />
            </label>
            {this.state.errors.dateOfBirth && (
              <span className={styles.error}>{this.state.errors.dateOfBirth}</span>
            )}
            <label>
              Gender:
              <select name="gender" id="gender" ref={this.selectGender} required>
                <option value="select">--Select--</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
            {this.state.errors.selectGender && (
              <span className={styles.error}>{this.state.errors.selectGender}</span>
            )}
            <label>
              <input
                type="radio"
                name="subscribe"
                value="yes"
                id="subscribeYes"
                ref={this.subscribe}
              />
              Yes, I want to subscribe to the newsletter
            </label>
            {this.state.errors.subscribe && (
              <span className={styles.error}>{this.state.errors.subscribe}</span>
            )}
            <label>
              <input
                type="radio"
                name="subscribe"
                value="no"
                id="subscribeNo"
                ref={this.subscribe}
              />
              No, thanks
            </label>
            {this.state.errors.subscribe && (
              <span className={styles.error}>{this.state.errors.subscribe}</span>
            )}
            <label>
              <input
                type="checkbox"
                name="termsAndConditions"
                id="termsAndConditions"
                ref={this.termsAndConditions}
              />
              I agree to the terms and conditions
            </label>
            {this.state.errors.termsAndConditions && (
              <span className={styles.error}>{this.state.errors.termsAndConditions}</span>
            )}
            <input type="submit" value="Submit" />
          </form>
          {Object.values(this.state.errors).some((error) => error !== '') && (
            <div className={styles.errorContainer}>
              <p>Please fix the following errors before submitting the form:</p>
              <ul>
                {Object.values(this.state.errors).map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default Forms;
