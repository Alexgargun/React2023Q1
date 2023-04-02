import React, { FC } from 'react';
import { MyFormData } from '../types/forms';
import styles from '../styles/FormCard.module.css';

interface FormCardProps {
  form: MyFormData;
}

const FormCard: FC<FormCardProps> = ({ form }) => {
  const { id, name, surname, selectCountry, selectGender, dateOfBirth, email, image } = form;

  console.log(form.email);
  return (
    <div className={styles.card} key={id}>
      <div className={styles.image}>
        {image && <img src={URL.createObjectURL(image)} alt="Selected Image" />}
      </div>
      <ul style={{ display: 'block' }}>
        <li>Name: {name}</li>
        <li>Surname: {surname}</li>
        <li>Email: {email}</li>
        <li>Date of Birth: {dateOfBirth}</li>
        <li>Country: {selectCountry}</li>
        <li>Gender: {selectGender}</li>
      </ul>
    </div>
  );
};

export default FormCard;
