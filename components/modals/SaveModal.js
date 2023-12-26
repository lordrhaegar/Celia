import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { styles } from '../../styles/Styles'
import SaveNotice from '../modal body/SaveNotice'
import CustomModal from './Modal'

const SaveModal = (props) => {
  const { isSaveModal, closeSaveModal, date, selectedGender } = props
  return (
    <CustomModal
    visibility={isSaveModal}
    closeModal={closeSaveModal}
    animationType={"fade"}
    component={<SaveNotice date={date} selectedGender={selectedGender} closeNoticeModal={closeSaveModal}/>}
    />
  )
}

export default SaveModal