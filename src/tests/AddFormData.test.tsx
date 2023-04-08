import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import FormPage from 'pages/Forms';

describe('Forms', () => {
  it('displays error messages when the form is invalid', () => {
    render(<FormPage />);

    // Fill in the form with invalid data
    fireEvent.change(screen.getByLabelText('Name'), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText('Surname'), { target: { value: 'doe' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText('Date of Birth'), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText('Country'), { target: { value: 'select' } });
    fireEvent.click(screen.getByLabelText('Female'));
    fireEvent.click(screen.getByLabelText('I accept the terms and conditions'));

    fireEvent.submit(screen.getByRole('form'));

    expect(screen.getByText('Name is too short')).toBeInTheDocument();
    expect(screen.getByText('Surname must start with a capital letter')).toBeInTheDocument();
    expect(screen.getByText('Email is required')).toBeInTheDocument();
    expect(screen.getByText('Date of birth is required')).toBeInTheDocument();
    expect(screen.getByText('Please select a country')).toBeInTheDocument();
    expect(screen.getByText('Please select your gender')).toBeInTheDocument();
    expect(screen.getByText('You must accept the terms and conditions')).toBeInTheDocument();
  });
});
