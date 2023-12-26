import { StyleSheet } from "react-native";

const celiaStyle = StyleSheet.create({
    celiaH1: {
        color: '#27292A',
        fontSize: 28,
        fontFamily: 'Gilroy',
        fontWeight: '600',
    },
    aiDropDownModels: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 8,
        alignItems: 'center',
        gap: 8,
        justifyContent: 'center',
        alignSelf: 'stretch',
        width: "45%",
        height: 150,
        elevation: 1,
        marginTop: 15,
        textAlign: 'center'
    },
    container: {
        maxWidth: 200,
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    sender: {
        alignSelf: 'flex-end',
        backgroundColor: '#1084ff',
        backgroundColor: "#0D91DC",
        borderBottomRightRadius: 0,
    },
    receiver: {
        alignSelf: 'flex-start',
        backgroundColor: "#7CD1D1",
        borderBottomLeftRadius: 0,
    },
    timeStamp: {
        width: '100%',
        textAlign: 'center',
    },
    message: {
        color: 'white',
        fontFamily: 'Gilroy-M',
        fontSize: 16
    },
    avatar: {
        width: 35,
        height: 35,
        borderRadius: 500,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        borderColor: 'transparent'
    },
    center: {
        justifyContent: "center",
        alignItems: 'center'
    },
    paragraph: {
        color: '#27292A',
        fontSize: 16,
        fontFamily: 'Gilroy',
        fontWeight: '400',
        lineHeight: 24,
    }
})

export default celiaStyle;