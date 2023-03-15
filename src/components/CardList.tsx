import React from "react";
import { Link } from "react-router-dom";

interface Coffee {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface State {
  data: Coffee[];
}

class CardList extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const resp = await fetch("https://api.sampleapis.com/coffee/hot");
    const json = await resp.json();
    this.setState({ data: json });
  }

  render() {
    return (
      <div className="card">
        {this.state.data.map((item) => (
          <div className="items-card" key={item.id}>
            <h2>{item.title}</h2>
            <div className="items-image">
              <img src={item.image} alt={item.title} />
            </div>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default CardList;
