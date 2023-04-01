import React from 'react';

const NameInput = () => {
  return (
    <div className="form-group">
      <label htmlFor="name">Name</label>
      <input type="text" className="form-control" id="name" placeholder="Enter name" />
    </div>
  );
};

export default NameInput;
