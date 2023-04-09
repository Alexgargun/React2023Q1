import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FormLogic from '../components/FormLogic';

describe('FormLogic', () => {
  test('should add a form to the forms array on form submission', () => {
    const { getByText, getByLabelText } = render(<FormLogic />);

    const emailInput = getByLabelText('email');
    const submitButton = getByText('Submit');

    fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });
    fireEvent.click(submitButton);

    expect(getByText('john Doe')).toBeInTheDocument();
    expect(getByText('johndoe@example.com')).toBeInTheDocument();
  });
});
