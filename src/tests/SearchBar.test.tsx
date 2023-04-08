import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import SearchBar from '../components/SearchBar';

describe('SearchBar component', () => {
  it('should render the search bar with the initial value and clear the input on click', () => {
    const { getByPlaceholderText } = render(<SearchBar getSearchInput={() => {}} />);

    expect(getByPlaceholderText('search')).toBeInTheDocument();
    expect(getByPlaceholderText('search')).toHaveValue('');

    fireEvent.change(getByPlaceholderText('search'), { target: { value: 'test' } });
    expect(getByPlaceholderText('search')).toHaveValue('test');
  });
});
