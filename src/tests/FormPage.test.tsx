import React from 'react';
import { render, screen } from '@testing-library/react';
import FormPage from '../pages/Forms';

describe('FormPage', () => {
  test('renders form page title', () => {
    render(<FormPage />);
    const pageTitle = screen.getByText('Form Page');
    expect(pageTitle).toBeInTheDocument();
  });
});
