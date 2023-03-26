import React, { Component } from 'react';
import FileInput from 'components/FileInput';

class MyForm extends Component {
  fileInputRef = React.createRef<HTMLInputElement>();

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fileInput = this.fileInputRef.current;
    if (fileInput && fileInput.files) {
      const file = fileInput.files[0];
      console.log('Selected file:', file);
      // Do something with the selected file
    } else {
      console.error('No file selected');
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FileInput fileInputRef={this.fileInputRef} error="" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default MyForm;
