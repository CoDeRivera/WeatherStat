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
    if (e.target.elements.zipCode.value != "") {
      this.setState({
        userZipCode: e.target.elements.zipCode.value
      });
      e.target.elements.zipCode.value = "";
    } else {
      alert("Enter a zip code");
    }
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
        <footer className="footer">
          <h1>SHaDoWCoDe64 &copy;</h1>
        </footer>
      </>
    );
  }
}
