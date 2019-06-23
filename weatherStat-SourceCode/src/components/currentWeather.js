import React from "react";

export default class CurrentWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: undefined,
      low: undefined,
      high: undefined,
      humidity: undefined,
      skies: undefined,
      imageURL: undefined,
      location: undefined
    };

    this.getCurrentWeather = this.getCurrentWeather.bind(this);
  }

  componentDidMount() {
    this.getCurrentWeather(this.props.userZipCode);
  }

  componentWillUpdate(nextProps) {
    if (nextProps.userZipCode != this.props.userZipCode) {
      this.getCurrentWeather(nextProps.userZipCode);
    }
  }

  getCurrentWeather(userZipCode) {
    const API_KEY = "14b4f3a22314b40a6960c05efb79eeff";

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=${userZipCode}&appid=${API_KEY}&units=imperial`
    )
      .then(response => response.json())
      .then(data =>
        this.setState({
          temp: Math.ceil(data.main.temp),
          low: Math.floor(data.main.temp_min),
          high: Math.ceil(data.main.temp_max),
          humidity: data.main.humidity,
          skies: data.weather[0].description,
          imageURL:
            "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png",
          location: data.name
        })
      );
  }

  render() {
    return (
      <>
        <div className="main-card">
          <h3>{this.state.location}</h3>

          <div className="inner-weather-card">
            <p className="current-temp">
              <img className="weather-icon" src={this.state.imageURL} />
              {this.state.temp}°
            </p>
            <p>
              {this.state.high}° / {this.state.low}°
            </p>
            <p>Humidity: {this.state.humidity}%</p>
            <p>{this.state.skies}</p>
          </div>
        </div>
      </>
    );
  }
}
