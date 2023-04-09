import React from 'react';
import { render } from '@testing-library/react';
import FormCard from '../components/FormCard';

describe('FormCard', () => {
  const form = {
    id: 1,
    name: 'John',
    surname: 'Doe',
    selectCountry: 'USA',
    selectGender: 'Male',
    dateOfBirth: '01/01/1990',
    email: 'johndoe@example.com',
    image: null,
  };

  it('renders correctly', () => {
    const { getByText } = render(<FormCard form={form} />);
    expect(getByText('Name: John')).toBeInTheDocument();
    expect(getByText('Surname: Doe')).toBeInTheDocument();
    expect(getByText('Email: johndoe@example.com')).toBeInTheDocument();
    expect(getByText('Date of Birth: 01/01/1990')).toBeInTheDocument();
    expect(getByText('Country: USA')).toBeInTheDocument();
    expect(getByText('Gender: Male')).toBeInTheDocument();
  });
});
