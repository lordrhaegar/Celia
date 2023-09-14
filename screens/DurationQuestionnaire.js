import { View, Text, useWindowDimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import SymptomQueryBody from '../components/screen body/SymptomQueryBody'
import Footer from '../components/Footer'
import DurationQuestionnaireBody from '../components/screen body/DurationQuestionnaireBody'
import { styles } from '../styles/Styles'

const DurationQuestionnaire = () => {
    const pageName = 'DurationQuestionnaire'
    const height = useWindowDimensions().height;
  return (
    <SafeAreaView
    style={styles.fullScreen}
    >
    <View
      style={{paddingTop: 50, flex: 1 }}
    >
      <Header pageName={pageName} />
      <DurationQuestionnaireBody />
      <Footer isChecked={true} pageName={pageName} />
    </View>
  </SafeAreaView>
  )
}

export default DurationQuestionnaire