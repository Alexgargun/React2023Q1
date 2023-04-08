import FormState from '../models/forms';
import React from 'react';
import Form from '../components/AddFormData';
import DisplayForms from '../components/DisplayForms';

class FormPage extends React.Component {
  state = {
    formsArray: [],
  };

  uppdateFormState = (formData: FormState) => {
    this.setState({ formsArray: [...this.state.formsArray, formData] });
    console.log(formData);
  };

  render() {
    console.log(this.state.formsArray);
    return (
      <>
        <h1>Form Page</h1>
        <Form uppdateFormState={this.uppdateFormState} />
        <DisplayForms formsArray={this.state.formsArray} />
      </>
    );
  }
}
export default FormPage;
