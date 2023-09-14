import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { styles } from '../../styles/Styles'
import SymptomSearchBody from '../modal body/SymptomSearchBody'

const SymptomModal = ({isSymptomModal, closeSymptomModal, symptom, setSymptom, openSelectSymptomModal}) => {
  return (
    <Modal
      visible={isSymptomModal}
      animationType='fade'
      transparent={true}
    >
      <View style={styles.modalBackground}>
        <TouchableOpacity
          onPress={closeSymptomModal}
          style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(0, 0, 0, 0.5)' }]} />
        <View style={styles.modalContainer}>
          <SymptomSearchBody openSelectSymptomModal={openSelectSymptomModal} symptom={symptom} setSymptom={setSymptom}/>
        </View>
      </View>
    </Modal>
  )
}

export default SymptomModal