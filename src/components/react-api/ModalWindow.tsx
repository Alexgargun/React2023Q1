import React from 'react';
import styles from '../../styles/ModalWindow.module.css';
import Coffee from 'types/coffee';

interface ModalWindowProps extends Coffee {
  isOpen: boolean;
  handleModalClose: () => void;
}

const ModalWindow: React.FC<ModalWindowProps> = ({
  isOpen,
  handleModalClose,
  title,
  image,
  description,
}) => {
  return (
    <>
      {isOpen && (
        <>
          <div className={styles.overlay} onClick={handleModalClose}></div>
          <div className={styles.modal}>
            <div className={styles.itemsCard}>
              <span className={styles.close} onClick={handleModalClose}>
                &times;
              </span>

              <h2>{title}</h2>
              <div className={styles.itemsImage}>
                <img src={image} alt={title} />
              </div>
              <p>{description}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ModalWindow;
