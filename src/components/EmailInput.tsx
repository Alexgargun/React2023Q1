import React from 'react';
import styles from '../styles/AddFormData.module.css';
interface NameInputProps {
  emailRef: React.RefObject<HTMLInputElement>;
  error?: string;
}

const EmailInput = ({ emailRef, error }: NameInputProps) => {
  return (
    <div>
      <label>
        Email:
        <input type="email" className={styles.searchInput} ref={emailRef} name="email" />
      </label>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default EmailInput;
