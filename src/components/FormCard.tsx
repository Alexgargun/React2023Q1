import React, { FC } from 'react';
import FormState from '../models/forms';

interface FormCardProps {
  form: FormState;
}

const FormCard: FC<FormCardProps> = ({ form }) => {
  const { id, name, dateOfBirth, selectGender, subscribe, termsAndConditions } = form;
  return (
    <div key={id}>
      <p>Name: {name}</p>
      <p>Date of Birth: {dateOfBirth}</p>
      <p>Gender: {selectGender}</p>
      <p>Subscribe to newsletter: {subscribe ? 'Yes' : 'No'}</p>
      <p>Terms and Conditions accepted: {termsAndConditions ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default FormCard;
