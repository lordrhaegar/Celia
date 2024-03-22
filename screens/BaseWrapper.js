import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Overlay from '../components/Overlay'
import OnboardingScreen from './OnboardingScreen';
import SkipButton from '../components/buttons/SkipButton';
import GetStarted from '../components/buttons/GetStarted';
import { View, Text, useWindowDimensions, ActivityIndicator } from 'react-native';
import { styles } from '../styles/Styles';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import OnboadingButton from '../components/buttons/OnboadingButton';
import { getDocFromStorage, getUserFromStorage, getUserType } from '../constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setUserType } from '../features/authSlice';
import { CommonActions } from '@react-navigation/native';


export default function BaseWrapper({navigation}) {
    const height = useWindowDimensions().height;
    const dispatch = useDispatch()
    const {userType} = useSelector((state)=>state.auth)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [fontLoaded, setFontLoaded] = useState(true);
    const [fontsLoaded, fontError] = useFonts({
        'Gilroy-B': require('../assets/fonts/Gilroy-ExtraBold.otf'),
        'Gilroy-M': require('../assets/fonts/Gilroy-Medium.ttf'),
        'Gilroy-l': require('../assets/fonts/Gilroy-Light.otf'),
        'Gilroy': require('../assets/fonts/Gilroy-Regular.ttf'),
    });
    useEffect(() => {
        SplashScreen.preventAutoHideAsync()
    }, []);
    useEffect(()=>{
        if (fontsLoaded || fontError) {
            SplashScreen.hideAsync();
            (async()=>{
                const result = await getUserType(dispatch)
                if (result === "Patient") {
                    getUserFromStorage(navigation,dispatch, CommonActions)
                }else if (result === "Doctor"){
                    getDocFromStorage(navigation,dispatch, CommonActions)
                }
            })()
        }
    },[fontsLoaded, fontError])
    // const onLayoutRootView = useCallback(async () => {
    //     if (fontsLoaded || fontError) {
    //         await SplashScreen.hideAsync();
    //     }
    // }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }
    const handleGetStartedPress = () => {
        setIsModalVisible(!isModalVisible);
    };


    return (
        <SafeAreaView >
            {
                !fontLoaded ? (<ActivityIndicator size={30} />) :
                (<View style={{ height: height }}>
                    <View style={{ height: "10%" }} className="flex-row px-5 items-center justify-between">
                        <Text style={styles.title} className="text-black font-medium">Hi there</Text>
                        {/* <SkipButton onPress={handleGetStartedPress} /> */}
                        <OnboadingButton viewStyle={styles.skipButtonViewStyle} buttonStyle={styles.skipButtonStyle} backgroundColor="white" buttonTextStyle={styles.skipButtonText} title="Skip"/>
                    </View>
                    <OnboardingScreen />
                    <GetStarted backgroundColor="#0D91DC" />
                    <StatusBar style='auto' />
                </View>)
            }
        </SafeAreaView>
    );
}

