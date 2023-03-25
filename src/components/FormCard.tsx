import React, { FC } from 'react';
import FormState from '../models/forms';
import styles from '../styles/FormCard.module.css';

interface FormCardProps {
  form: FormState;
}

const FormCard: FC<FormCardProps> = ({ form }) => {
  const {
    id,
    name,
    surname,
    email,
    dateOfBirth,
    selectCountry,
    selectGenderMale,
    selectGenderFemale,
    termsAndConditions,
  } = form;
  return (
    <div className={styles.card} key={id}>
      <ul>
        <li>Name: {name}</li>
        <li>Surname: {surname}</li>
        <li>Email: {email}</li>
        <li>Date of Birth: {dateOfBirth}</li>
        <li>Country: {selectCountry}</li>
        <li>Select gender: {selectGenderMale}</li>
        <li>Select gender: {selectGenderFemale}</li>
        <li>Terms and Conditions accepted: {termsAndConditions ? 'Yes' : 'No'}</li>
      </ul>
    </div>
  );
};

export default FormCard;
