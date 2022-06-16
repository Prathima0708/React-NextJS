import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import CityComponent from "./CityComponent";
import WeatherComponent from "./WeatherInfoComponent";
import WeatherInfoComponent from "./WeatherInfoComponent";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  margin-top: 120px;

  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;

const WeatherApp = () => {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4f7b7da68c94c175457d896aa8609a6f`
    );
    // console.log(response);
    setWeather(response.data);
  };
  return (
    <Container>
      <AppLabel>React Weather App</AppLabel>

      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent setCity={setCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
};

export default WeatherApp;
