import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EmailInput from 'components/EmailInput';

describe('EmailInput', () => {
  it('updates the input value when the user types', () => {
    const emailRef = React.createRef<HTMLInputElement>();
    render(<EmailInput emailRef={emailRef} />);
    const emailInput = screen.getByPlaceholderText('email');
    const emailValue = 'test@example.com';
    userEvent.type(emailInput, emailValue);
    expect(emailRef.current?.value).toBe(emailValue);
  });

  it('displays an error message when provided with an error', () => {
    const error = 'Please enter a valid email address';
    render(<EmailInput emailRef={React.createRef()} error={error} />);
    expect(screen.getByText(error)).toBeInTheDocument();
  });
});
