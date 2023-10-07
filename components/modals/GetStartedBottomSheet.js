import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { styles } from '../../styles/Styles'
import RegisterButton from '../buttons/RegisterButton'
import LogInButton from '../buttons/LogInButton'
import SignupForm from '../forms/SignupForm'
import SigninForm from '../forms/SigninForm'
import Toast from '../toasts/Toast'
import { SafeAreaView } from 'react-native-safe-area-context'

const GetStartedBottomSheet = ({ modalRef, snapPoints, onPress, openRegModal, openLoginModal, isRegModalVisible, closeRegModal, isLoginModalVisible, closeLoginModal }) => {
  const [loginStatus, setLoginStatus] = useState(0)
  const [regStatus, setRegStatus] = useState(0)
  const customizedToastOptions = {
    loginSuccess: {loginSuccessText: "Login Successful", loginSuccessColor: "#198754"},
    loginInvalid: {loginInvalidCredentialsText: "Invalid email or password", loginInvalidCredentialsColor: "#DC0D0D"},
    registerSuccess: {registerSuccessText: "Registration Successful", registerSuccessColor: "#198754"},
    registerPassLength: {registerPassLengthText: "Password length must be above 6 characters", registerPassLengthColor: "#DC0D0D"},
  }
  useEffect(()=>{
    console.log(loginStatus);
  },[loginStatus])
  return (
    <SafeAreaView>
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
          {
            regStatus === 200 ? 
            (<Toast text={customizedToastOptions.registerSuccess.registerSuccessText} color={customizedToastOptions.registerSuccess.registerSuccessColor}/>) : 
            regStatus === 400 ? (<Toast text={customizedToastOptions.registerPassLength.registerPassLengthText} color={customizedToastOptions.registerPassLength.registerPassLengthColor}/>) :
            regStatus === 422 ? (<Toast text={customizedToastOptions.registerPassLength.registerPassLengthText} color={customizedToastOptions.registerPassLength.registerPassLengthColor}/>) :

            <View/>
          }
          <View style={styles.modalBackground}>
            <TouchableOpacity
              onPress={closeRegModal}
              style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(0, 0, 0, 0.5)' }]} />
            <View style={[styles.modalContainer, { height: "90%" }]}>
              <SignupForm 
              openLoginModal={openLoginModal} 
              regModalState={isRegModalVisible} 
              closeRegModal={closeRegModal}
              
              />
            </View>
          </View>
        </Modal>
        <Modal
          visible={isLoginModalVisible}
          animationType='fade'
          transparent={true}
        >
          {
            loginStatus === 200 ? 
            (<Toast text={customizedToastOptions.loginSuccess.loginSuccessText} color={customizedToastOptions.loginSuccess.loginSuccessColor}/>) : 
            loginStatus === 400 ? (<Toast text={customizedToastOptions.loginInvalid.loginInvalidCredentialsText} color={customizedToastOptions.loginInvalid.loginInvalidCredentialsColor}/>) :
            loginStatus === 404 ? (<Toast text={customizedToastOptions.loginInvalid.loginInvalidCredentialsText} color={customizedToastOptions.loginInvalid.loginInvalidCredentialsColor}/>) : (<View/>)
          }
          <View style={styles.modalBackground}>
            <TouchableOpacity
              onPress={closeLoginModal}
              style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(0, 0, 0, 0.5)' }]} />
            <View style={[styles.modalContainer, { height: '80%' }]}>
              <SigninForm openRegModal={openRegModal} loginModalState={isLoginModalVisible} closeLoginModal={closeLoginModal} setLoginStatus={setLoginStatus}/>
            </View>
          </View>
        </Modal>
      </View>
    </BottomSheetModal>
    </SafeAreaView>
  )
}

export default GetStartedBottomSheet