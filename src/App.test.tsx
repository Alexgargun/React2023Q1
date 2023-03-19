import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App component', () => {
  it('should render the app', () => {
    const { getAllByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const homeLinks = getAllByText('Home');
    expect(homeLinks).toHaveLength(1);
  });
  it('should render the About page when the About link is clicked', () => {
    const { getAllByText } = render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );
    const aboutLinks = getAllByText('About');
    expect(aboutLinks).toHaveLength(1);
  });
  it('should render the Not Found page for any other routes', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/not-found']}>
        <App />
      </MemoryRouter>
    );

    expect(getByText('404 Not Found')).toBeInTheDocument();
  });
});
