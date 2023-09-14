import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import BaseWrapper from './screens/BaseWrapper';
import HomeScreen from './screens/HomeScreen';
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

const Stack = createStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function App() {
  return (
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
    </Stack.Navigator>
    </NavigationContainer>
  );
}

