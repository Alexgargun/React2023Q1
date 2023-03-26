import React from 'react';
import { render } from '@testing-library/react';
import FormCard from 'components/FormCard';

describe('FormCard', () => {
  const mockForm = {
    id: 1,
    name: 'John',
    surname: 'Doe',
    fileInput: new File([''], 'filename'),
    email: 'johndoe@example.com',
    dateOfBirth: '1990-01-01',
    selectCountry: 'USA',
    selectGender: 'Male',
    termsAndConditions: true,
  };

  it('should display the form data', () => {
    const { getByText } = render(<FormCard form={mockForm} />);
    expect(getByText('Name: John')).toBeInTheDocument();
    expect(getByText('Surname: Doe')).toBeInTheDocument();
    expect(getByText('Email: johndoe@example.com')).toBeInTheDocument();
    expect(getByText('Date of Birth: 1990-01-01')).toBeInTheDocument();
    expect(getByText('Country: USA')).toBeInTheDocument();
    expect(getByText('Select gender: Male')).toBeInTheDocument();
    expect(getByText('Terms and Conditions accepted: Yes')).toBeInTheDocument();
  });

  it('should display the form image', () => {
    const { getByAltText } = render(<FormCard form={mockForm} />);
    expect(getByAltText('Preview')).toBeInTheDocument();
  });
});
