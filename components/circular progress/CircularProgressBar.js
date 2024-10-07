import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Svg, Circle } from 'react-native-svg';

const CircularProgressBar = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    // Animate the progress value
    setAnimatedProgress(progress);
  }, [progress]);

  const radius = 50; // Adjust as needed
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - animatedProgress);

  return (
    <View style={styles.container}>
      <Svg height={2 * radius} width={2 * radius}>
        <Circle
          cx={radius}
          cy={radius}
          r={radius}
          fill="transparent"
          stroke="#00e0ff"
          strokeWidth={10}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
        />
      </Svg>
      <Text style={styles.progressText}>{Math.round(progress * 100)}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  progressText: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
  },
});

export default CircularProgressBar;
