import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Dimensions, useWindowDimensions } from 'react-native';
import { setAppointments, setUserDetails, setUserToken, setUserType } from '../features/authSlice';
export const apiBaseUrl = "https://celiabackendtestapis.onrender.com/v1"

export const sthetoscope = require('../assets/images/sthetoscope.png');
export const aiconnect = require('../assets/images/aiconnect.png');
export const doctor = require('../assets/images/doctor.png');
export const doctorImage = require('../assets/images/doctor.png');
export const logo = require("../assets/images/logo.png")
export const logoBig = require("../assets/images/LogoBig.png")
export const remy = require("../assets/images/remy.png")
export const remyLarge = require("../assets/images/remyLargee.png")
export const noAppointmentImage = require("../assets/images/rafiki.png")
export const checkUserType = (userType)=>{
  return userType === "Patient"
}
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
  }
}
export const setUserToStorage = async (data, dispatch) => {
  try {
    await AsyncStorage.setItem('userType', JSON.stringify("Patient"))
    await AsyncStorage.setItem('user', JSON.stringify(data))
    dispatch(setUserDetails(data.user))
    dispatch(setUserToken(data.token))
    const getAppointments = await axios.get(`${apiBaseUrl}/appointment`,{
      headers: {
        Authorization: `Bearer ${data.token}`
      }
    })
    if (getAppointments.status === 200 || getAppointments.status === 201) {
      dispatch(setAppointments(getAppointments.data.data))
    }
  } catch (error) {
  }
}
export const getUserFromStorage = async (navigator, dispatch, CommonActions) => {
  try {
    const storedData = await AsyncStorage.getItem('user')
    if (storedData) {
      const userData = JSON.parse(storedData)
      dispatch(setUserDetails(userData.user))
      dispatch(setUserToken(userData.token))
      dispatch(setAppointments(userData.user.appointments))
      navigator.dispatch(CommonActions.reset({
        index: 0,
        routes: [{name: "App"}]
    }))
    }
  } catch (error) {
  }
}
export const setDocToStorage = async (data, dispatch) => {
  try {
    await AsyncStorage.setItem('userType', JSON.stringify("Doctor"))
    await AsyncStorage.setItem('doc', JSON.stringify(data))
    dispatch(setUserDetails(data.doctor))
    dispatch(setUserToken(data.token))
    const getAppointments = await axios.get(`${apiBaseUrl}/appointment/doctor`,{
      headers: {
        Authorization: `Bearer ${data.token}`
      }
    })
    if (getAppointments.status === 200 || getAppointments.status === 201) {
      dispatch(setAppointments(getAppointments.data.data))
    }
  } catch (error) {
  }
}
export const getDocFromStorage = async (navigator, dispatch, CommonActions) => {
  try {
    const storedData = await AsyncStorage.getItem('doc')
    if (storedData) {
      const docData = JSON.parse(storedData)
      dispatch(setUserDetails(docData.doctor))
      dispatch(setUserToken(docData.token))
      navigator.dispatch(CommonActions.reset({
        index: 0,
        routes: [{name: "App"}]
    }))
    }
  } catch (error) {
  }
}
export const getUserType = async (dispatch) => {
  try {
    const storedUserType = await AsyncStorage.getItem('userType')
    if (storedUserType) {
      const userType = JSON.parse(storedUserType);
      dispatch(setUserType(userType))
      return userType
    }
  } catch (error) {
  }
}
export const getAge = (date_of_birth) => {
  const startDate = new Date(date_of_birth)
  const endDate = new Date()
  const difference = endDate - startDate
  const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
  const age = Math.floor(difference / millisecondsInYear);
  return age;
}
export const logout = async (naviagtor, CommonActions, userType) => {
  try {

    await AsyncStorage.removeItem('user')
    await AsyncStorage.removeItem('doc')
    naviagtor.dispatch(CommonActions.reset({
      index: 0,
      routes: [{
        name: 'Base'
      }]
    }))

  } catch (error) {
  }
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
export const capitalize = (str) => {
  return str.replace(/\b\w/g, (char) => {
    return char.toUpperCase();
  });
}

export const celiaAiBaseUrl = "https://ai-movement-diseases.onrender.com"

export const convertTimestampToTime = (timestamp) => {
  const date = new Date(timestamp);

  let hours = date.getHours();
  let minutes = date.getMinutes();

  const ampm = hours >= 12 ? 'pm' : 'am';

  hours = hours % 12 || 12;

  minutes = minutes < 10 ? '0' + minutes : minutes;

  return hours + ':' + minutes + ampm;
}

export const checkMatch = (statevalue, buttonvalue) => {
  return statevalue === buttonvalue
}

export const textColors = {
  SelectedText: "white",
  UnselectedText: "#27292A"
}
export const backgroundColors = {
  doctorSelectedBackground: "#7CD1D1",
  unselectedBackground: "white",
  patientSelectedBackground: "#0D91DC",
}
export const dayTime = [
  "8:00am", 
   "8:30am",
  "9:00am", 
   "9:30am",
  "10:00am", 
  "10:30am",
  "11:00am", 
  "11:30am",
  "12:00pm", 
  "12:30pm",
  "1:00pm", 
   "1:30pm",
  "2:00pm", 
   "2:30pm",
  "3:00pm", 
   "3:30pm",
  "4:00pm", 
   "4:30pm",
  "5:00pm", 
   "5:30pm",
  "6:00pm", 
   "6:30pm",
  "7:00pm",
  "7:30pm"
]
export const nightTime = [
  "8:00pm", 
   "8:30pm",
  "9:00pm", 
   "9:30pm",
  "10:00pm", 
  "10:30pm",
  "11:00pm", 
  "11:30pm",
  "12:00am", 
  "12:30am",
  "1:00am", 
   "1:30am",
  "2:00am", 
   "2:30am",
  "3:00am", 
   "3:30am",
  "4:00am", 
   "4:30am",
  "5:00am", 
   "5:30am",
  "6:00am", 
   "6:30am",
  "7:00am", 
   "7:30am",
]

export const connectOptions = [
  { backgroundColor: '#96DADA', iconName: "telephone", title: "Voice call" },
  { backgroundColor: '#6EBDEA', iconName: "video", title: "Video call" },
  { backgroundColor: 'transparent', iconName: "whatsapp", title: "Whatsapp" }
]

export const convertTimestampToDate = (timestamp) =>{
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const date = new Date(timestamp);
  const dayOfWeek = daysOfWeek[date.getDay()];
  const dayOfMonth = date.getDate();
  const monthOfYear = monthsOfYear[date.getMonth()];
  const year = date.getFullYear();

  let suffix = "th";
  if (dayOfMonth === 1 || dayOfMonth === 21 || dayOfMonth === 31) {
    suffix = "st";
  } else if (dayOfMonth === 2 || dayOfMonth === 22) {
    suffix = "nd";
  } else if (dayOfMonth === 3 || dayOfMonth === 23) {
    suffix = "rd";
  }

  return `${dayOfWeek} ${dayOfMonth}${suffix} ${monthOfYear}, ${year}`;
}

export const convertTimestampToDateFormat = (timestamp)=> {
  // Create a new Date object using the timestamp
  const date = new Date(timestamp);
  
  // Extract year, month, and day from the date
  const year = date.getFullYear();
  // Months are zero-indexed, so we add 1 to get the correct month
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  
  // Return the date in the desired format
  return `${year}/${month}/${day}`;
}
