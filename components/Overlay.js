import React from 'react';
import { View, StyleSheet } from 'react-native';

const Overlay = () => {
  return <View style={{...StyleSheet.absoluteFillObject, backgroundColor:'rgba(0, 0, 0, 0.5)' }}></View>;
};

export default Overlay;
