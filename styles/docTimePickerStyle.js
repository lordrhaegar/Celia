import { StyleSheet } from "react-native";
import { backgroundColors } from "../constants/constants";

const docTimePickerStyle = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 32,
        gap: 30,
        borderRadius: 2,
        height: "100%"
        // backgroundColor: '#ffffff',
        // alignItems: 'center'
    },
    timePickerContainer: {
        width: '100%',
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    timeePickerH1: {
        color: "#6EBDEA",
        fontSize: 16,
        fontFamily: 'Gilroy',
        fontWeight: '500',
    },
    dayAndNightTimeContainer: {
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    },
    daySelectorContainer: {
        width: "100%",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        gap: 10,
        borderBottomColor: "#FDFDFD",
        borderBottomWidth: 1
    },
    dayListContainer: {
        width: "100%",
        flexDirection: 'row',
        gap: 10,
    },
    daySelectorIconContainer: {
        width: "100%",
        justifyContent: 'center',
        alignItems: "flex-start",
    },
    daySelectorIconContainer2: {
        width: "20%",
        height: 250,
        justifyContent: 'space-evenly',
        alignItems: "center",
        position: 'absolute',
        left: 5,
    },
    daySelectorTimeContainer: {
        width: "100%",
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: "center",
        gap: 18
    },
    timeButton: {
        width: 'auto',
        height: 30,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
        borderColor: backgroundColors.doctorSelectedBackground
    },
    selectedTimeText: {
        fontSize: 12,
        fontFamily: 'Gilroy',
        fontWeight: '400',
    },
    unselectedTimeText: {
        fontSize: 12,
        fontFamily: 'Gilroy',
        fontWeight: '400',
    }
})

export default docTimePickerStyle