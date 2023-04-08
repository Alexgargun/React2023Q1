import React from 'react';
import styles from '../styles/AddFormData.module.css';
interface NameInputProps {
  emailRef: React.RefObject<HTMLInputElement>;
  error?: string;
}

const EmailInput = ({ emailRef, error }: NameInputProps) => {
  return (
    <div>
      <input
        type="email"
        placeholder="email"
        className={styles.searchInput}
        ref={emailRef}
        name="email"
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default EmailInput;
