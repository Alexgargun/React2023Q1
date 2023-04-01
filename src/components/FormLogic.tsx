import React, { FC, useState } from 'react';
import { MyFormData } from 'types/forms';
import FormUseForm from '../pages/FormUseForm';
import DisplayForms from './DisplayForms';

// interface MyFormData {
//   id: number;
//   name: string;
//   surname: string;
//   image: File | null;
// }

const FormLogic: FC = () => {
  const [formsArray, setFormsArray] = useState<MyFormData[]>([]);
  const handleFormSubmit = (myFormData: MyFormData) => {
    setFormsArray([...formsArray, myFormData]);
  };
  console.log(formsArray);

  return (
    <>
      <FormUseForm handleFormSubmit={handleFormSubmit} />
      <DisplayForms formsArray={formsArray} />
    </>
  );
};

export default FormLogic;
