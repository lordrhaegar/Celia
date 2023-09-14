import { StatusBar } from 'expo-status-bar';
import { useCallback, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Overlay from '../components/Overlay'
import OnboardingScreen from './OnboardingScreen';
import SkipButton from '../components/SkipButton';
import GetStarted from '../components/GetStarted';
import { useFonts } from 'expo-font';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import * as SplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { View, Text, useWindowDimensions } from 'react-native';
import { styles } from '../styles/Styles';

SplashScreen.preventAutoHideAsync();

export default function BaseWrapper() {
    const height = useWindowDimensions().height;
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [fontsLoaded, fontError] = useFonts({
        'Gilroy-B': require('../assets/fonts/Gilroy-ExtraBold.otf'),
        'Gilroy-M': require('../assets/fonts/Gilroy-Medium.ttf'),
        'Gilroy-l': require('../assets/fonts/Gilroy-Light.otf'),
        'Gilroy': require('../assets/fonts/Gilroy-Regular.ttf'),
    });
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }
    const handleGetStartedPress = () => {
        setIsModalVisible(!isModalVisible);
    };
    return (
        <GestureHandlerRootView>
            <BottomSheetModalProvider>
                <SafeAreaView onLayout={onLayoutRootView}>
                    <View style={{ height: height }}>
                        <View style={{ height: "10%" }} className="flex-row px-5 items-center justify-between">
                            <Text style={styles.title} className="text-black font-medium">Hi there</Text>
                            <SkipButton onPress={handleGetStartedPress} />
                        </View>
                        <OnboardingScreen />
                        <GetStarted isModalVisible={isModalVisible} onPress={handleGetStartedPress} />
                        {
                            isModalVisible ? (<Overlay  />) : (<View />)
                        }
                        <StatusBar style='auto' />
                    </View>
                </SafeAreaView>
            </BottomSheetModalProvider>
        </GestureHandlerRootView>
    );
}

