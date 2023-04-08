import React from 'react';
import { render } from '@testing-library/react';
import DisplayForms from 'components/DisplayForms';
import FormState from '../models/forms';

describe('DisplayForms component', () => {
  const formsArray: FormState[] = [
    {
      id: 1,
      name: 'John',
      surname: 'Doe',
      fileInput: new File(['file contents'], 'filename.png', { type: 'image/png' }),
      email: 'john.doe@example.com',
      dateOfBirth: '2000-01-01',
      selectCountry: 'USA',
      selectGender: 'Male',
      termsAndConditions: true,
    },
    {
      id: 2,
      name: 'Jane',
      surname: 'Doe',
      fileInput: new File(['file contents'], 'filename.png', { type: 'image/png' }),
      email: 'jane.doe@example.com',
      dateOfBirth: '1998-05-12',
      selectCountry: 'Canada',
      selectGender: 'Female',
      termsAndConditions: false,
    },
  ];

  it('renders FormCard components for each form in the array', () => {
    const { getAllByTestId } = render(<DisplayForms formsArray={formsArray} />);
    const formCards = getAllByTestId('form-card');
    expect(formCards).toHaveLength(formsArray.length);
  });
});
