import "../styles/WeatherDisplay.css";

const WeatherDisplay = ({ weatherData }) => {
  const {
    city,
    temperature,
    weatherCondition: { condition, pressure, humidity },
    wind: { speed },
  } = weatherData;
    console.log('city :>> ', city);
  return (
    <div className="display-container">
      <h2>Results for City Name: {city}</h2>
      <div className="info">
        <h4>Temperature: {temperature}°C</h4>
        <h4>Weather condition: {condition}</h4>
        <br />
        <h4>Wind: {speed}km/h</h4>
        <h4>Pressure: {pressure}</h4>
        <h4>Humidity: {humidity}%</h4>
      </div>
    </div>
  );
};

export default WeatherDisplay;
