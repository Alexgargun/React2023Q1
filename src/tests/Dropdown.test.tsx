import React from 'react';
import { render, screen } from '@testing-library/react';
import Dropdown from 'components/Dropdown';

describe('Dropdown', () => {
  it('renders a dropdown with options', () => {
    const countries = ['USA', 'Canada', 'Mexico'];
    const selectCountryRef = { current: null };
    render(<Dropdown countries={countries} selectCountryRef={selectCountryRef} />);

    expect(screen.getByLabelText('Country')).toBeInTheDocument();
    expect(screen.getByLabelText('Country')).toHaveValue('select');
    expect(screen.getByLabelText('Country')).toHaveTextContent('USA');
    expect(screen.getByLabelText('Country')).toHaveTextContent('Canada');
    expect(screen.getByLabelText('Country')).toHaveTextContent('Mexico');
  });
});
