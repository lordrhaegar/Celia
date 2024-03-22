import { View, Text, TouchableOpacity, Dimensions, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '../styles/Styles'
import { celiaAiBaseUrl, getAge, heartFailureQuestions, logo, logoBig } from '../constants/constants'
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

const HeartFailureQuestionScreen = ({ route, navigation }) => {
    const { width, height } = Dimensions.get('window')
    const [isLoading, setIsLoading] = useState(false)
    const [questionNo, setQuestionNo] = useState(0);
    const { userDetails } = useSelector((state) => state.auth)
    const [Age, setAge] = useState(21);
    const [RestingBP, setRestingBP] = useState(100);
    const [Cholesterol, setCholesterol] = useState(0);
    const [FastingBS, setFastingBS] = useState(1);
    const [MaxHR, setMaxHR] = useState(34);
    const [Sex_F, setSex_F] = useState(0);
    const [Sex_M, setSex_M] = useState(1);
    const [ChestPainType_ASY, setChestPainType_ASY] = useState(1);
    const [ChestPainType_ATA, setChestPainType_ATA] = useState(0);
    const [ChestPainType_NAP, setChestPainType_NAP] = useState(0);
    const [ChestPainType_TA, setChestPainType_TA] = useState(0);
    const [RestingECG_LVH, setRestingECG_LVH] = useState(1);
    const [RestingECG_Normal, setRestingECG_Normal] = useState(0);
    const [RestingECG_ST, setRestingECG_ST] = useState(0);
    const [ExerciseAngina_N, setExerciseAngina_N] = useState(0);
    const [ExerciseAngina_Y, setExerciseAngina_Y] = useState(1);
    const [ST_Slope_Down, setST_Slope_Down] = useState(1);
    const [ST_Slope_Flat, setST_Slope_Flat] = useState(0);
    const [ST_Slope_Up, setST_Slope_Up] = useState(0);
    const [complete, setComplete] = useState(false)
    useEffect(() => {
        setAge(getAge(userDetails.date_of_birth))
    }, []);
    const valueReturn = (value) => {
        value === "Yes" ? value = 1 : value === "No" ? value = 0 : value = value
        switch (questionNo) {
            case 0:
                setRestingBP(value)
                break;
            case 1:
                setCholesterol(value)
                break;
            case 2:
                setFastingBS(value)
                break;
            case 3:
                setMaxHR(value)
                break;
            case 4:
                setSex_F(value)
                break;
            case 5:
                setSex_M(value)
                break;
            case 6:
                setChestPainType_ASY(value)
                break;
            case 7:
                setChestPainType_ATA(value)
                break;
            case 8:
                setChestPainType_NAP(value)
                break;
            case 9:
                setChestPainType_TA(value)
                break;
            case 10:
                setRestingECG_LVH(value)
                break;
            case 11:
                setRestingECG_Normal(value)
                break;
            case 12:
                setRestingECG_ST(value)
                break;
            case 13:
                if (value === 1) {
                    setExerciseAngina_Y(0)
                } else if (value === 0) {
                    setExerciseAngina_Y(1)
                }
                setExerciseAngina_N(value)
                break;
            case 14:
                setST_Slope_Down(value)
                break;
            case 15:
                setST_Slope_Flat(value)
                break;
            case 16:
                setST_Slope_Up(value)
                break;
            default:
                break;
        }
    }
    const handleDiagnose = async (apiEndpoint) => {
        const payload = {
            Age,
            RestingBP,
            Cholesterol,
            FastingBS,
            MaxHR,
            Sex_F,
            Sex_M,
            ChestPainType_ASY,
            ChestPainType_ATA,
            ChestPainType_NAP,
            ChestPainType_TA,
            RestingECG_LVH,
            RestingECG_Normal,
            RestingECG_ST,
            ExerciseAngina_N,
            ExerciseAngina_Y,
            ST_Slope_Down,
            ST_Slope_Flat,
            ST_Slope_Up
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
                questionArray={heartFailureQuestions}
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
                        onPress={() => handleDiagnose("heartfailure")}
                        title={"Predict Ailment"} />
                ) : (<></>)
            }
            {
                isLoading ? (
                    <View style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(0, 0, 0, 0.5)' }, celiaStyle.center]}>
                             <MotiImage
                             from={{scale: 1}}
                             animate={{scale: 1.1}}
                             transition={{
                                type: 'spring',
                                duration: 3000,
                                ease: Easing.inOut(Easing.ease),
                                loop: true
                            }}
                                style={{ width: "20%", height: "20%" }}
                                resizeMode='contain'
                                source={logoBig} /> 
                    </View>
                ) : (<></>)
            }
        </SafeAreaView>
    )
}

export default HeartFailureQuestionScreen