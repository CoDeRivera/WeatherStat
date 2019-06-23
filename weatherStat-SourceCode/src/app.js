import React from "react";
import SearchBar from "./components/searchBar";
import CurrentWeather from "./components/currentWeather";
import WeatherForecast from "./components/weatherForecast";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userZipCode: 10001
    };

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnSubmit(e) {
    e.preventDefault();
    this.setState({
      userZipCode: e.target.elements.zipCode.value
    });
    e.target.elements.zipCode.value = "";
  }

  render() {
    return (
      <>
        <SearchBar handleOnSubmit={this.handleOnSubmit} />
        <hr />
        <CurrentWeather userZipCode={this.state.userZipCode} />
        <hr />
        <WeatherForecast userZipCode={this.state.userZipCode} />
        <hr />
      </>
    );
  }
}
