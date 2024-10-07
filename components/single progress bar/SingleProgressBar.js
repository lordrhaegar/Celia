import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Progress from 'react-native-progress';
import { styles } from '../../styles/Styles';
import { backgroundColors, checkUserType } from '../../constants/constants';
import { useSelector } from 'react-redux';

const SingleProgressBar = (props) => {
    const {percentage, height} = props
    const clampedPercentage = Math.min(100, Math.max(0, percentage));
    const progress = Math.min(100, clampedPercentage); 
    const {userType} = useSelector((state)=>state.auth)
    const {patientSelectedBackground, doctorSelectedBackground} = backgroundColors
  return (
    <View style={styles.progressBarContainer}>
          <Progress.Bar
            progress={progress/100}
            width={250}
            height={height}
            color={checkUserType(userType)?patientSelectedBackground:doctorSelectedBackground}
            borderColor='#ffffff'
            unfilledColor='#EAE8E8'
          />
        </View>
  )
}

export default SingleProgressBar