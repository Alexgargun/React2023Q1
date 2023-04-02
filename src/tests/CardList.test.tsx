import React from 'react';
import { render, waitFor } from '@testing-library/react';
import CardList from '../components/CardList';

describe('CardList', () => {
  it('renders loading message when data is being fetched', () => {
    const { getByText } = render(<CardList searchInput="" />);
    expect(getByText('Loading...')).toBeInTheDocument();
  });

  it('renders data correctly', async () => {
    const mockData = [
      {
        id: 1,
        title: 'Latte',
        image: 'https://example.com/latte.jpg',
        description: 'A latte is a coffee drink made with espresso and steamed milk.',
      },
      {
        id: 2,
        title: 'Cappuccino',
        image: 'https://example.com/cappuccino.jpg',
        description: 'A cappuccino is a coffee drink made with espresso and frothed milk.',
      },
    ];

    jest.spyOn(global, 'fetch').mockResolvedValueOnce(
      new Response(JSON.stringify(mockData), {
        status: 200,
        headers: { 'Content-type': 'application/json' },
      })
    );

    const { getByText, getByAltText } = render(<CardList searchInput="" />);

    await waitFor(() => {
      expect(getByText('Latte')).toBeInTheDocument();
      expect(getByText('Cappuccino')).toBeInTheDocument();
      expect(getByAltText('Latte')).toBeInTheDocument();
      expect(getByAltText('Cappuccino')).toBeInTheDocument();
    });
  });

  it('filters data based on search input', async () => {
    const mockData = [
      {
        id: 1,
        title: 'Latte',
        image: 'https://example.com/latte.jpg',
        description: 'A latte is a coffee drink made with espresso and steamed milk.',
      },
      {
        id: 2,
        title: 'Cappuccino',
        image: 'https://example.com/cappuccino.jpg',
        description: 'A cappuccino is a coffee drink made with espresso and frothed milk.',
      },
    ];

    jest.spyOn(global, 'fetch').mockResolvedValueOnce(
      new Response(JSON.stringify(mockData), {
        status: 200,
        headers: { 'Content-type': 'application/json' },
      })
    );

    const { getByText, queryByText } = render(<CardList searchInput="latte" />);

    await waitFor(() => {
      expect(getByText('Latte')).toBeInTheDocument();
      expect(queryByText('Cappuccino')).not.toBeInTheDocument();
    });
  });
});
