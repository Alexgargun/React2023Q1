type FormState = {
  id: number;
  name: string;
  surname: string;
  email: string;
  dateOfBirth: string;
  selectCountry: string;
  selectGender: string;
  termsAndConditions: boolean;
  selectMale?: string;
  selectFemale?: string;
  fileInput: File;
};

export default FormState;
