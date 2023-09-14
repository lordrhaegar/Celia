import { View, Text, ScrollView, useWindowDimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import Footer from '../components/Footer'
import QuestionnaireBody from '../components/screen body/QuestionnaireBody'
import { styles } from '../styles/Styles'

const Questionnaire = () => {
  const pageName = 'Questionnaire'
  const height = useWindowDimensions().height
  return (
    <SafeAreaView
    >
      <ScrollView
      >
        <View
        style={{paddingTop: 50, flex: 1}}
        >
          <Header pageName={pageName} />
          <QuestionnaireBody />
          <Footer isChecked={true} pageName={pageName} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Questionnaire