import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CardList from '../components/CardList';

describe('CardList', () => {
  test('renders loading spinner initially', async () => {
    render(<CardList searchInput="" />);
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
    await waitFor(() => expect(screen.queryByTestId('spinner')).not.toBeInTheDocument());
  });

  test('renders filtered list of coffee items', async () => {
    render(<CardList searchInput="coffee 1" />);

    await waitFor(() => expect(screen.getByText('Coffee 1')).toBeInTheDocument());
    expect(screen.queryByText('Coffee 2')).not.toBeInTheDocument();
  });
});
