import { View, Text, useWindowDimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/includes/Header'
import Footer from '../components/includes/Footer'
import SymptomQueryBody from '../components/screen body/SymptomQueryBody'
import { styles } from '../styles/Styles'

const SymptomQuery = () => {
  const pageName = 'SymptomQuery';
  return (
    <SafeAreaView
      style={styles.safeArea}
    >

      <Header pageName={pageName} />
      <SymptomQueryBody pageName={pageName} />
      <Footer isChecked={true} pageName={pageName} />
    </SafeAreaView>
  )
}

export default SymptomQuery