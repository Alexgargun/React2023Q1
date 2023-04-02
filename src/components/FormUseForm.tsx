import React, { FC, FormEvent } from 'react';
import { FieldValues, set, SubmitHandler, useForm } from 'react-hook-form';
import styles from '../styles/FormUseForm.module.css';
import { countries } from '../utils/constants';
import { MyFormData } from '../types/forms';

interface FormProps {
  handleFormSubmit: (formData: MyFormData) => void;
}

function FormUseForm({ handleFormSubmit }: FormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<FieldValues> = (data, event) => {
    event?.preventDefault();
    const myFormData = {
      id: Date.now(),
      name: data.name,
      surname: data.surname,
      email: data.email,
      dateOfBirth: data.dateOfBirth,
      selectCountry: data.selectCountry,
      selectGender: data.selectGender,
      image: data.image[0] || null,
    };
    console.log(myFormData);

    handleFormSubmit(myFormData);
    reset();
  };

  return (
    <section style={{ padding: '74px' }} className={styles.formSection}>
      <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('name', {
            required: 'First name is required',
            pattern: {
              value: /[A-Za-z]/,
              message: 'First name must start with capital letter',
            },
          })}
          placeholder="Alex"
        />
        {errors?.name && (
          <span className={styles.error}>{errors.name?.message as React.ReactNode}</span>
        )}
        <input
          {...register('surname', {
            required: 'Last name is required',
            pattern: {
              value: /[A-Za-z]/,
              message: 'Last name must start with capital letter',
            },
          })}
          placeholder="Gargun"
        />
        {errors?.surname && (
          <span className={styles.error}>{errors.surname?.message as React.ReactNode}</span>
        )}
        <input
          type="file"
          {...register('image', {
            required: 'Please, choose image',
          })}
        />
        {errors?.image && (
          <span className={styles.error}>{errors.image?.message as React.ReactNode}</span>
        )}
        <input
          {...register('email', {
            required: 'Please, Input an email',
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i, message: 'Email is not valid' },
          })}
          placeholder="email@example.com"
        />
        {errors?.email && (
          <span className={styles.error}>{errors?.email?.message as React.ReactNode}</span>
        )}
        <select
          {...register('selectCountry', {
            required: 'Please, choose country of lining',
            validate: {
              value: (value) => value !== 'select' || 'Please, choose country of living',
            },
          })}
        >
          <option value={'select'}>Select country</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        {errors.selectCountry && (
          <span className={styles.error}>{errors.selectCountry.message as React.ReactNode}</span>
        )}{' '}
        <input
          type="date"
          {...register('dateOfBirth', {
            required: 'Please, choose date of birth',
          })}
        />
        {errors.dateOfBirth && (
          <span className={styles.error}>{errors.dateOfBirth.message as React.ReactNode}</span>
        )}
        <div className={styles.radioGroup}>
          {' '}
          <input
            {...register('selectGender', { required: 'Please, select gender' })}
            type="radio"
            value="male"
            id="male"
          />
          <label htmlFor="male">Male</label>
          <input
            {...register('selectGender', { required: 'Please, select gender' })}
            type="radio"
            value="female"
            id="female"
          />
          <label htmlFor="female">Female</label>
        </div>
        {errors.selectGender && (
          <span className={styles.error}>{errors.selectGender.message as React.ReactNode}</span>
        )}
        <label>
          I agree to the terms and conditions
          <input
            type="checkbox"
            {...register('termsAndConditions', {
              required: 'Please, accept terms and conditions',
            })}
          />
        </label>
        {errors.termsAndConditions && (
          <span className={styles.error}>
            {errors.termsAndConditions.message as React.ReactNode}
          </span>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default FormUseForm;
