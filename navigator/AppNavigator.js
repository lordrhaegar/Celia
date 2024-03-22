import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, Fontisto, MaterialIcons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import { styles } from '../styles/Styles';
import { useSelector } from 'react-redux';
import DoctorsScreen from '../screens/DoctorsScreen';
import DocAppointmentHistory from '../screens/DocAppointmentHistory';
import { backgroundColors, checkUserType } from '../constants/constants';
import PatientSettings from '../screens/PatientSettings';

const Tab = createBottomTabNavigator();

const AppNavigator = ({route}) => {
   
    const { userType } = useSelector((state) => state.auth)
    return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarActiveTintColor: checkUserType(userType)? backgroundColors.patientSelectedBackground : backgroundColors.doctorSelectedBackground,
                    tabBarInactiveTintColor: '#666B6E',
                    tabBarLabelStyle: styles.inputLabel,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home';
                        } else if (route.name === 'Me') {
                            iconName = focused ? 'settings' : 'settings';
                        } else if (route.name === 'Doctors') {
                            iconName = focused ? 'doctor' : 'doctor';
                        } else if (route.name === 'Patients') {
                            iconName = focused ? 'sick' : 'sick';
                        }
                        return iconName === 'doctor' ? 
                        <Fontisto name={iconName} size={size} color={color}/> : 
                        iconName === 'sick' ? 
                        <MaterialIcons name={iconName} size={size} color={color}/> :
                        <Feather name={iconName} size={size} color={color} />;
                    },
                })}
            >
                <Tab.Screen options={{headerShown: false}} name="Home" component={HomeScreen}/>
                <Tab.Screen options={{headerShown: false}} name={userType === "Patient"? "Doctors": "Patients"} component={userType === "Patient"? DoctorsScreen : DocAppointmentHistory}/>
                <Tab.Screen options={{headerShown: false}} name="Me" component={PatientSettings}/>
            </Tab.Navigator>
    );
};

export default AppNavigator;
