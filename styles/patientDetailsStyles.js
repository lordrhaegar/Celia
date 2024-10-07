import { StyleSheet } from "react-native";
import { backgroundColors } from "../constants/constants";
const {doctorSelectedBackground} = backgroundColors
export const patientDetailsStyles = StyleSheet.create({
    infoContainers: {
        width: '48%',
        padding: 8,
        backgroundColor: '#FDFDFD',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: doctorSelectedBackground,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    infoContainerForAllergies: {
        width: '100%',
        padding: 8,
        backgroundColor: '#FDFDFD',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: doctorSelectedBackground,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    infoContainersBlock: {
        width: '100%',
        paddingVertical: 12,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#EAEDEF',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 12
    },
    infoContainersH1: {
        color: '#666B6E',
        fontSize: 14,
        fontFamily: 'Gilroy-M',
        fontWeight: '600',
        lineHeight: 20,
    },
    infoContainersP: {
        color: '#666B6E',
        fontSize: 14,
        fontFamily: 'Gilroy',
        fontWeight: '600',
        lineHeight: 20,
    }
})