import { View, Text, TouchableOpacity, useWindowDimensions, Modal, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'
import { React, useEffect, useRef, useState } from 'react'
import { styles } from '../../styles/Styles';
import GetStartedBottomSheet from '../modals/GetStartedBottomSheet';
import Toast from '../toasts/Toast';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import RegisterButton from './RegisterButton';
import LogInButton from './LogInButton';
import SignupForm from '../forms/SignupForm';
import SigninForm from '../forms/SigninForm';
import Notice from '../modal body/Notice';

export default function GetStarted({ 
  backgroundColor
 }) {
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;
  const [loginStatus, setLoginStatus] = useState(0)
  const [regStatus, setRegStatus] = useState(0)
  const [isOnboardingModal, setIsOnboardingModal] = useState(false)
  const customizedToastOptions = {
    loginSuccess: {loginSuccessText: "Login Successful", loginSuccessColor: "#198754"},
    loginInvalid: {loginInvalidCredentialsText: "Invalid email or password", loginInvalidCredentialsColor: "#DC0D0D"},
    registerSuccess: {registerSuccessText: "Registration Successful", registerSuccessColor: "#198754"},
    registerPassLength: {registerPassLengthText: "Password length must be above 6 characters", registerPassLengthColor: "#DC0D0D"},
  }

  
  const openOnboardingModal = () => {
    setIsOnboardingModal(true)
  }
  const closeOnboardingModal = () => {
    setIsOnboardingModal(false)
  }
  useEffect(()=>{
    setIsOnboardingModal(false)
  },[])
  return (
    <View style={[styles.getStarteButtonViewStyle, {bottom:  0, left: "7%"}]}>
      <TouchableOpacity onPress={openOnboardingModal} style={[styles.button, {backgroundColor: backgroundColor}]} activeOpacity={0.6}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
      <GetStartedBottomSheet isOnboardingModal={isOnboardingModal} openOnboardingModal={openOnboardingModal} closeOnboardingModal={closeOnboardingModal} />
      </View>
  )
}
