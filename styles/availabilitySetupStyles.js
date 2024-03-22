import { StyleSheet } from "react-native";

export const availabilitySetupStyles = StyleSheet.create({
    h1: {
        color: '#000',
        fontFamily: 'Gilroy-M',
        fontSize: 17,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 24,
    },
    p: {
        color: '#000',
        fontFamily: 'Gilroy',
        fontSize: 17,
        fontStyle: 'normal',
        fontWeight: '400',
        letterSpacing: 0.5,
        lineHeight: 24,
    },
    scrollView: {
        width: '100%',
        backgroundColor: '#FDFDFD',
        paddingVertical: 20,
        gap: 20
    },
    weekBox: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 10
    },
    dayBox: {
        width: 69,
        height: 36,
        padding: 8,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dayText: {
        color: '#27292A',
        fontSize: 14,
        fontFamily: 'Gilroy',
        fontWeight: '400',
        lineHeight: 20,
    },
    detailsCard: {
        width: '100%',
        padding: 8,
        borderRadius: 8,
        borderColor: "#6EBDEA",
        borderWidth: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 10
    },
    previewButton: {
        position: "absolute"
    },
    successModalBox: {
        width: "100%",
        padding: 20
    },
    successIconContainer: {
        height: 48,
        width: "100%",
        alignItems: 'center',
        // borderColor: 'red',
        // borderWidth: 1,
        justifyContent: 'center'
    },
    successIconBackground: {
        height: "100%",
        width: 48,
        backgroundColor: "#CFE9F8",
        borderRadius: 500,
        alignItems: 'center',
        justifyContent: 'center'
    },
    successModalTextH1: {
        color: '#27292A',
        fontSize: 18,
        fontFamily: 'Gilroy-M',
        fontWeight: '600',
        lineHeight: 24,
    },
    successModalTextP: {
        color: '#666B6E',
        fontSize: 14,
        fontFamily: 'Gilroy',
        fontWeight: '400',
        lineHeight: 20,
        textAlign: 'center'
    }
})