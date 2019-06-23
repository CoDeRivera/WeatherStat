import React from "react";

export default function DailyCard(props) {
  return (
    <>
      <li className="daily-card">
        <p style={{ fontSize: "26px" }}>
          <img
            src={
              "https://openweathermap.org/img/w/" + props.weatherIcon + ".png"
            }
          />
          {props.temp}°
        </p>
        <p>High: {props.high}°</p>
        <p>Low: {props.low}°</p>
        <p>{props.location}</p>
      </li>
    </>
  );
}
