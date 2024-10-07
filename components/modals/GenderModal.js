import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native'
import React from 'react'
import { styles } from '../../styles/Styles'
import GenderNotice from '../modal body/GenderNotice'
import CustomModal from './Modal'

const GenderModal = ({isGenderModal, closeGenderModal}) => {
  return (
    <CustomModal
    visibility={isGenderModal}
    closeModal={closeGenderModal}
    animationType={"fade"}
    component={<GenderNotice closeNoticeModal={closeGenderModal}/>}
    />
  )
}

export default GenderModal