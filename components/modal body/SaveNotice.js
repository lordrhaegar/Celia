import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../../styles/Styles'
import { useNavigation } from '@react-navigation/native'

const SaveNotice = ({closeNoticeModal}) => {
  const navigator = useNavigation();
  const saveData = () => {
    navigator.navigate('Questionnaire')
  }
  return (
    <View style={styles.noticeCard}>
      <Text style={styles.genderNoticeHeadnig}>Important notice</Text>
      <Text style={styles.noticeH2}>Save your age and sex information for faster usage next time.</Text>
      <View
        className="w-full flex-col justify-between items-center h-[130]"
      >
        <TouchableOpacity
          onPress={()=>{
            closeNoticeModal()
            saveData()
          }}
          style={styles.button}>
          <Text style={styles.buttonText} className="text-[#FFFBFB]">Yes, save and continue</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>{
            closeNoticeModal()
            navigator.navigate('Questionnaire')
          }}
          style={styles.button2}>
          <Text style={styles.buttonText}>Don’t save, but continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SaveNotice