import { View, Text, StyleSheet, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Progress from 'react-native-progress';
import { styles } from '../styles/Styles';

const Progressbars = ({ percentage }) => {
  const height = 4;
  const clampedPercentage = Math.min(100, Math.max(0, percentage));

  const progress1 = Math.min(33.33, clampedPercentage); 
  const remainingPercentage = clampedPercentage - progress1;
  const progress2 = Math.min(33.33, remainingPercentage); 
  const progress3 = remainingPercentage - progress2; 
  const width = useWindowDimensions().width

  return (
    <View style={styles.pillsContainer}>
      <View
      style={{width: '80%'}}
      className="flex-row justify-between"
      >
        <View style={styles.progressBarContainer}>
          <Progress.Bar
            progress={progress1 / 33.3}
            width={100}
            height={height}
            color="#0D91DC"
            borderColor='#ffffff'
            unfilledColor='#EAE8E8'
          />
          <Text style={styles.pillText}>Very unlikely</Text>
        </View>

        <View style={styles.progressBarContainer}>
          <Progress.Bar
            progress={progress2 / 33.3}
            width={100}
            height={height}
            color="#0D91DC"
            borderColor='#ffffff'
            unfilledColor='#EAE8E8'
          />
          <Text style={styles.pillText}>            </Text>
        </View>

        <View
          style={[styles.progressBarContainer, { alignItems: 'flex-end' }]}>
          <Progress.Bar
            progress={progress3 / 33.3}
            width={100}
            height={height}
            color="#0D91DC"
            borderColor='#ffffff'
            unfilledColor='#EAE8E8'
          />
          <Text style={styles.pillText}>Very likely</Text>
        </View>
      </View>
      <View
        style={[styles.progressBarContainer, { alignItems: 'flex-end', width: '20%' }]}
      >
        <Text
          style={styles.percentageText}
        >{percentage}%</Text>
      </View>
    </View>
  );
};

export default Progressbars