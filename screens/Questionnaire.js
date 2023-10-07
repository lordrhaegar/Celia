import { View, Text, ScrollView, useWindowDimensions, Platform } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/includes/Header'
import Footer from '../components/includes/Footer'
import QuestionnaireBody from '../components/screen body/QuestionnaireBody'
import { styles } from '../styles/Styles'

const Questionnaire = () => {
  const pageName = 'Questionnaire'
  const height = useWindowDimensions().height
  return (
    <SafeAreaView
      style={[styles.safeArea, {marginBottom: Platform.OS === 'ios' ? -30 : 0}]}
    >
      <ScrollView
      showsVerticalScrollIndicator={false}
      bounces={false}
      >

        <Header pageName={pageName} />
        <QuestionnaireBody />
        <Footer isChecked={true} pageName={pageName} />

      </ScrollView>
    </SafeAreaView>
  )
}

export default Questionnaire