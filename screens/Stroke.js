import { View, Text, TouchableOpacity, Dimensions, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '../styles/Styles'
import { celiaAiBaseUrl, getAge, heartFailureQuestions, logo, logoBig, strokeQuestions } from '../constants/constants'
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

const Stroke = ({ route, navigation }) => {
    const { width, height } = Dimensions.get('window')
    const [isLoading, setIsLoading] = useState(false)
    const [questionNo, setQuestionNo] = useState(0);
    const { userDetails } = useSelector((state) => state.auth)
    const [Age, setAge] = useState(21);
    const [Hypertension, setHypertension] = useState(1);
    const [Heart_Disease, setHeart_Disease] = useState(0);
    const [Average_Glucose_Level, setAverage_Glucose_Level] = useState(22);
    const [Body_Max_Index, setBody_Max_Index] = useState(30);
    const [Female, setFemale] = useState(0);
    const [Male, setMale] = useState(1);
    const [Single, setSingle] = useState(1);
    const [Married, setMarried] = useState(0);
    const [Government_Job, setGovernment_Job] = useState(0);
    const [Unemployed, setUnemployed] = useState(0);
    const [Private_Job, setPrivate_Job] = useState(0);
    const [Self_Employed, setSelf_Employed] = useState(0);
    const [Student, setStudent] = useState(1);
    const [Rural_Area, setRural_Area] = useState(0);
    const [Urban_Area, setUrban_Area] = useState(1);
    const [Formerly_Smoked, setFormerly_Smoked] = useState(0);
    const [Never_Smoked, setNever_Smoked] = useState(1);
    const [Smokes, setSmokes] = useState(0);
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
                setHeart_Disease(value);
                break;
            case 2:
                setAverage_Glucose_Level(value);
                break;
            case 3:
                setBody_Max_Index(value);
                break;
            case 4:
                setFemale(value);
                break;
            case 5:
                setMale(value);
                break;
            case 6:
                setSingle(value);
                break;
            case 7:
                setMarried(value);
                break;
            case 8:
                setGovernment_Job(value);
                break;
            case 9:
                setUnemployed(value);
                break;
            case 10:
                setPrivate_Job(value);
                break;
            case 11:
                setSelf_Employed(value);
                break;
            case 12:
                setStudent(value);
                break;
            case 13:
                setRural_Area(value);
                break;
            case 14:
                setUrban_Area(value);
                break;
            case 15:
                setFormerly_Smoked(value);
                break;
            case 16:
                setNever_Smoked(value);
                break;
            case 17:
                setSmokes(value);
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
            Average_Glucose_Level,
            Body_Max_Index,
            Female,
            Male,
            Single,
            Married,
            Government_Job,
            Unemployed,
            Private_Job,
            Self_Employed,
            Student,
            Rural_Area,
            Urban_Area,
            Formerly_Smoked,
            Never_Smoked,
            Smokes
        }
        setIsLoading(true)
        try {
            const performDiagnosis = await axios.post(`${celiaAiBaseUrl}/${apiEndpoint}/predict`, payload)
            if (performDiagnosis.status === 200 || performDiagnosis.status === 201) {
                navigation.navigate("PredictionScreen", { result: performDiagnosis.data, disease: apiEndpoint })
            }
        } catch (error) {
        } finally {
            setIsLoading(false)
        }
    }


    return (
        <SafeAreaView
            style={{
                height: height,
                justifyContent: 'flex-end',
                paddingVertical: 10,
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
                questionArray={strokeQuestions}
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
                        onPress={() => handleDiagnose("stroke")}
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

export default Stroke