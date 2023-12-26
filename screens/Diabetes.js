import { View, Text, TouchableOpacity, Dimensions, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '../styles/Styles'
import { celiaAiBaseUrl, diabetesQuestions, getAge, heartFailureQuestions, logo, strokeQuestions } from '../constants/constants'
import ChatBubble from '../components/chat bubble/ChatBubble'
import celiaStyle from '../styles/celiaAiStyle'
import DocHeader from '../components/includes/DocHeader'
import QuestionBody from '../components/question body/QuestionBody'
import { useSelector } from 'react-redux'
import axios from 'axios'
import Button from '../components/buttons/Button'
import { docDetailsStyle } from '../styles/docDetailsStyles'
import { MotiImage, MotiView } from 'moti'
import { Easing } from 'react-native-reanimated'
import CeliaPreloader from '../components/preloader/CeliaPreloader'

const Diabetes = ({ route, navigation }) => {
    const { width, height } = Dimensions.get('screen')
    const [isLoading, setIsLoading] = useState(false)
    const [questionNo, setQuestionNo] = useState(0);
    const { userDetails } = useSelector((state) => state.auth)
    const [Age, setAge] = useState(21);
    const [Hypertension, setHypertension] = useState(1);
    const [Heart_Disease, setHeartDisease] = useState(1);
    const [Body_Mass_Index, setBodyMassIndex] = useState(20);
    const [Avg_Blood_Sugar_level, setAvgBloodSugarLevel] = useState(23);
    const [Glucose_Level, setGlucoseLevel] = useState(2);
    const [Gender_Female, setGenderFemale] = useState(0);
    const [Gender_Male, setGenderMale] = useState(1);
    const [Smoking_History_before, setSmokingHistoryBefore] = useState(0);
    const [Smoking_History_current, setSmokingHistoryCurrent] = useState(1);
    const [Smoking_History_never, setSmokingHistoryNever] = useState(0);

    const [complete, setComplete] = useState(false)
    useEffect(() => {
        setAge(getAge(userDetails.date_of_birth))
    }, []);
    const valueReturn = (value) => {
        value === "Yes" ? value = 1 : value === "No" ? value = 0 : value = value
        switch (questionNo) {
            case 0:
                setHypertension(value);
                break;
            case 1:
                setHeartDisease(value);
                break;
            case 2:
                setBodyMassIndex(value);
                break;
            case 3:
                setAvgBloodSugarLevel(value);
                break;
            case 4:
                setGlucoseLevel(value);
                break;
            case 5:
                setGenderFemale(value);
                break;
            case 6:
                setGenderMale(value);
                break;
            case 7:
                setSmokingHistoryBefore(value);
                break;
            case 8:
                setSmokingHistoryCurrent(value);
                break;
            case 9:
                setSmokingHistoryNever(value);
                break;
            default:
                break;
        }
    }
    const handleDiagnose = async (apiEndpoint) => {
        const payload = {
            Age,
            Hypertension,
            Heart_Disease,
            Body_Mass_Index,
            Avg_Blood_Sugar_level,
            Glucose_Level,
            Gender_Female,
            Gender_Male,
            Smoking_History_before,
            Smoking_History_current,
            Smoking_History_never,
        }
        setIsLoading(true)
        try {
            const performDiagnosis = await axios.post(`${celiaAiBaseUrl}/${apiEndpoint}/predict`, payload)
            if (performDiagnosis.status === 200 || performDiagnosis.status === 201) {
                console.log(performDiagnosis.data);
                navigation.navigate("PredictionScreen", { result: performDiagnosis.data, disease: apiEndpoint })
            }
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }


    return (
        <SafeAreaView
            style={{
                height: height,
                justifyContent: 'flex-end',
                paddingVertical: 30,
                backgroundColor: "#E5F6F6"
            }}
        >
            {/* <Text>{heartFailureQuestions[questionNo].question}</Text>
      <TouchableOpacity 
      onPress={()=>setQuestionNo(questionNo+1)
      }
      style={styles.button}>
      <Text>Nxt Quation</Text>
    </TouchableOpacity> */}
            <DocHeader navigation={navigation} title={"New Assessment"} />
            <QuestionBody
                valueReturn={valueReturn}
                questionArray={diabetesQuestions}
                questionNo={questionNo}
                setQuestionNo={setQuestionNo}
                setComplete={setComplete}
            />
            {
                complete ? (
                    <Button
                        textColor="white"
                        buttonStyle={styles.button}
                        viewStyle={[docDetailsStyle.buttonContainer]}
                        textStyle={styles.buttonText}
                        onPress={() => handleDiagnose("diabetes")}
                        title={"Predict Ailment"} />
                ) : (<></>)
            }
            {
                isLoading ? (
                    <CeliaPreloader/>
                ) : (<></>)
            }
        </SafeAreaView>
    )
}

export default Diabetes