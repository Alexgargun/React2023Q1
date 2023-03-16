import React from "react";
import { Link, useSearchParams } from "react-router-dom";

interface Coffee {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface State {
  data: Coffee[];
  // searchParams: URLSearchParams;
}

// interface SearchParams {
//   post: string;
// }

interface CardListProps {
  searchInput: string;
}
class CardList extends React.Component<CardListProps, State> {
  constructor(props: CardListProps) {
    super(props);
    this.state = {
      data: [],
      // searchParams: new URLSearchParams(),
    };
  }

  // handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const target = e.target as typeof e.target & {
  //     search: { value: string };
  //   };
  //   const searchParams = new URLSearchParams();
  //   searchParams.set("post", target.search.value);
  //   this.setState({ searchParams });
  // };

  async componentDidMount() {
    const resp = await fetch("https://api.sampleapis.com/coffee/hot");
    const json = await resp.json();
    this.setState({ data: json });
  }

  render() {
    return (
      <>
        <div className="card">
          {this.state.data
            .filter((el) => el.title.includes(this.props.searchInput))
            .map((item) => (
              <div className="items-card" key={item.id}>
                <h2>{item.title}</h2>
                <div className="items-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <p>{item.description}</p>
              </div>
            ))}
        </div>
      </>
    );
  }
}

export default CardList;
