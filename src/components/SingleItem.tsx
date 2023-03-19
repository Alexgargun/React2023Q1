import React from 'react';

interface ItemsCardProps {
  title: string;
  image: string;
  description: string;
}

class SingleItem extends React.PureComponent<ItemsCardProps> {
  render() {
    const { title, image, description } = this.props;
    return (
      <div className="items-card">
        <h2>{title}</h2>
        <div className="items-image">
          <img src={image} alt={title} />
        </div>
        <p>{description}</p>
      </div>
    );
  }
}

export default SingleItem;
