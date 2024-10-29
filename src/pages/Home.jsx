import React, { useState } from 'react';
import { useMediaQuery } from '@mui/material';
import Form from '../components/Form';
import Information from '../components/Information';
import { Component, Image, InfoBox } from '../styling/weather.style';


const Home = () => {
  const [result, setResult] = useState({});
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Component>
      {!isMobile && <Image />}
      <InfoBox className='info-box'>
        <Form setResult={setResult} />
        <Information result={result} />
      </InfoBox>
    </Component>
  );
};

export default Home;
