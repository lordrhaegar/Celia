import { View, Text, TouchableOpacity, useWindowDimensions, Modal, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'
import { React, useRef, useState } from 'react'
import { styles } from '../../styles/Styles';
import GetStartedBottomSheet from '../modals/GetStartedBottomSheet';
import Toast from '../toasts/Toast';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import RegisterButton from './RegisterButton';
import LogInButton from './LogInButton';
import SignupForm from '../forms/SignupForm';
import SigninForm from '../forms/SigninForm';

export default function GetStarted({ onPress }) {
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;
  const [isRegModalVisible, setIsRegModalVisible] = useState(false);
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const [loginStatus, setLoginStatus] = useState(0)
  const [regStatus, setRegStatus] = useState(0)
  const customizedToastOptions = {
    loginSuccess: {loginSuccessText: "Login Successful", loginSuccessColor: "#198754"},
    loginInvalid: {loginInvalidCredentialsText: "Invalid email or password", loginInvalidCredentialsColor: "#DC0D0D"},
    registerSuccess: {registerSuccessText: "Registration Successful", registerSuccessColor: "#198754"},
    registerPassLength: {registerPassLengthText: "Password length must be above 6 characters", registerPassLengthColor: "#DC0D0D"},
  }

  const openLoginModal = () => {
    setIsLoginModalVisible(prevState => !prevState);
    setIsRegModalVisible(false)
  };
  const closeLoginModal = () => {
    setIsLoginModalVisible(false);
  };

  const openRegModal = () => {
    setIsRegModalVisible(prevState => !prevState);
    setIsLoginModalVisible(false)
  };
  const closeRegModal = () => {
    setIsRegModalVisible(false);
  };
  const modalRef = useRef(null);
  const snapPoints = ["35%"];
  const openBottomSheetModal = () => {
    modalRef.current?.present();
  }
  return (
    <View style={{ position: 'absolute', right: width * 0.1, top: height - 110 }}>
      <TouchableOpacity onPress={
        () => {
          openBottomSheetModal();
          onPress();
        }
      } style={styles.button} className=" bg-[#0D91DC]" activeOpacity={0.6}>
        <Text style={styles.buttonText} className="text-[#FFFBFB]">Get Started</Text>
      </TouchableOpacity>
      <GetStartedBottomSheet modalRef={modalRef} snapPoints={snapPoints} onPress={onPress} openRegModal={openRegModal} openLoginModal={openLoginModal} isRegModalVisible={isRegModalVisible} closeRegModal={closeRegModal} isLoginModalVisible={isLoginModalVisible} closeLoginModal={closeLoginModal} />
      </View>
  )
}
