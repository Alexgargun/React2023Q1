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
    fileInput,
    email,
    dateOfBirth,
    selectCountry,
    selectGender,
    termsAndConditions,
  } = form;
  const imageUrl = URL.createObjectURL(fileInput);
  console.log(form.email);
  return (
    <div className={styles.card} key={id}>
      <div className={styles.image}>
        <img src={imageUrl} alt="Preview" />
      </div>
      <ul style={{ display: 'block' }}>
        <li>Name: {name}</li>
        <li>Surname: {surname}</li>
        <li>Email: {email}</li>
        <li>Date of Birth: {dateOfBirth}</li>
        <li>Country: {selectCountry}</li>
        <li>Select gender: {selectGender}</li>
        <li>Terms and Conditions accepted: {termsAndConditions ? 'Yes' : 'No'}</li>
      </ul>
    </div>
  );
};

export default FormCard;
