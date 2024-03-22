import { useNavigation } from "@react-navigation/core";


const navigateToScreen = (screenName) => {
    const navigation = useNavigation();
    navigation.navigate(screenName); 
};

export const handleRegister = async (username, email, password) => {
    try {
        const response = await axios.post('http://localhost:3000/api/register', {
            username,
            email,
            password
        });
        
        navigateToScreen('HomeScreen')
    } catch (error) {
    }
};

export const simulateReg = () => {
    navigateToScreen('HomeScreen');
}