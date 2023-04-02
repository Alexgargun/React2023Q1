import React, { useState, useEffect } from 'react';
import Coffee from 'types/coffee';
import SingleItem from './SingleItem';

interface CardListProps {
  searchInput: string;
}

const CardList: React.FC<CardListProps> = ({ searchInput }) => {
  const [data, setData] = useState<Coffee[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch('https://api.sampleapis.com/coffee/hot');
      const json = await resp.json();
      setData(json);
    };
    fetchData();
  }, []);

  console.log(searchInput);

  if (data.length === 0) {
    return (
      <div className="section">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="card">
      {data
        .filter((el) => el.title.toLowerCase().includes(searchInput.toLowerCase()))
        .map((item) => (
          <SingleItem
            key={item.id}
            title={item.title}
            image={item.image}
            description={item.description}
          />
        ))}
    </div>
  );
};

export default CardList;
