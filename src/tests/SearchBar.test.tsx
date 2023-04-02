import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

describe('SearchBar component', () => {
  it('should render the search input and button', () => {
    const { getByPlaceholderText, getByRole } = render(<SearchBar getSearchInput={() => {}} />);
    const searchInput = getByPlaceholderText('search');
    const searchButton = getByRole('button');

    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  it('should call getSearchInput prop when submitting the form', () => {
    const getSearchInputMock = jest.fn();
    const { getByRole } = render(<SearchBar getSearchInput={getSearchInputMock} />);
    const searchButton = getByRole('button');

    fireEvent.click(searchButton);

    expect(getSearchInputMock).toHaveBeenCalledTimes(1);
  });
});
