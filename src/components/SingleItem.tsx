import React from 'react';

interface ItemsCardProps {
  title: string;
  image: string;
  description: string;
}

const SingleItem: React.FC<ItemsCardProps> = ({ title, image, description }) => {
  return (
    <div className="items-card">
      <h2>{title}</h2>
      <div className="items-image">
        <img src={image} alt={title} />
      </div>
      <p>{description}</p>
    </div>
  );
};

export default React.memo(SingleItem);
