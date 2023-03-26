import React, { Component, createRef } from 'react';

type MyFormProps = {
  fileInputRef: FileInput['fileInput'];
  error: string;
};

class FileInput extends Component<MyFormProps> {
  fileInput: React.RefObject<HTMLInputElement>;

  constructor(props: MyFormProps) {
    super(props);
    this.fileInput = createRef();
  }

  render() {
    const { fileInputRef, error } = this.props;
    return (
      <>
        <input type="file" ref={fileInputRef} />
        {error && <span>{error}</span>}
      </>
    );
  }
}

export default FileInput;
