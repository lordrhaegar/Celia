import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Dimensions, useWindowDimensions } from 'react-native';
import { setUserDetails, setUserToken } from '../features/authSlice';
export const apiBaseUrl = "https://celiabackendtestapis.onrender.com"

export const sthetoscope = require('../assets/images/sthetoscope.png');
export const aiconnect = require('../assets/images/aiconnect.png');
export const doctor = require('../assets/images/doctor.png');
export const logo = require("../assets/images/logo.png")
export const logoBig = require("../assets/images/LogoBig.png")
export const remy = require("../assets/images/remy.png")
export const remyLarge = require("../assets/images/remyLargee.png")
export const width = () => useWindowDimensions().width
export const height = () => useWindowDimensions().height
export const slides = [
  {
    id: 1,
    image: sthetoscope,
    title: 'Easy and fast diagnosis',
    description: 'Discover a calming path to swift and easy diagnoses through Celia.',
  },
  {
    id: 2,
    image: aiconnect,
    title: 'AI powered medication',
    description: 'Discover the calm efficacy of AI-driven medication for your health.',
  },
  {
    id: 3,
    image: doctor,
    title: 'Standby doctors',
    description: 'Embrace peace of mind with 24/7 standby doctors by your side.',
  },
];
export const uploadDocument = require("../assets/images/uploadDocument.png")
export const uploadImage = async (imageUploadResult, setField) => {
  const formData = new FormData()
  formData.append('img', {
    uri: imageUploadResult.assets[0].uri,
    name: imageUploadResult.assets[0].name,
    type: imageUploadResult.assets[0].mimeType
  })
  try {
    const uploadImage = await axios.post(`${apiBaseUrl}/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    if (uploadImage.status === 200 || uploadImage.status === 201) {
      setField(uploadImage.data.downloadURL)
    }

  } catch (error) {
    console.log(error);
  }
}
export const setUserToStorage = async (data, dispatch) => {
  try {
    await AsyncStorage.setItem('user', JSON.stringify(data))
    console.log(data.user, data.token);
    dispatch(setUserDetails(data.user))
    dispatch(setUserToken(data.token))
  } catch (error) {
    console.log("AyncError", error);
  }
}
export const getUserFromStorage = async (navigator, dispatch) => {
  try {
    const storedData = await AsyncStorage.getItem('user')
    if (storedData) {
      const userData = JSON.parse(storedData)
      dispatch(setUserDetails(userData.user))
      dispatch(setUserToken(userData.token))
      navigator.replace('App')
    }
  } catch (error) {
    console.log("Async Get Error"), error;
  }
}
export const getAge = (date_of_birth)=> {
  const startDate = new Date(date_of_birth)
    const endDate = new Date()
    const difference = endDate - startDate
    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
    const age = Math.floor(difference / millisecondsInYear);
    return age;
}
export const logout = async (naviagtor, CommonActions)=>{
  try {
    await AsyncStorage.removeItem('user')
    
  } catch (error) {
    console.log(error);
  }
  naviagtor.dispatch(CommonActions.reset({
    index: 0,
    routes: [{
      name: 'Base'
    }]
  }))
} 
export const heartFailureQuestions = [
  {
    question: "What is your resting blood pressure?",
    answer: [100, 200, 300, 400]
  },
  {
    question: "Is your cholesterol level normal?",
    answer: ["No", "Yes"]
  },
  {
    question: "Is your fasting blood sugar level normal?",
    answer: ["Yes", "No"]
  },
  {
    question: "What is your maximum heart rate ?",
    answer: [20, 40, 60, 80]
  },
  {
    question: "Are you Female?",
    answer: ["No", "Yes"]
  },
  {
    question: "Are you Male?",
    answer: ["No", "Yes"]
  },
  {
    question: "Do you experience asymptomatic chest pain?",
    answer: ["Yes", "No"]
  },
  {
    question: "Do you experience atypical chest pain?",
    answer: ["No", "Yes"]
  },
  {
    question: "Do you experience non-anginal pain?",
    answer: ["No", "Yes"]
  },
  {
    question: "Do you experience typical angina?",
    answer: ["No", "Yes"]
  },
  {
    question: "Is your resting ECG showing left ventricular hypertrophy?",
    answer: ["Yes", "No"]
  },
  {
    question: "Is your resting ECG normal?",
    answer: ["No", "Yes"]
  },
  {
    question: "Is your resting ECG showing ST-T wave abnormality?",
    answer: ["No", "Yes"]
  },
  {
    question: "Do you experience exercise-induced angina?",
    answer: ["No", "Yes"]
  },
  {
    question: "Is the ST segment slope in your ECG downward?",
    answer: ["Yes", "No"]
  },
  {
    question: "Is the ST segment slope in your ECG flat?",
    answer: ["No", "Yes"]
  },
  {
    question: "Is the ST segment slope in your ECG upward?",
    answer: ["No", "Yes"]
  }

]
export const strokeQuestions = [
  {
    question: "Do you have hypertension?",
    answer: ["No", "Yes"]
  },
  {
    question: "Do you have heart disease?",
    answer: ["No", "Yes"]
  },
  {
    question: "What is your average glucose level?",
    answer: [10, 20, 30, 40]
  },
  {
    question: "What is your body max index?",
    answer: [20, 30, 40, 50]
  },
  {
    question: "Are you female?",
    answer: ["No", "Yes"]
  },
  {
    question: "Are you male?",
    answer: ["No", "Yes"]
  },
  {
    question: "Are you single?",
    answer: ["No", "Yes"]
  },
  {
    question: "Are you married?",
    answer: ["No", "Yes"]
  },
  {
    question: "Are you in a government job?",
    answer: ["No", "Yes"]
  },
  {
    question: "Are you unemployed?",
    answer: ["No", "Yes"]
  },
  {
    question: "Are you in a private job?",
    answer: ["No", "Yes"]
  },
  {
    question: "Are you self-employed?",
    answer: ["No", "Yes"]
  },
  {
    question: "Are you a student?",
    answer: ["No", "Yes"]
  },
  {
    question: "Do you live in a rural area?",
    answer: ["No", "Yes"]
  },
  {
    question: "Do you live in an urban area?",
    answer: ["No", "Yes"]
  },
  {
    question: "Have you formerly smoked?",
    answer: ["No", "Yes"]
  },
  {
    question: "Have you never smoked?",
    answer: ["No", "Yes"]
  },
  {
    question: "Do you smoke?",
    answer: ["No", "Yes"]
  }
]
export const diabetesQuestions = [
  {
    question: "Do you have hypertension?",
    answer: ["No", "Yes"]
  },
  {
    question: "Do you have heart disease?",
    answer: ["No", "Yes"]
  },
  {
    question: "What is your body mass index?",
    answer: [15, 20, 25, 30]
  },
  {
    question: "What is your average blood sugar level?",
    answer: [10, 20, 30, 40]
  },
  {
    question: "What is your glucose level?",
    answer: [1, 2, 3, 4]
  },
  {
    question: "Are you female?",
    answer: ["No", "Yes"]
  },
  {
    question: "Are you male?",
    answer: ["No", "Yes"]
  },
  {
    question: "Have you smoked before?",
    answer: ["No", "Yes"]
  },
  {
    question: "Are you currently smoking?",
    answer: ["No", "Yes"]
  },
  {
    question: "Have you never smoked?",
    answer: ["No", "Yes"]
  }

]

export const celiaAiBaseUrl = "https://ai-movement-diseases.onrender.com"

