import React from 'react';

import Coffee from 'models/coffee';
import SingleItem from './SingleItem';

interface State {
  data: Coffee[];
}

interface CardListProps {
  searchInput: string;
}
class CardList extends React.Component<CardListProps, State> {
  constructor(props: CardListProps) {
    super(props);
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    const resp = await fetch('https://api.sampleapis.com/coffee/hot');
    const json = await resp.json();
    this.setState({ data: json });
  }

  render() {
    if (this.state.data.length === 0) {
      return (
        <div className="section">
          <h2>Loading...</h2>
        </div>
      );
    }
    return (
      <>
        <div className="card">
          {this.state.data
            .filter((el) => el.title.includes(this.props.searchInput))
            .map((item) => (
              <SingleItem
                key={item.id}
                title={item.title}
                image={item.image}
                description={item.description}
              />
            ))}
        </div>
      </>
    );
  }
}

export default CardList;
