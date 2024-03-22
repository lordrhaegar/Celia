import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import DocHeader2 from '../components/includes/DocHeader2'
import { styles } from '../styles/Styles'
import { availabilitySetupStyles } from '../styles/availabilitySetupStyles'
import TimePicker from '../components/time picker/TimePicker'
import { docDetailsStyle } from '../styles/docDetailsStyles'
import ConnectButton from '../components/buttons/ConnectButton'
import { connectButtonStyles } from '../styles/connectButtonStyles'
import Button from '../components/buttons/Button'
import { MotiView } from 'moti'
import docTimePickerStyle from '../styles/docTimePickerStyle'
import { Feather, Ionicons } from '@expo/vector-icons'
import { Easing } from 'react-native-reanimated'
import axios from 'axios'
import { apiBaseUrl } from '../constants/constants'
import { useSelector } from 'react-redux'
import CustomModal from '../components/modals/Modal'
import CeliaPreloader from '../components/preloader/CeliaPreloader'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CommonActions } from '@react-navigation/native'
import Calendar from '../components/calender/CalendarPreview'

const AvailabilitySetupPreview = ({ route, navigation }) => {
    const { comms, availa_bility } = route.params
    const { height, width } = Dimensions.get('window')
    const [communication_prefrence, setCommunication_prefrence] = useState("")
    const [availability, setAvailability] = useState([])
    const { userToken } = useSelector((state) => state.auth)
    const [isModalVisible, setisModalVisible] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setCommunication_prefrence(comms)
        setAvailability(availa_bility)
    }, [])
    const closeModal = () => {
        setisModalVisible(false)
    }
    const handleSaveSchedule = async () => {
        setIsLoading(true)
        try {
            const saveSchedule = await axios.put(`${apiBaseUrl}/doctor/update/availability`, {
                availability
            }, {
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            })
            if (saveSchedule.status === 200 || saveSchedule.status === 201) {
                setisModalVisible(true)
            }
        } catch (error) {
        }finally{
            setIsLoading(false)
        }
    }
    const modalContent = (
        <View style={availabilitySetupStyles.successModalBox}>
            <View style={availabilitySetupStyles.successIconContainer}>
                <MotiView 
                from={{rotateY: "0deg"}}
                animate={{rotateY: "360deg"}}
                transition={{
                    type: 'spring',
                    duration: 5000,
                    ease: Easing.bounce,
                    loop: true
                }}
                style={availabilitySetupStyles.successIconBackground}>
                    <Ionicons
                        name='checkmark-circle-outline'
                        size={24}
                        color={"#0A74B0"}
                    />
                </MotiView>
            </View>
            <View style={availabilitySetupStyles.successIconContainer}>
                <Text style={availabilitySetupStyles.successModalTextH1}>Successful</Text>
            </View>
            <View style={[availabilitySetupStyles.successIconContainer, { height: 100 }]}>
                <Text style={availabilitySetupStyles.successModalTextP}>
                    Your availability has been set and patients can now create appointments with you at the set time. Please do well to always make sure you meet with them at the appointed time as this will improve your rating.
                </Text>
            </View>
            <View>
                <Button
                    textColor="#FFFBFB"
                    buttonStyle={[styles.button, { width: "100%" }]}
                    title="Continue to home"
                    backgroundColor='#7CD1D1'
                    viewStyle={{ paddingHorizontal: 5 }}
                    onPress={()=>{
                        navigation.dispatch(CommonActions.reset({
                            index: 0,
                            routes: [{
                                name: "App"
                            }]
                        }))
                    }}
                />
            </View>
        </View>
    )
    return (
        <SafeAreaView>
        <ScrollView
            contentContainerStyle={[availabilitySetupStyles.scrollView, { paddingTop: 0, paddingBottom: 50 }]}>
            <DocHeader2
                title="Availability Setup"
                navigator={navigation}
            />
            <View >

                <View style={{ gap: 20 }} className="px-5">
                    <Text style={availabilitySetupStyles.p}>
                        Set up your calendar so patients can know when you would be available for consultations.
                    </Text>
                    <View >
                        <Text style={availabilitySetupStyles.p}>
                            Choose the days of the week you’ll be avaialable in and the time for each particular day
                        </Text>
                    </View>
                    <Calendar doctor={availability} />
                </View>

            </View>
            <View style={{ gap: 20 }} className="px-5">
                <Text style={availabilitySetupStyles.p}>
                    Preferred mode of communication
                </Text>
                {
                    comms === "video" ? (
                        <ConnectButton
                            width="45%"
                            iconStyle={[connectButtonStyles.iconStyle, { backgroundColor: "#6EBDEA" }]}
                            iconName={"video"}
                            title={"Video call"}
                            borderColor={"#63A7A7"}
                            textStyle={connectButtonStyles.buttonText} />
                    ) : (
                        <ConnectButton
                            width="45%"
                            iconStyle={[connectButtonStyles.iconStyle, { backgroundColor: '#96DADA' }]}
                            iconName={"telephone"}
                            title={"Voice call"}
                            borderColor={"#63A7A7"}
                            textStyle={connectButtonStyles.buttonText} />
                    )
                }

            </View>
            <View className="gap-5 px-5 mt-5">
                <Button
                    textColor="#FFFBFB"
                    buttonStyle={[styles.button, { width: "100%" }]}
                    title="Save my schedule"
                    backgroundColor='#7CD1D1'
                    viewStyle={{ paddingHorizontal: 5 }}
                    onPress={handleSaveSchedule}
                    textStyle={styles.buttonText}
                    />
                <Button
                    textColor="black"
                    buttonStyle={[styles.button2, { width: "100%" }]}
                    title="Go back and make changes"
                    backgroundColor='transparent'
                    viewStyle={{ paddingHorizontal: 5 }}
                    onPress={() => navigation.pop()}
                    textStyle={styles.buttonText}
                />
            </View>
            <View>

            </View>
            <CustomModal
                    visibility={isModalVisible}
                    animationType={"fade"}
                    closeModal={closeModal}
                    component={modalContent}
                    />
            {
                isLoading && (
                    <CeliaPreloader/>
                )
            }
        </ScrollView>
        </SafeAreaView>
    )
}

export default AvailabilitySetupPreview