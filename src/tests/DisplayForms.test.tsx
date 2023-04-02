import React from 'react';
import { render } from '@testing-library/react';
import DisplayForms from '../components/DisplayForms';

describe('DisplayForms', () => {
  it('renders a list of FormCard components', () => {
    const formsArray = [
      {
        id: 1,
        name: 'John',
        surname: 'Doe',
        email: 'john.doe@example.com',
        dateOfBirth: '1990-01-01',
        selectCountry: 'USA',
        selectGender: 'male',
        image: null,
      },
      {
        id: 2,
        name: 'Jane',
        surname: 'Doe',
        email: 'jane.doe@example.com',
        dateOfBirth: '1992-01-01',
        selectCountry: 'Canada',
        selectGender: 'female',
        image: null,
      },
      {
        id: 3,
        name: 'Bob',
        surname: 'Smith',
        email: 'bob.smith@example.com',
        dateOfBirth: '1985-01-01',
        selectCountry: 'Australia',
        selectGender: 'male',
        image: null,
      },
    ];

    const { container } = render(<DisplayForms formsArray={formsArray} />);

    const formCardElements = container.querySelectorAll('.form-card');
    expect(formCardElements.length).toBe(formsArray.length);
  });
});
