type FormState = {
  id: number;
  name: string;
  surname: string;
  email?: string;
  dateOfBirth?: string;
  selectCountry?: string;
  selectGender?: string;
  termsAndConditions?: boolean;
  selectMale?: string;
  selectFemale?: string;
  fileInput?: File;
  newInputFile?: File;
  image?: File | null;
};

type MyFormData = {
  id: number;
  name: string;
  surname: string;
  email: string;
  dateOfBirth: string;
  selectCountry: string;
  selectGender: string;
  image: File | null;
};

export { FormState, MyFormData };
