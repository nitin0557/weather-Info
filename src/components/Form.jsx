import React, { useState } from 'react';
import { getWeather } from '../services/api';
import { Container, ErrorMessage, GetButton, Input } from '../styling/weather.style';

const Form = ({ setResult }) => {
  const [data, setData] = useState({ city: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setError(''); 
  };

  const getWeatherInfo = async () => {
    if (!data.city) {
      setError('Please enter a valid city name');
      setTimeout(() => {
        setError('');
      }, 2000); // 2 seconds
      return;
    }

    let response = await getWeather(data.city);
    if (response) {
      setResult(response);
      setData({ city: '' });

      // Reset result after 100 seconds (100000 milliseconds)
      setTimeout(() => {
        setResult(null); // Reset the result state
      }, 2000); // 100 seconds
    }
  };

  return (
    <Container className="container">
      <Input
        placeholder="Enter City Name"
        value={data.city}
        onChange={handleChange}
        name="city"
        className="city-name"
      />
      <GetButton variant="contained" onClick={getWeatherInfo}>
        Get Weather
      </GetButton>

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default Form;
