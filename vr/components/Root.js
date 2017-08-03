import React from 'react';
import { PointLight, Sound, asset } from 'react-vr';
import Screens from './root/Screens';
import Stars from './root/Stars';

const Root = () =>
  <Stars>
    <PointLight distance={20} />
    <Screens />
    <Sound loop={true} volume={0.5} source={{ mp3: asset('Crystal.mp3') }} />
  </Stars>;

export default Root;
