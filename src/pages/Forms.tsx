import { MyFormData } from '../types/forms';
import React from 'react';
import Form from '../components/AddFormData';
import DisplayForms from '../components/DisplayForms';
import FormLogic from '../components/FormLogic';
class FormPage extends React.Component {
  state = {
    formsArray: [],
  };

  uppdateFormState = (formData: MyFormData) => {
    this.setState({ formsArray: [...this.state.formsArray, formData] });
    console.log(formData);
  };

  render() {
    console.log(this.state.formsArray);
    return (
      <>
        <h1>Form Page</h1>
        {/* <Form uppdateFormState={this.uppdateFormState} /> */}
        {/* <DisplayForms formsArray={this.state.formsArray} /> */}
        <FormLogic />
      </>
    );
  }
}
export default FormPage;
