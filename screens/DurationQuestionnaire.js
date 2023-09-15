import { View, Text, useWindowDimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/includes/Header'
import SymptomQueryBody from '../components/screen body/SymptomQueryBody'
import Footer from '../components/includes/Footer'
import DurationQuestionnaireBody from '../components/screen body/DurationQuestionnaireBody'
import { styles } from '../styles/Styles'

const DurationQuestionnaire = () => {
  const pageName = 'DurationQuestionnaire'
  const height = useWindowDimensions().height;
  return (
    <SafeAreaView
      style={styles.safeArea}
    >
      <Header pageName={pageName} />
      <DurationQuestionnaireBody />
      <Footer isChecked={true} pageName={pageName} />
    </SafeAreaView>
  )
}

export default DurationQuestionnaire