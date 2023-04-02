// import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
// import FormLogic from '../components/FormLogic';

// describe('FormLogic', () => {
//   test('should add a form to the forms array on form submission', () => {
//     const { getByText } = render(<FormLogic />);

//     fireEvent.submit(getByText('name'), { target: { value: 'john Doe' } });
//     fireEvent.submit(getByText('email'), { target: { value: 'johndoe@example.com' } });
//     fireEvent.click(getByText('Submit'));

//     expect(getByText('john Doe')).toBeInTheDocument();
//     expect(getByText('johndoe@example.com')).toBeInTheDocument();
//   });
// });
