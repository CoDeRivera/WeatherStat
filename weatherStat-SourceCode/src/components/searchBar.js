import React from "react";

export default function SearchBar(props) {
  return (
    <>
      <center>
        <h1>WeatherStat</h1>
        <hr />
        <form onSubmit={props.handleOnSubmit}>
          <input type="text" name="zipCode" placeholder="Enter Zip Code" />
          <button>Search</button>
        </form>
      </center>
    </>
  );
}
