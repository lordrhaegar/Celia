import { StyleSheet } from "react-native";

const talkToADocStyle = StyleSheet.create({
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
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',

    },
    daySelectorIconContainer: {
        width: "20%",
        justifyContent: 'center',
        alignItems: "center",
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
        width: "80%",
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: "center",
        gap: 18
    },
    timeButton: {
        width: 42,
        height: 30,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedTimeText: {
        color: '#FDFDFD',
        fontSize: 12,
        fontFamily: 'Gilroy',
        fontWeight: '400',
    },
    unselectedTimeText: {
        color: '#27292A',
        fontSize: 12,
        fontFamily: 'Gilroy',
        fontWeight: '400',
    }
})

export default talkToADocStyle