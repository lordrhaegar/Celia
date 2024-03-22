import React from 'react'
import Header from '../components/includes/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/Styles';
import { ScrollView, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import Diagnosisbody from '../components/screen body/Diagnosisbody';
import { useNavigation } from '@react-navigation/native';

const Diagnosis = ({route}) => {
    const pageName = 'Diagnosis';
    const {width, height} = useWindowDimensions();
    const {result} = route.params
    const navigator = useNavigation();
    return (
        <SafeAreaView style={{height: height, backgroundColor: "white"}}>
            
            {/* <View
                style={styles.continueButtonView}
            >
                <TouchableOpacity
                    style={[styles.button, {width: '100%'}]}
                >
                    <Text
                        className="text-[#FFFBFB]"
                        style={[styles.buttonText]}
                    >Continue
                    </Text>
                </TouchableOpacity>
            </View> */}
            <View
                style={styles.continueButtonView}
            >
                <TouchableOpacity
                onPress={()=>navigator.navigate("CeliaAi")}
                    style={[styles.button, { width: '100%' }]}
                >
                    <Text
                        className="text-[#FFFBFB]"
                        style={[styles.buttonText]}
                    >Perform further diagnoses using our AI</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>navigator.navigate("TalkToADoc")}
                    style={[styles.button2, { width: '100%', borderColor: "#0D91DC" }]}
                >
                    <Text
                        style={[styles.buttonText, {color: '#0D91DC'}]}
                    >Talk to a Doctor</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.diagnosisSafeArea}
            >
                <Header pageName={pageName} />
                <Diagnosisbody  disease={result}/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Diagnosis