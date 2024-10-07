import { StyleSheet } from "react-native";

export const docDetailsStyle = StyleSheet.create({
    container: {
        paddingVertical: 32,
        gap: 30,
        borderColor: 'red',
        borderRadius: 2,
        backgroundColor: '#ffffff',
        // alignItems: 'center'
    },
    imageContainer: {
        width: "100%",
        height: 261
    },
    detailsContainer: {
        width: "100%",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: "#fff",
        height: "50%",
        padding: 20,
        gap: 20,
        marginTop: -50
    },
    buttonContainer: {
        width: "45%",
        alignItems: 'center',
        justifyContent: "flex-start",
        paddingVertical: 20,
    },
    cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between"
    },
    detailsCard: {
        width: '30%',
        padding: 8,
        borderRadius: 8,
        borderColor: "#6EBDEA",
        borderWidth: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 10
    },
    detailsCardH1: {
        color: '#666B6E',
        fontSize: 12,
        fontFamily: 'Gilroy-M',
    },
    detailsCardP: {
        color: '#868C8F',
        fontSize: 12,
        fontFamily: 'Gilroy',
        fontWeight: '400',
    },
    workingTimeContainer: {
        width: '100%',
        paddingVertical: 12,
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 10
    },
    reeviewsContainer: {
        width: '80%',
        paddingVertical: 12,
        borderTopColor: "#EAEDEF",
        borderTopWidth: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 10,
        marginTop: 40
    },
    scheduleManually: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 500,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
    },
    scheduleManuallyText: {
        color: '#666B6E',
        fontSize: 16,
        fontFamily: 'Gilroy-M'
    }
})