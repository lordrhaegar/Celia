import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '../styles/Styles'
import Header from '../components/includes/Header'
import Footer from '../components/includes/Footer'
import FeverQuestionnaireBody from '../components/screen body/FeverQuestionnaireBody'

const Fever = () => {
  const pageName = 'Fever';
  return (
    <SafeAreaView
      style={styles.safeArea}
    >
      <Header pageName={pageName} />
      <FeverQuestionnaireBody />
      <Footer isChecked={true} pageName={pageName} />
    </SafeAreaView>
  )
}

export default Fever