import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import { styles } from '../styles/Styles';

const Tab = createBottomTabNavigator();

const AppNavigator = ({route}) => {
    const {userDetails} = route.params
    return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarActiveTintColor: '#0D91DC',
                    tabBarInactiveTintColor: '#666B6E',
                    tabBarLabelStyle: styles.inputLabel,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home';
                        } else if (route.name === 'Settings') {
                            iconName = focused ? 'settings' : 'settings-outline';
                        }
                        return <Feather name={iconName} size={size} color={color} />;
                    },
                })}
            >
                <Tab.Screen options={{headerShown: false}} name="Home" component={HomeScreen} initialParams={{userDetails: userDetails}}/>
            </Tab.Navigator>
    );
};

export default AppNavigator;
