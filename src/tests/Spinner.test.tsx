import React from 'react';
import { render } from '@testing-library/react';
import Spinner from '../components/react-api/Spinner';

describe('Spinner', () => {
  test('renders without errors', () => {
    const { container } = render(<Spinner />);
    expect(container.firstChild).toHaveClass('spinnerContainer');
  });
});
