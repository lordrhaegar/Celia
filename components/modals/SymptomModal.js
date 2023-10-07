import { View, Text, Modal, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import { styles } from '../../styles/Styles'
import SymptomSearchBody from '../modal body/SymptomSearchBody'

const SymptomModal = ({isSymptomModal, closeSymptomModal, symptom, setSymptom, addSymptomToList, setPageName /*openSelectSymptomModal*/}) => {
  return (
    <Modal
      visible={isSymptomModal}
      animationType='fade'
      transparent={true}
    >
      <KeyboardAvoidingView
      style={[styles.modalBackground]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableOpacity
          onPress={closeSymptomModal}
          style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(0, 0, 0, 0.5)' }]} />
        <View style={[styles.modalContainer, {maxHeight: '60%'}]}>
          <SymptomSearchBody closeSymptomModal={closeSymptomModal} symptom={symptom} setSymptom={setSymptom} addSymptomToList={addSymptomToList}/>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  )
}

export default SymptomModal