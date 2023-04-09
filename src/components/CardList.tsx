import React, { useState, useEffect } from 'react';
import Coffee from 'types/coffee';
import SingleItem from './SingleItem';
import Spinner from './react-api/Spinner';

interface CardListProps {
  searchInput: string;
}

const CardList: React.FC<CardListProps> = ({ searchInput }) => {
  const [data, setData] = useState<Coffee[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch('https://api.sampleapis.com/coffee/hot');
      const json = await resp.json();
      setData(json);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  console.log(data);

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
