import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '../styles/Styles'
import Header from '../components/includes/Header'
import Footer from '../components/includes/Footer'
import SymptomProgressBody from '../components/screen body/SymptomProgressBody'

const SymptomProgress = () => {
  const pageName = 'SymptomProgress';
  return (
    <SafeAreaView
      style={styles.safeArea}
    >

      <Header pageName={pageName} />
      <SymptomProgressBody />
      <Footer isChecked={true} pageName={pageName} />

    </SafeAreaView>
  )
}

export default SymptomProgress