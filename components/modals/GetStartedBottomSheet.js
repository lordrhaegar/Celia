import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { styles } from '../../styles/Styles'
import RegisterButton from '../RegisterButton'
import LogInButton from '../LogInButton'
import SignupForm from '../SignupForm'
import SigninForm from '../SigninForm'

const GetStartedBottomSheet = ({ modalRef, snapPoints, onPress, openRegModal, openLoginModal, isRegModalVisible, closeRegModal, isLoginModalVisible, closeLoginModal }) => {
  return (
    <BottomSheetModal
      ref={modalRef}
      index={0}
      snapPoints={snapPoints}
      backgroundStyle={{ borderRadius: 25, marginBottom: 870 }}
      onDismiss={onPress}
    >
      <View style={{ height: "90%", gap: 20 }} className="flex-col py-2  items-center justify-start">
        <View>
          <Text style={styles.title} className="text-[#0D91DC] font-medium">
            Let’s get you started
          </Text>
        </View>
        <RegisterButton openRegModal={openRegModal} />
        <LogInButton openLoginModal={openLoginModal} />
        <Modal
          visible={isRegModalVisible}
          animationType='fade'
          transparent={true}
        >
          <View style={styles.modalBackground}>
            <TouchableOpacity
              onPress={closeRegModal}
              style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(0, 0, 0, 0.5)' }]} />
            <View style={[styles.modalContainer, { height: "90%" }]}>
              <SignupForm openLoginModal={openLoginModal} regModalState={isRegModalVisible} closeRegModal={closeRegModal} />
            </View>
          </View>
        </Modal>
        <Modal
          visible={isLoginModalVisible}
          animationType='fade'
          transparent={true}
        >
          <View style={styles.modalBackground}>
            <TouchableOpacity
              onPress={closeLoginModal}
              style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(0, 0, 0, 0.5)' }]} />
            <View style={[styles.modalContainer, { height: '80%' }]}>
              <SigninForm openRegModal={openRegModal} loginModalState={isLoginModalVisible} closeLoginModal={closeLoginModal} />
            </View>
          </View>
        </Modal>
      </View>
    </BottomSheetModal>
  )
}

export default GetStartedBottomSheet