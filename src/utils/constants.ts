const countries = [
  'United States',
  'United Kingdom',
  'Germany',
  'France',
  'Italy',
  'Spain',
  'Poland',
  'Romania',
  'Netherlands',
  'Belgium',
  'Portugal',
  'Greece',
  'Belarus',
  'Ucraine',
];

const errorMessages = {
  toShort: 'Name should be at least 1 characters',
  isCapitalized: `Name should be capitalized'`,
  surname: 'Surname should be at least 3 characters',
  email: 'Please enter a valid email address',
  dateOfBirth: 'Date of birth is required',
  selectCountry: 'Please select a country',
  selectGender: 'Please select gender',
  termsAndConditions: 'Please agree to the terms and conditions',
  fileInput: 'Please upload a file',
};

export { countries, errorMessages };
