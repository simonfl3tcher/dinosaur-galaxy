import React from 'react';
import { PointLight } from 'react-vr';
import Screens from './root/Screens';
import Stars from './root/Stars';

const Root = () =>
  <Stars>
    <PointLight distance={20} />
    <Screens />
  </Stars>;

export default Root;
