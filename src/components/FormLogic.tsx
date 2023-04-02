import React, { FC, useState } from 'react';
import { MyFormData } from 'types/forms';
import FormUseForm from './FormUseForm';
import DisplayForms from './DisplayForms';

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
