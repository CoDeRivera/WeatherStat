import React from "react";
import DailyCard from "./dailyCard";

export default class WeatherForecast extends React.Component {
  constructor() {
    super();
    this.state = {
      localUserZipCode: 10001,
      apiResponse: undefined,
      completeResponse: undefined,
      location: undefined,
      dailyComponents: []
    };
    dailyForecastComponents: undefined;
    this.getForecast = this.getForecast.bind(this);
  }

  componentWillMount() {
    this.getForecast(this.props.userZipCode);
  }

  componentWillUpdate(nextProps) {
    if (nextProps.userZipCode != this.props.userZipCode) {
      this.getForecast(nextProps.userZipCode);
    }
  }

  getForecast(userZipCode) {
    const API_KEY = "14b4f3a22314b40a6960c05efb79eeff";

    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?zip=${userZipCode}&appid=${API_KEY}&units=imperial&cnt=5`
    )
      .then(response => response.json())
      .then(data =>
        this.setState(
          {
            apiResponse: data.list,
            completeResponse: data,
            location: data.city.name
          },
          () => {
            this.setState({
              dailyComponents: this.state.apiResponse.map(day => {
                return (
                  <DailyCard
                    key={day.dt}
                    temp={Math.ceil(day.main.temp)}
                    low={Math.floor(day.main.temp_min)}
                    high={Math.ceil(day.main.temp_max)}
                    weatherIcon={day.weather[0].icon}
                    location={this.state.location}
                  />
                );
              })
            });
          }
        )
      );
  }

  render() {
    return (
      <>
        <div className="weather-card">{this.state.dailyComponents}</div>
      </>
    );
  }
}

// let currentDay = new Date().getDay();
// function getCurrentDay() {
//   currentDay += 1;
//   let days = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday"
//   ];

//   if (currentDay > 6) {
//     currentDay = 0;
//   }
//   // console.log("Day: ", currentDay);
//   return days[currentDay];
// }
