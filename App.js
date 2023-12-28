import { NavigationContainer } from '@react-navigation/native';
import BaseWrapper from './screens/BaseWrapper';
import { createStackNavigator } from '@react-navigation/stack';
import AppNavigator from './navigator/AppNavigator';
import NewDiagnosis from './screens/NewDiagnosis';
import ClientTypeScreen from './screens/ClientTypeScreen';
import ClientBio from './screens/ClientBio';
import Questionnaire from './screens/Questionnaire';
import SymptomQuery from './screens/SymptomQuery';
import DurationQuestionnaire from './screens/DurationQuestionnaire';
import Fever from './screens/Fever';
import OtherSymptoms from './screens/OtherSymptoms';
import SymptomProgress from './screens/SymptomProgress'
import ThankYou from './screens/ThankYou';
import Diagnosis from './screens/Diagnosis';
import PossibleCauseDetails from './screens/PossibleCauseDetails';
import DoctoreRequirementScreen from './screens/DoctorRequirementsScree';
import { Provider } from 'react-redux';
import { store } from './store/store';
import TalkToADoctor from './screens/TalkToADoctor';
import AvailableDoctors from './screens/AvailableDoctors';
import DoctorDetails from './screens/DoctorDetails';
import ConfirmAppointment from './screens/ConfirmAppointment';
import CeliaAi from './screens/CeliaAi';
import AiHomescreen from './screens/AiHomescreen';
import QuestionScreen from './screens/HeartFailureQuestionScreen';
import HeartFailureQuestionScreen from './screens/HeartFailureQuestionScreen';
import PredictionScreen from './screens/PredictionScreen';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import Stroke from './screens/Stroke';
import Diabetes from './screens/Diabetes';
import { useEffect } from 'react';
import * as Updates from 'expo-updates'

const Stack = createStackNavigator();
const toastConfig = {
  /*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
  success: (props) => (
    <BaseToast
      {...props}
      style={{backgroundColor: "#198754" }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
        fontFamily: "Gilroy-M",
        color: "white"
      }}
    />
  ),
  /*
    Overwrite 'error' type,
    by modifying the existing `ErrorToast` component
  */
  error: (props) => (
    <ErrorToast
      {...props}
      style={{backgroundColor: "#DC0D0D" }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 17,
        color: "white"
      }}
      text2Style={{
        fontSize: 15
      }}
    />
  ),
    }

export default function App() {
  async function onFetchUpdateAsync() {
    try {
      const update = await Updates.checkForUpdateAsync();
      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    } catch (error) {
      alert(`Error fetching latest Expo update: ${error}`);
    }
  }
  useEffect(()=>{
    onFetchUpdateAsync()
  },[])
  return (
    <Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator 
    screenOptions={{
      cardStyleInterpolator: ({ current, layouts }) => {
        return {
          cardStyle: {
            transform: [
              {
                translateX: current.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [layouts.screen.width, 0],
                }),
              },
            ],
          },
        };
      },
    }}
    initialRouteName="Base">
      <Stack.Screen name="Base" options={{headerShown: false}} component={BaseWrapper} />
      <Stack.Screen name="DocRequirements" options={{headerShown: false}} component={DoctoreRequirementScreen} />
      <Stack.Screen name="App" options={{headerShown: false}} component={AppNavigator} />
      <Stack.Screen name="NewDiagnosis" options={{headerShown: false}} component={NewDiagnosis} />
      <Stack.Screen name="ClientType" options={{headerShown: false}} component={ClientTypeScreen} />
      <Stack.Screen name="ClientBio" options={{headerShown: false}} component={ClientBio} />
      <Stack.Screen name="Questionnaire" options={{headerShown: false}} component={Questionnaire} />
      <Stack.Screen name="SymptomQuery" options={{headerShown: false}} component={SymptomQuery} />
      <Stack.Screen name="DurationQuestionnaire" options={{headerShown: false}} component={DurationQuestionnaire} />
      <Stack.Screen name="Fever" options={{headerShown: false}} component={Fever} />
      <Stack.Screen name="OtherSymptoms" options={{headerShown: false}} component={OtherSymptoms} />
      <Stack.Screen name="SymptomProgress" options={{headerShown: false}} component={SymptomProgress} />
      <Stack.Screen name="ThankYou" options={{headerShown: false}} component={ThankYou} />
      <Stack.Screen name="Diagnosis" options={{headerShown: false}} component={Diagnosis} />
      <Stack.Screen name="CeliaAi" options={{headerShown: false}} component={CeliaAi} />
      <Stack.Screen name="PossibleCauseDetails" options={{headerShown: false}} component={PossibleCauseDetails} />
      <Stack.Screen name="AiHomeScreen" options={{headerShown: false}} component={AiHomescreen}/>
      <Stack.Screen name="HeartQuestionScreen" options={{headerShown: false}} component={HeartFailureQuestionScreen}/>
      <Stack.Screen name="Stroke" options={{headerShown: false}} component={Stroke}/>
      <Stack.Screen name="Diabetes" options={{headerShown: false}} component={Diabetes}/>
      <Stack.Screen name='PredictionScreen' options={{headerShown: false}} component={PredictionScreen}/>
      <Stack.Screen name="TalkToADoc" options={{headerShown: false}} component={TalkToADoctor} />
      <Stack.Screen name="AvailableDoctors" options={{headerShown: false}} component={AvailableDoctors} />
      <Stack.Screen name="DocDetails" options={{headerShown: false}} component={DoctorDetails} />
      <Stack.Screen name="ConfirmAppointment" options={{headerShown: false}} component={ConfirmAppointment} />
    </Stack.Navigator>
    <Toast config={toastConfig}/>
    </NavigationContainer>
    </Provider>
  );
}

