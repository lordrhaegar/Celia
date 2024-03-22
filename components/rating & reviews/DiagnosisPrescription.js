import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../includes/Header'
import { ratingAndReviewStyle } from '../../styles/ratingAndReviewStyle'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler'
import Button from '../buttons/Button'
import { styles } from '../../styles/Styles'
import { apiBaseUrl, backgroundColors } from '../../constants/constants'
import axios from 'axios'
import { availabilitySetupStyles } from '../../styles/availabilitySetupStyles'
import { MotiView } from 'moti'
import { Easing } from 'react-native-reanimated'
import CustomModal from '../modals/Modal'
import { useSelector } from 'react-redux'
import { CommonActions, useNavigation } from '@react-navigation/native'
import { diagnosisHistoryStyle } from '../../styles/diagnosisHistoryStyle'

const DiagnosisPrescription = (props) => {
    const { closeModal, heading, setPrescription, setdiagnosis } = props
    const { patientSelectedBackground, doctorSelectedBackground } = backgroundColors
    const [rating, setRating] = useState(0)
    const [review, setReview] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [modalContents, setModalContents] = useState({})
    const [isModalVisible, setIsModalVisible] = useState(false)
    const { userToken } = useSelector((state) => state.auth)
    const navigator = useNavigation()
    const maxLength = 500
    const closeStatusModal = () => {
        setIsModalVisible(false)
    }
    const successModal = (body) => {
        setModalContents({
            icon: <Ionicons
                name="checkmark-circle-outline"
                size={24}
                color={"#0A74B0"}
            />,
            heading: "Success",
            bg: "#CFE9F8",
            body: body.toUpperCase(),
        })
        setIsModalVisible(true)
    }
    const failedModal = (errorMessage) => {
        setModalContents({
            icon: <AntDesign
                name='exclamation'
                size={24}
                color={"white"}
            />,
            heading: "Failed",
            bg: "#DC0D0D",
            body: errorMessage.toUpperCase()
        })
        setIsModalVisible(true)
    }
    const modalContent = (
        <View style={availabilitySetupStyles.successModalBox}>
            <View style={availabilitySetupStyles.successIconContainer}>
                <MotiView
                    from={{ rotateY: "0deg" }}
                    animate={{ rotateY: "360deg" }}
                    transition={{
                        type: 'spring',
                        duration: 5000,
                        ease: Easing.bounce,
                        loop: true
                    }}
                    style={[availabilitySetupStyles.successIconBackground, { backgroundColor: modalContents.bg }]}>
                    {modalContents.icon}
                </MotiView>
            </View>
            <View style={[availabilitySetupStyles.successIconContainer]}>
                <Text style={availabilitySetupStyles.successModalTextH1}>{modalContents.heading}</Text>
            </View>
            <View style={[availabilitySetupStyles.successIconContainer,]}>
                <Text style={availabilitySetupStyles.successModalTextP}>
                    {modalContents.body}
                </Text>
            </View>
            <View>
                <Button
                    textColor="#FFFBFB"
                    buttonStyle={[styles.button, { width: "100%" }]}
                    title="Ok"
                    backgroundColor={backgroundColors.patientSelectedBackground}
                    viewStyle={{ paddingHorizontal: 5 }}
                    onPress={() => navigator.dispatch(CommonActions.reset({
                        index: 0,
                        routes: [{
                            name: "App"
                        }]
                    }))}
                />
            </View>
        </View>
    )
    const rateAndReviewDoc = async () => {
        setIsLoading(true)
        try {
            const rateAndReview = await axios.put(`${apiBaseUrl}/appointment/complete`, {
                appointmentId: id,
                rating: rating,
                review: review.trim()
            }, {
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            })
            if (rateAndReview.status === 200) {
                successModal("Review Saved")
            }
        } catch (error) {
            if (error.response.status === 422) {
                failedModal("Please select a rating and fill in the review")
            } else if (error.response.status === 400) {
                failedModal(error.response.data.message)
            }
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <ScrollView contentContainerStyle={{ gap: 24 }} className="w-full p-5">
            <View className={`flex-row items-center justify-between w-full`}
            >
                <Text style={[styles.title, { color: doctorSelectedBackground }]} className="font-medium">{heading}</Text>
                <AntDesign
                    onPress={closeModal}
                    name='closecircle'
                    size={24}
                    color={doctorSelectedBackground}
                />

            </View>
            <View>
                <Text style={ratingAndReviewStyle.subHeadingText}>
                    Put down your drug prescription for the patient here.
                </Text>
            </View>
            <View style={diagnosisHistoryStyle.diagnosisContainer}>
                <Text style={diagnosisHistoryStyle.diagnosisContainerH1}>Diagnosis</Text>
                <TextInput
                    multiline={true}
                    numberOfLines={5}
                    placeholder='Start typing here'
                    onChangeText={(text)=>setdiagnosis(text)}
                    style={[diagnosisHistoryStyle.diagnosisInnerContainer, diagnosisHistoryStyle.diagnosisContainerP]} />
            </View>
            <View style={diagnosisHistoryStyle.diagnosisContainer}>
                <Text style={diagnosisHistoryStyle.diagnosisContainerH1}>Prescription and Recommendation</Text>
                <TextInput
                    multiline={true}
                    numberOfLines={10}
                    placeholder='Start typing here'
                    onChangeText={(text)=>setPrescription(text)}
                    style={[diagnosisHistoryStyle.diagnosisInnerContainer, diagnosisHistoryStyle.diagnosisContainerP]} />
            </View>
            <Button
                buttonStyle={[styles.button, { borderColor: backgroundColors.patientSelectedBackground }]}
                textStyle={styles.buttonText}
                viewStyle={{ width: "100%", marginBottom: 0 }}
                backgroundColor={doctorSelectedBackground}
                width="98%"
                textColor="white"
                title={"Save"}
                onPress={closeModal}
            />
            <CustomModal
                visibility={isModalVisible}
                animationType={"fade"}
                closeModal={closeStatusModal}
                component={modalContent}
            />
        </ScrollView>
    )
}

export default DiagnosisPrescription