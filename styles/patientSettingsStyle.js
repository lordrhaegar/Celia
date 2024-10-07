import { StyleSheet } from "react-native";
import { backgroundColors } from "../constants/constants";

export const patientSetttingsStyles = StyleSheet.create({
    tabNavBox: {
        width: '100%',
        paddingTop: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        backgroundColor: '#F3F5F6',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    tabNavBoxText: {
        fontSize: 12,
        fontFamily: 'Gilroy',
        fontWeight: '500',
    },
    tabNavButton: {
        width: '30%',
        padding: 8,
        borderBottomWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
    },
    formHeader: {
        color: '#27292A',
        fontSize: 24,
        fontFamily: 'Gilroy-M',
        fontWeight: '600',
        lineHeight: 32,
    },
    formContainer: {
        width: "100%",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: "#fff",
        padding: 20,
        marginTop: -50
    },
    bodyInfoContainer: {
        width: '100%',
        paddingHorizontal: 12,
        paddingVertical: 20,
        backgroundColor: '#F3F5F6',
        borderRadius: 8,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 20
    },
    allergyContainer: {
        width: '100%',
        padding: 12,
        backgroundColor: '#FDFDFD',
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    allergyText: {
        color: 'black',
        fontSize: 14,
        fontFamily: 'Gilroy',
        fontWeight: '400',
        lineHeight: 20,
    },
    addButton: {
        color: backgroundColors.patientSelectedBackground,
        fontSize: 14,
        fontFamily: 'Gilroy',
        fontWeight: '400',
        lineHeight: 20,
    },
    addAllergyField: {
        width: '100%',
        padding: 12,
        backgroundColor: '#FDFDFD',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#6EBDEA',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 8,
        color: '#666B6E',
        fontSize: 14,
        fontFamily: 'Gilroy',
        fontWeight: '400',
        lineHeight: 20,
    },
    
})