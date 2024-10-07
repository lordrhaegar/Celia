import { Platform, StyleSheet } from "react-native";

export const diagnosisHistoryStyle = StyleSheet.create({
    diagnosisContainer: {
        width: '100%',
        paddingVertical: 12,
        borderTopColor: '#EAEDEF',
        borderTopWidth: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 12
    },
    diagnosisContainerH1: {
        color: '#27292A',
        fontSize: 14,
        fontFamily: 'Gilroy-M',
        fontWeight: '600',
    },
    diagnosisContainerP: {
        color: '#666B6E',
        fontSize: 14,
        fontFamily: 'Gilroy',
        fontWeight: '400',
        lineHeight: 20,

    },
    diagnosisInnerContainer: {
        width: '100%',
        padding: 8, 
        backgroundColor: '#FDFDFD', 
        borderRadius: 4, 
        borderColor: '#EAEDEF', 
        borderWidth: 1,
        justifyContent: 'center', 
        alignItems: 'flex-start', 
        gap: 8,
        ...(Platform.OS === 'android' && {textAlignVertical: 'top'}),
        ...(Platform.OS === 'ios' && {textAlign: "left"})
    }
})