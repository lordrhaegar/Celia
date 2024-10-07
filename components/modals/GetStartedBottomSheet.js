import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { styles } from '../../styles/Styles'
import RegisterButton from '../buttons/RegisterButton'
import LogInButton from '../buttons/LogInButton'
import SignupForm from '../forms/SignupForm'
import SigninForm from '../forms/SigninForm'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { setUserType } from '../../features/authSlice'
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message'

const GetStartedBottomSheet = ({
  isOnboardingModal,
  openOnboardingModal,
  closeOnboardingModal }) => {
  const dispatch = useDispatch();
  const navigator = useNavigation();
  // const [loginStatus, setLoginStatus] = useState(0)
  const [regStatus, setRegStatus] = useState(0)
  const {userType} = useSelector((state)=>state.auth)
  const [isRegModalVisible, setIsRegModalVisible] = useState(false);
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const customizedToastOptions = {
    loginSuccess: { loginSuccessText: "Login Successful", loginSuccessColor: "#198754" },
    loginInvalid: { loginInvalidCredentialsText: "Invalid email or password", loginInvalidCredentialsColor: "#DC0D0D" },
    registerSuccess: { registerSuccessText: "Registration Successful", registerSuccessColor: "#198754" },
    registerPassLength: { registerPassLengthText: "Password length must be above 6 characters", registerPassLengthColor: "#DC0D0D" },
  }
  const toastConfig = {
    /*
      Overwrite 'success' type,
      by modifying the existing `BaseToast` component
    */
    success: (props) => (
      <BaseToast
        {...props}
        style={{backgroundColor: "#198754" }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 15,
          fontWeight: '400',
          fontFamily: "Gilroy-M",
          color: "white"
        }}
      />
    ),
    /*
      Overwrite 'error' type,
      by modifying the existing `ErrorToast` component
    */
    error: (props) => (
      <ErrorToast
        {...props}
        style={{backgroundColor: "#DC0D0D", flexWrap: 'wrap' }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 17,
          color: "white"
        }}
        text2Style={{
          fontSize: 15
        }}
      />
    ),
      }
  const openLoginModal = () => {
    setIsLoginModalVisible(prevState => !prevState);
    setIsRegModalVisible(false)
  };
  const closeLoginModal = () => {
    closeOnboardingModal()
    setIsLoginModalVisible(false);
  };

  const openRegModal = () => {
    setIsRegModalVisible(prevState => !prevState);
    setIsLoginModalVisible(false)
  };
  const closeRegModal = () => {
    closeOnboardingModal()
    setIsRegModalVisible(false);
  };
  const setAuthStatus = (text, type)=>{
    Toast.show({
      type: type,
      text1: text
    })
  }
  return (
    <SafeAreaView>
      <Modal
        visible={isOnboardingModal}
        animationType='fade'
        transparent={true}
      >
        <View style={styles.modalBackground}>
          <TouchableOpacity
            onPress={closeOnboardingModal}
            style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(0, 0, 0, 0.5)' }]} />
          <View style={[styles.modalContainer, { flex: 0, paddingVertical: 20 }]}>
            <View style={{ gap: 20 }} className="flex-col py-2  items-center justify-start">
              <View>
                <Text style={styles.title} className="text-[#0D91DC] font-medium">
                  Let’s get you started
                </Text>
              </View>
              <RegisterButton backgroundColor={userType === 'Doctor'? '#7CD1D1': "#0D91DC"} closeOnboardingModal={closeOnboardingModal} openRegModal={openRegModal} />
              <LogInButton  openLoginModal={openLoginModal} />
              <TouchableOpacity
                onPress={() => {
                  closeOnboardingModal()
                  if (userType === "Doctor") {
                    dispatch(setUserType("Patient"))
                  navigator.navigate('Base')
                  }else{
                    dispatch(setUserType("Doctor"))
                    navigator.navigate('DocRequirements')
                  }
                }
                }
              >
                <Text style={[styles.buttonText, { color: userType === "Doctor"? "#0D91DC" : '#63A7A7' }]}>{userType === "Doctor"? 'I\'m a patient':'I am an in-app Doctor'}</Text>
              </TouchableOpacity>
              <Modal
                visible={isRegModalVisible}
                animationType='fade'
                transparent={true}
              >
                {
                  regStatus === 200 ?
                    (<Toast text={customizedToastOptions.registerSuccess.registerSuccessText} color={customizedToastOptions.registerSuccess.registerSuccessColor} />) :
                    regStatus === 400 ? (<Toast text={customizedToastOptions.registerPassLength.registerPassLengthText} color={customizedToastOptions.registerPassLength.registerPassLengthColor} />) :
                      regStatus === 422 ? (<Toast text={customizedToastOptions.registerPassLength.registerPassLengthText} color={customizedToastOptions.registerPassLength.registerPassLengthColor} />) :

                        <View />
                }
                <View style={styles.modalBackground}>
                  <TouchableOpacity
                    onPress={closeRegModal}
                    style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(0, 0, 0, 0.5)' }]} />
                    <Toast config={toastConfig}/>
                  <View style={[styles.modalContainer, { height: "80%" }]}>
                    <SignupForm
                      openLoginModal={openLoginModal}
                      regModalState={isRegModalVisible}
                      closeRegModal={closeRegModal}
                      setAuthStatus={setAuthStatus}
                    />
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
                    <Toast config={toastConfig}/>
                  <View style={[styles.modalContainer, { height: '60%' }]}>
                    <SigninForm 
                    openRegModal={openRegModal} 
                    loginModalState={isLoginModalVisible} 
                    closeLoginModal={closeLoginModal} 
                    setAuthStatus={setAuthStatus} />
                  </View>
                </View>
              </Modal>
            </View>
          </View>
        </View>
      </Modal>
      {/* <BottomSheetModal
        ref={modalRef}
        index={0}
        snapPoints={snapPoints}
        backgroundStyle={{ borderRadius: 25, marginBottom: 870 }}
        onDismiss={onPress}
      >

      </BottomSheetModal> */}
    </SafeAreaView>
  )
}

export default GetStartedBottomSheet