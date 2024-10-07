import { StyleSheet } from "react-native";

export const connectButtonStyles = StyleSheet.create({
    buttonText: {
        color: '#27292A',
        fontSize: 16,
        fontFamily: 'Gilroy',
        fontWeight: '600',
    },
    buttonStyle: {
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
    },
    iconStyle: {
        width: 28, 
        height: 28, 
        padding: 4, 
        borderRadius: 4, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
})