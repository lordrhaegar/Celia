import { Dimensions, useWindowDimensions } from 'react-native';

export const sthetoscope = require('../assets/images/sthetoscope.png');
export const aiconnect = require('../assets/images/aiconnect.png');
export const doctor = require('../assets/images/doctor.png');
export const logo = require("../assets/images/logo.png")
export const width = () => useWindowDimensions().width
export const height = () => useWindowDimensions().height
export const slides = [
    {
      id: 1,
      image: sthetoscope,
      title: 'Easy and fast diagnosis',
      description: 'Discover a calming path to swift and easy diagnoses through Celia.',
    },
    {
      id: 2,
      image: aiconnect,
      title: 'AI powered medication',
      description: 'Discover the calm efficacy of AI-driven medication for your health.',
    },
    {
      id: 3,
      image: doctor,
      title: 'Standby doctors',
      description: 'Embrace peace of mind with 24/7 standby doctors by your side.',
    },
  ];