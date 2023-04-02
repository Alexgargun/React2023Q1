import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import FormUseForm from '../components/FormUseForm';

describe('FormUseForm', () => {
  it('should submit form with valid data', async () => {
    const handleFormSubmit = jest.fn();
    render(<FormUseForm handleFormSubmit={handleFormSubmit} />);

    const inputName = screen.getByPlaceholderText('Alex');
    const inputSurname = screen.getByPlaceholderText('Gargun');
    const inputEmail = screen.getByPlaceholderText('email@example.com');
    const selectCountry = screen.getByRole('combobox');
    const inputDateOfBirth = screen.getByLabelText('Date of birth');
    const radioMale = screen.getByLabelText('Male');
    const radioFemale = screen.getByLabelText('Female');
    const checkboxTerms = screen.getByLabelText('I agree to the terms and conditions');
    const buttonSubmit = screen.getByRole('button', { name: 'Submit' });

    fireEvent.change(inputName, { target: { value: 'John' } });
    fireEvent.change(inputSurname, { target: { value: 'Doe' } });
    fireEvent.change(inputEmail, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(selectCountry, { target: { value: 'United States' } });
    fireEvent.change(inputDateOfBirth, { target: { value: '1990-01-01' } });
    fireEvent.click(radioMale);
    fireEvent.click(checkboxTerms);
    fireEvent.click(buttonSubmit);

    expect(handleFormSubmit).toHaveBeenCalledWith({
      id: expect.any(Number),
      name: 'John',
      surname: 'Doe',
      email: 'john.doe@example.com',
      dateOfBirth: '1990-01-01',
      selectCountry: 'United States',
      selectGender: 'male',
      image: expect.any(File),
    });
  });
});
