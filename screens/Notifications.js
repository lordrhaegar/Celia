import { View, Text, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { docDetailsStyle } from '../styles/docDetailsStyles'
import { SafeAreaView } from 'react-native-safe-area-context';
import DocHeader from '../components/includes/DocHeader';
import { styles } from '../styles/Styles';
import { AntDesign, Entypo, MaterialIcons } from '@expo/vector-icons';
import { MotiView } from 'moti';
import { Easing } from 'react-native-reanimated';
import SingleProgressBar from '../components/single progress bar/SingleProgressBar';
import { backgroundColors, checkUserType, percentageComplete } from '../constants/constants';
import { useSelector } from 'react-redux';
import Checkbox from 'expo-checkbox';
import { doctorsStyles } from '../styles/doctorsStyles';

const NotificationScreen = ({ navigation, route }) => {
    const { height } = Dimensions.get('window');
    const {data} = route.params
    const {personalInformation, profileImage} = data
    const [isAlertArrowUp, setIsAlertArrowUp] = useState(true);
    const toggleAlertArrow = () => {
        setIsAlertArrowUp(!isAlertArrowUp);
    }
    const {userType} = useSelector((state)=>state.auth)
    const {patientSelectedBackground, doctorSelectedBackground} = backgroundColors
    const docAlerts = [
        {
            title: "Profile Details",
            subHeading: "Upload a profile picture",
            progressbar: <SingleProgressBar percentage={percentageComplete(profileImage)} height={4}/>,
            percentage: percentageComplete(profileImage),
            checkIcon:
            <Checkbox
                value={percentageComplete(profileImage) === 100}
                style={{ borderRadius: 20 }}
                color={checkUserType(userType)?patientSelectedBackground:doctorSelectedBackground}
            />,
            fn: () => {}
        },
        {
            title: "Profile Details",
            subHeading: "Update your personal information.",
            progressbar: <SingleProgressBar percentage={percentageComplete(personalInformation)} height={4}/>,
            percentage: percentageComplete(personalInformation),
            checkIcon:
            <Checkbox
                value={percentageComplete(personalInformation) === 100}
                style={{ borderRadius: 20 }}
                color={checkUserType(userType)?patientSelectedBackground:doctorSelectedBackground}
            />,
            fn: () => {}
        }
    ]
    useEffect(() => {
        console.log(profileImage);
    },[])
    return (
        <SafeAreaView
            style={{ backgroundColor: '#ffffff', height: height }}
        >
            <ScrollView contentContainerStyle={[docDetailsStyle.container, {paddingHorizontal: 5}]}>
                <DocHeader title={"Notifications"} navigation={navigation} />
                <View
                    style={styles.dropDownCard}>
                    <View style={styles.dropDownHeader}>
                        <Text style={styles.alertDropDownHeading}>System alerts</Text>
                        {/* <Entypo
                            onPress={toggleAlertArrow}
                            name={isAlertArrowUp ? 'chevron-up' : 'chevron-down'}
                            color='#A5ADB1'
                            size={20}
                        /> */}
                    </View>
                    {
                        isAlertArrowUp ? (
                            <MotiView
                                from={{ scaleY: 0 }}
                                animate={{ scaleY: 1 }}
                                exit={{ scaleY: 0 }}
                                transition={{
                                    type: 'spring',
                                    duration: 2000,
                                    ease: Easing.bounce
                                }}
                                style={{ width: "100%" }}
                            >
                                {
                                    docAlerts.map((alrt, idx) => {
                                        return (
                                            <TouchableOpacity
                                                onPress={alrt.fn}
                                                activeOpacity={1}
                                                key={idx} style={[styles.alertDropDownItems, {paddingVertical: 10, marginBottom: 20}]}>
                                                <View style={{width: "80%"}}>
                                                    <Text
                                                        style={styles.alertDropDownItemsH1}
                                                    >{alrt.title}</Text>
                                                    <Text
                                                        style={styles.alertDropDownItemsText}
                                                    >{alrt.subHeading}</Text>
                                                    {
                                                        alrt.progressbar !== "" &&
                                                        <View className="flex-row items-center">
                                                        <View style={{ height: 30 }}>
                                                            {alrt.progressbar}
                                                        </View>
                                                        <Text style={[styles.alertDropDownItemsText, {marginLeft: 10}]}>{Math.round(alrt.percentage)}%</Text>
                                                    </View>
                                                    }
                                                    
                                                </View>
                                                <View>{alrt.checkIcon}</View>
                                            </TouchableOpacity>
                                        )
                                    })
                                }
                            </MotiView>
                        ) : (<View />)
                    }
                    <MotiView
                        from={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        exit={{ scaleY: 0 }}
                        transition={{
                            type: 'spring',
                            duration: 2000,
                            ease: Easing.bounce
                        }} >
                        <TouchableOpacity
                            activeOpacity={1}
                            // onPress={() => navigator.navigate("Notifications")}
                            style={doctorsStyles.careWorkersItemContainer}>
                            <Text style={doctorsStyles.careWorkersItemText}>View all system alerts</Text>
                            <AntDesign
                                name='arrowright'
                                size={20}
                                color='#666B6E'
                            />
                        </TouchableOpacity>
                    </MotiView>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default NotificationScreen