import React, { FC } from 'react';
import FormState from '../models/forms';
import styles from '../styles/FormCard.module.css';

interface FormCardProps {
  form: FormState;
}

const FormCard: FC<FormCardProps> = ({ form }) => {
  const { id, name, surname, email, dateOfBirth, selectGender, subscribe, termsAndConditions } =
    form;
  return (
    <div className={styles.card} key={id}>
      <ul>
        <li>Name: {name}</li>
        <li>Surname: {surname}</li>
        <li>Email: {email}</li>
        <li>Date of Birth: {dateOfBirth}</li>
        <li>Gender: {selectGender}</li>
        <li>Subscribe to newsletter: {subscribe ? 'Yes' : 'No'}</li>
        <li>Terms and Conditions accepted: {termsAndConditions ? 'Yes' : 'No'}</li>
      </ul>
    </div>
  );
};

export default FormCard;
