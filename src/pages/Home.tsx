import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import CardList from "../components/CardList";
import Header from "../components/Header";

export default class Home extends React.PureComponent {
  render() {
    return (
      <>
        <Header />
        <SearchBar />
        <CardList />
      </>
    );
  }
}
