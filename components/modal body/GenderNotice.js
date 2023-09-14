import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../../styles/Styles'

const GenderNotice = ({ closeNoticeModal }) => {
  return (
    <View style={styles.noticeCard}>
      <Text style={styles.genderNoticeHeadnig}>Important notice</Text>
      <Text style={styles.noticeH2}>Why are there only two genders?</Text>
      <Text style={styles.noticeParagraph}>Gender and sex are a spectrum broader than just male and female.</Text>
      <Text style={styles.noticeParagraph}>However, this assessment technology can currently differentiate between female and male sexes only.</Text>
      <Text style={styles.noticeParagraph}>To continue the interview, please select the sex assigned to you at birth.</Text>
      <View
        className="w-full flex-col justify-between items-center"
      >
        <TouchableOpacity
          onPress={closeNoticeModal}
          style={styles.button}>
          <Text style={styles.buttonText} className="text-[#FFFBFB]">Ok, I understand. Let’s continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default GenderNotice