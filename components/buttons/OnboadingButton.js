import { View, Text, TouchableOpacity, useWindowDimensions} from 'react-native'
import { React, useEffect, useState } from 'react'
import { styles } from '../../styles/Styles';
import GetStartedBottomSheet from '../modals/GetStartedBottomSheet';

const OnboadingButton = (props) => {
    const width = useWindowDimensions().width;
    const height = useWindowDimensions().height;
    const [isRegModalVisible, setIsRegModalVisible] = useState(false);
    const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
    const [loginStatus, setLoginStatus] = useState(0)
    const [regStatus, setRegStatus] = useState(0)
    const [isOnboardingModal, setIsOnboardingModal] = useState(false)
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
      <View style={props.viewStyle}>
        <TouchableOpacity onPress={
          () => {
            openOnboardingModal();
          }
        } style={[props.buttonStyle, {backgroundColor: props.backgroundColor}]} activeOpacity={0.6}>
          <Text style={props.buttonTextStyle}>{props.title}</Text>
        </TouchableOpacity>
        <GetStartedBottomSheet isOnboardingModal={isOnboardingModal} openOnboardingModal={openOnboardingModal} closeOnboardingModal={closeOnboardingModal} openRegModal={openRegModal} openLoginModal={openLoginModal} isRegModalVisible={isRegModalVisible} closeRegModal={closeRegModal} isLoginModalVisible={isLoginModalVisible} closeLoginModal={closeLoginModal} />
        </View>
    )
}

export default OnboadingButton