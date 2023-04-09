import React from 'react';
import { render } from '@testing-library/react';
import NotFound from '../pages/NotFound';

describe('NotFound component', () => {
  test('renders "404 Not Found" text', () => {
    const { getByText } = render(<NotFound />);
    const notFoundText = getByText(/404 Not Found/i);
    expect(notFoundText).toBeInTheDocument();
  });
});
