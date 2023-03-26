import React from 'react';
import { render } from '@testing-library/react';
import SurnameInput from 'components/SurnameInput';

describe('SurnameInput', () => {
  test('renders input with placeholder', () => {
    const { getByPlaceholderText } = render(<SurnameInput surnameRef={React.createRef()} />);
    const input = getByPlaceholderText('Surname');
    expect(input).toBeInTheDocument();
  });

  test('renders error message when error prop is passed', () => {
    const surnameRef = React.createRef<HTMLInputElement>();
    const { getByText } = render(
      <SurnameInput surnameRef={surnameRef} error="Surname is required" />
    );
    const errorMessage = getByText('Surname is required');
    expect(errorMessage).toBeInTheDocument();
  });
});
