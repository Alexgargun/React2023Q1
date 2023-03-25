import React, { Component, FormEvent, RefObject } from 'react';
import styles from '../styles/AddFormData.module.css';
import FormState from '../models/forms';
import { countries, errorMessages } from '../utils/constants';
import Dropdown from './Dropdown';
import NameInput from './NameInput';
import EmailInput from './EmailInput';
import SurnameInput from './SurnameInput';
import DateInput from './DateInput';
interface FormProps {
  uppdateFormState: (formData: FormState) => void;
}

type FormErrors = {
  [key: string]: string;
};

interface FormStateInterface extends FormState {
  errors: FormErrors;
}
class Forms extends Component<FormProps, FormStateInterface> {
  input: RefObject<HTMLInputElement>;
  surname: React.RefObject<HTMLInputElement>;
  email: RefObject<HTMLInputElement>;
  dateOfBirth: RefObject<HTMLInputElement>;
  selectGenderMale: RefObject<HTMLInputElement>;
  selectGenderFemale: RefObject<HTMLInputElement>;
  selectCountry: RefObject<HTMLSelectElement>;
  termsAndConditions: RefObject<HTMLInputElement>;

  constructor(props: FormProps) {
    super(props);
    this.state = {
      id: 0,
      name: '',
      surname: '',
      email: '',
      dateOfBirth: '',
      selectCountry: '',
      selectGenderMale: '',
      selectGenderFemale: '',
      termsAndConditions: false,
      errors: {
        name: '',
        surname: '',
        email: '',
        dateOfBirth: '',
        selectCountry: '',
        selectGender: '',
        termsAndConditions: '',
      },
    };

    this.input = React.createRef();
    this.surname = React.createRef();
    this.email = React.createRef();
    this.dateOfBirth = React.createRef();
    this.selectCountry = React.createRef();
    this.selectGenderMale = React.createRef();
    this.selectGenderFemale = React.createRef();
    this.termsAndConditions = React.createRef();
  }

  handleClick = () => {
    if (this.selectGenderMale.current?.checked) {
      console.log('Radio 1 is selected');
    } else if (this.selectGenderFemale.current?.checked) {
      console.log('Radio 2 is selected');
    }
  };

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = {
      id: Date.now(),
      name: this.input.current?.value || '',
      surname: this.surname.current?.value || '',
      email: this.email.current?.value || '',
      dateOfBirth: this.dateOfBirth.current?.value || '',
      selectCountry: this.selectCountry.current?.value || '',
      selectGender: this.selectGenderMale.current?.value || '',
      selectGenderFemale: this.selectGenderFemale.current?.value || '',
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
      email: !formData.email ? errorMessages.email : '',
      selectCountry: formData.selectCountry === 'select' ? errorMessages.selectCountry : '',
      selectGender: formData.selectGender ? errorMessages.selectGender : '',
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
        email: '',
        dateOfBirth: '',
        selectCountry: '',
        selectGenderMale: '',
        selectGenderFemale: '',
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
            <NameInput inputRef={this.input} error={this.state.errors.name} />
            <SurnameInput surnameRef={this.surname} error={this.state.errors.surname} />
            <EmailInput emailRef={this.email} error={this.state.errors.email} />
            <DateInput dateOfBirthRef={this.dateOfBirth} error={this.state.errors.dateOfBirth} />
            <Dropdown
              selectCountryRef={this.selectCountry}
              countries={[]}
              error={this.state.errors.selectCountry}
            />
            <label>
              <input type="radio" name="gender" value="male" ref={this.selectGenderMale} />
              Male
            </label>
            <label>
              <input type="radio" name="gender" value="female" ref={this.selectGenderFemale} />
              Female
            </label>
            {this.state.errors.selectGender && (
              <span className={styles.error}>{this.state.errors.selectGender}</span>
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
