import { useForm } from "react-hook-form";
import "../styles/Input.css";

const Input = ({ getWeatherData }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { city } = data;
    getWeatherData(city);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <input
        type="text"
        name="city"
        placeholder="Enter city name"
        className="input"
        {...register("city", { required: true })}
      />
      <button type="submit" className="button">Search</button>
    </form>
  );
};

export default Input;
