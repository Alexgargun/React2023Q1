import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Home from '../pages/Home';

jest.mock('../components/CardList', () => ({ searchInput }: { searchInput: string }) => (
  <div data-testid="mocked-cardlist">{searchInput}</div>
));

describe('Home', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    localStorage.clear();
  });

  it('should render the component', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Home Page')).toBeInTheDocument();
  });

  it('should update the search input value', () => {
    const { getByPlaceholderText } = render(<Home />);
    const searchInput = 'coffee';

    const searchInputEl = getByPlaceholderText('Search...');
    fireEvent.change(searchInputEl, { target: { value: searchInput } });

    expect(searchInputEl).toHaveValue(searchInput);
  });

  it('should render the CardList component with the correct props', () => {
    localStorage.setItem('search', 'coffee');
    const { getByTestId } = render(<Home />);
    const mockedCardListEl = getByTestId('mocked-cardlist');

    expect(mockedCardListEl).toBeInTheDocument();
    expect(mockedCardListEl).toHaveTextContent('coffee');
  });
});
