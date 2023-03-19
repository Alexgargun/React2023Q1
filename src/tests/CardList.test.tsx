import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CardList from 'components/CardList';

describe('CardList component', () => {
  it('renders a list of coffee items', async () => {
    render(<CardList searchInput="" />);
    await waitFor(() => screen.getByText('Loading...'));

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
