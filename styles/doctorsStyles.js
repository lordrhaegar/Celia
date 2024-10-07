import { StyleSheet } from "react-native";

export const doctorsStyles = StyleSheet.create({
    careWorkersContainer: {
        width: '100%',
        padding: 12,
        backgroundColor: '#F3F5F6',
        borderRadius: 8,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 12
    },
    careWorkersH1: {
        color: '#27292A',
        fontSize: 14,
        fontFamily: 'Gilroy-M',
        fontWeight: '600',
        lineHeight: 20,
    },
    careWorkersItemContainer: {
        width: '100%',
        height: 44,
        padding: 12,
        backgroundColor: '#FDFDFD',
        borderRadius: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    careWorkersItemText: {
        color: 'black',
        fontSize: 14,
        fontFamily: 'Gilroy',
        fontWeight: '400',
        lineHeight: 20,
    },
    imageContainer: {
        width: 66,
        height: 60,
        borderRadius: 10,
        overflow: "hidden"
    },
    appointmentWorkersItemContainer: {
        width: '97%',
        height: 76,
        padding: 8,
        backgroundColor: '#FDFDFD',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#EAEDEF",
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 20,
        flexDirection: 'row',
        marginBottom: 10
    },
    appointmentWorkersItemDayText: {
        color: '#27292A',
        fontSize: 12,
        fontFamily: 'Gilroy',
        fontWeight: '400',
        lineHeight: 20,
    },
    appointmentWorkersItemTimeText: {
        color: '#868C8F',
        fontSize: 12,
        fontFamily: 'Gilroy',
        fontWeight: '400',
        lineHeight: 20,
    }
})