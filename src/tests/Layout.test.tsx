import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Layout from 'components/Layout';

describe('Layout component', () => {
  it('should render the layout', () => {
    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});
