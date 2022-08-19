import { withAuthenticator } from "@aws-amplify/ui-react";
import { useState } from "react";
import { Auth } from 'aws-amplify';
import API from "./API";
import "./styles/App.css";
import Input from "./Components/Input";
import WeatherDisplay from "./Components/WeatherDisplay";

const App = ({ user }) => {
  const { jwtToken } = user.signInUserSession.idToken;
  localStorage.setItem("token", jwtToken);
  const [weatherData, setWeatherData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [signOutError, setSignOutError] = useState("");
  const getWeatherData = async (city) => {
    try {
      setErrorMessage("");
      const { data } = await API.getCurrentWeather(city);
      setWeatherData(data);
    } catch (err) {
      const { message } = err.response.data;
      setErrorMessage(message);
    }
  };

  const handleLogout = async () => {
    try {
      await Auth.signOut();
    } catch (error) {
      setSignOutError(error.message);
    }
  };

  return (
    <div className="container">
      <button onClick={handleLogout} className="signOutBtn">Log out</button>
      {signOutError && <span className="error">{signOutError}</span>}
      <Input getWeatherData={getWeatherData} />
      {errorMessage && <span className="error">{errorMessage}</span>}
      {Object.keys(weatherData).length > 0 && (
        <WeatherDisplay weatherData={weatherData} />
      )}
    </div>
  );
};

export default withAuthenticator(App);
