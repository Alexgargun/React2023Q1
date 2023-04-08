import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DateInput from '../components/DateInput';

describe('DateInput', () => {
  it('renders a date input field', () => {
    const dateOfBirthRef = React.createRef<HTMLInputElement>();
    render(<DateInput dateOfBirthRef={dateOfBirthRef} />);

    const dateOfBirthInput = screen.getByLabelText('Date of Birth:');
    expect(dateOfBirthInput).toBeInTheDocument();
    expect(dateOfBirthInput).toHaveAttribute('type', 'date');
  });

  it('sets the value of the date input field', () => {
    const dateOfBirthRef = React.createRef<HTMLInputElement>();
    render(<DateInput dateOfBirthRef={dateOfBirthRef} />);

    const dateOfBirthInput = screen.getByLabelText('Date of Birth:');
    const date = '2022-03-26';
    userEvent.type(dateOfBirthInput, date);

    expect(dateOfBirthRef.current).toHaveValue(date);
  });

  it('displays an error message', () => {
    const dateOfBirthRef = React.createRef<HTMLInputElement>();
    const errorMessage = 'Invalid date of birth';
    render(<DateInput dateOfBirthRef={dateOfBirthRef} error={errorMessage} />);

    const error = screen.getByText(errorMessage);
    expect(error).toBeInTheDocument();
  });
});
