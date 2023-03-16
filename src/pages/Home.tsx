import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import CardList from "../components/CardList";
import Header from "../components/Header";

interface HomeState {
  searchInput: string;
}

export default class Home extends React.Component<{}, HomeState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      searchInput: "",
    };
  }
  getSearchInput = (input: string) => {
    this.setState({ searchInput: input });
  };

  render() {
    return (
      <>
        <Header />
        <SearchBar getSearchInput={this.getSearchInput} />
        <CardList searchInput={this.state.searchInput} />
      </>
    );
  }
}
