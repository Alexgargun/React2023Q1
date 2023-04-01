import React from 'react';
import { MyFormData } from '../types/forms';
import FormCard from '../components/FormCard';

interface DisplayFormProps {
  formsArray: MyFormData[];
}

const DisplayForms: React.FC<DisplayFormProps> = ({ formsArray }) => {
  return (
    <div className="container">
      {formsArray.map((form) => (
        <FormCard key={form.id} form={form} />
      ))}
    </div>
  );
};

export default DisplayForms;
