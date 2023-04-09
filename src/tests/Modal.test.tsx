import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ModalWindow from '../components/react-api/ModalWindow';

describe('ModalWindow', () => {
  const coffee = {
    title: 'Latte',
    image: 'https://example.com/latte.jpg',
    description: 'A delicious espresso-based drink with steamed milk.',
  };

  it('renders nothing when isOpen is false', () => {
    render(<ModalWindow isOpen={false} handleModalClose={() => {}} {...coffee} />);
    expect(screen.queryByText(coffee.title)).not.toBeInTheDocument();
  });

  it('renders the modal when isOpen is true', () => {
    render(<ModalWindow isOpen={true} handleModalClose={() => {}} {...coffee} />);
    expect(screen.getByText(coffee.title)).toBeInTheDocument();
    expect(screen.getByAltText(coffee.title)).toBeInTheDocument();
    expect(screen.getByText(coffee.description)).toBeInTheDocument();
  });

  it('calls handleModalClose when the close button is clicked', () => {
    const handleModalClose = jest.fn();
    render(<ModalWindow isOpen={true} handleModalClose={handleModalClose} {...coffee} />);
    const closeButton = screen.getByText('×');
    fireEvent.click(closeButton);
    expect(handleModalClose).toHaveBeenCalled();
  });
});
