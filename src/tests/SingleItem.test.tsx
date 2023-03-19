import React from 'react';
import { render } from '@testing-library/react';
import SingleItem from 'components/SingleItem';

describe('SingleItem component', () => {
  const itemProps = {
    title: 'Test Title',
    image: 'test-image.png',
    description: 'Test description',
  };

  it('renders correctly', () => {
    const { getByText, getByAltText } = render(<SingleItem {...itemProps} />);
    expect(getByText('Test Title')).toBeInTheDocument();
    expect(getByAltText('Test Title')).toBeInTheDocument();
    expect(getByText('Test description')).toBeInTheDocument();
  });
});
