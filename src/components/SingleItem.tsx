import React, { useState } from 'react';
import ModalWindow from 'components/react-api/ModalWindow';

interface ItemsCardProps {
  title: string;
  image: string;
  description: string;
}

const SingleItem: React.FC<ItemsCardProps> = ({ title, image, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <ModalWindow
        isOpen={isOpen}
        handleModalClose={handleModalClose}
        title={title}
        image={image}
        description={description}
      />
      <div className="items-card" onClick={handleModalOpen}>
        <h2>{title}</h2>
        <div className="items-image">
          <img src={image} alt={title} />
        </div>
        <p>{description}</p>
      </div>
    </>
  );
};

export default React.memo(SingleItem);
