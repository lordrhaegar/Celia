import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '../styles/Styles'
import Header from '../components/includes/Header'
import Footer from '../components/includes/Footer'
import ThankYouBody from '../components/screen body/ThankYouBody'

const ThankYou = () => {
    const pageName = 'ThankYou';
  return (
    <SafeAreaView
    style={styles.safeArea}
    >
  
      <Header pageName={pageName} />
      <ThankYouBody/>
      <Footer isChecked={true} pageName={pageName} />
  </SafeAreaView>
  )
}

export default ThankYou