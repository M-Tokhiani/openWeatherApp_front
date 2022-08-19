import axios from "axios";
const token = localStorage.getItem("token");

const API = {
  getCurrentWeather: async (city) => {
    const { data } = await axios.get(
      `https://p85jo6tdkd.execute-api.eu-west-1.amazonaws.com/dev/getCurrentWeather?city=${city}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return { data };
  },
};

export default API;
