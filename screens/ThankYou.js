import { View, Text, ActivityIndicator, useWindowDimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '../styles/Styles'
import Header from '../components/includes/Header'
import Footer from '../components/includes/Footer'
import ThankYouBody from '../components/screen body/ThankYouBody'

const ThankYou = ({route}) => {
    const pageName = 'ThankYou';
    const {height, wiidth} = useWindowDimensions();
    const {diagnosisResult} = route.params
    if (!diagnosisResult.length)
    {
      return (
        <View
        style={{ width: wiidth, height: height, alignItems: 'center', justifyContent: 'center'
        }}
        >
          <Text>No Results...</Text>

        </View>
      )
    }
    else
    {
      return (
        <SafeAreaView
        style={styles.safeArea}
        >
      
          <Header pageName={pageName} />
          <ThankYouBody/>
          <Footer isChecked={true} pageName={pageName} result={diagnosisResult}/>
      </SafeAreaView>
      )
    }
  
}

export default ThankYou