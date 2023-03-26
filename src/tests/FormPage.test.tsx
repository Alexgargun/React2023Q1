import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FormPage from 'pages/Forms';

describe('FormPage', () => {
  it('renders the component', () => {
    render(<FormPage />);
    expect(screen.getByText('Form Page')).toBeInTheDocument();
    expect(screen.getByLabelText('Email:')).toBeInTheDocument();
    expect(screen.getByLabelText('Message:')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  it('updates the state when the form is submitted', () => {
    render(<FormPage />);
    const emailInput = screen.getByLabelText('Email:');
    const messageInput = screen.getByLabelText('Message:');
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hello' } });
    fireEvent.click(submitButton);

    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
