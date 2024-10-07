import { StyleSheet } from "react-native";

export const availableDoctorsModalStyles = StyleSheet.create({
    container: {
        paddingVertical: 30,
        width: "85%",
        gap: 20
    },
    H1: {
        color: '#666B6E',
        fontSize: 24,
        fontFamily: 'Gilroy',
        fontWeight: '500',
    },
    H2: {
        color: '#27292A',
        fontSize: 16,
        fontFamily: 'Gilroy',
        fontWeight: '400',
    },
    listObject: {
        width: '100%',
        paddingTop: 12,
        paddingBottom: 12,
        borderBottomColor: "#CED6DA",
        borderBottomWidth: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        gap: 12
    },
    selectedListObject: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 500,
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    buttonContainer: {
        width: '100%',
        paddingVertical: 20,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    showSelectedOptionContainer: {
        width: '100%',
        height: "8%",
        paddingHorizontal: 28,
        paddingVertical: 12,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "#666B6E",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    selectedOptionContainer: {
        width: '50%',
        paddingHorizontal: 20,
        paddingVertical: 12,
        backgroundColor: '#EAEDEF',
        borderRadius: 50,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    selectedOption: {
        color: '#27292A',
        fontSize: 14,
        fontFamily: 'Gilroy-M',
    },
    change: {
        color: '#0D91DC',
        fontSize: 12,
        fontFamily: 'Gilroy-M',
    },
    doctorsGridView: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        overflow: 'hidden',
        gap: 10
    },
    doctorsContainer: {
        width: '48%',
        padding: 8,
        borderRadius: 8,
        borderColor: "#EAEDEF",
        borderWidth: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 12,
    },
    docName: {
        color: '#27292A',
        fontSize: 14,
        fontFamily: 'Gilroy-M',
    },
    docOccupation: {
        color: '#27292A',
        fontSize: 12,
        fontFamily: 'Gilroy',
        fontWeight: '400',
    },
    docHospital: {
        color: '#868C8F',
        fontSize: 12,
        fontFamily: 'Gilroy',
    },
    viewDetailsText: {
        color: '#0D91DC',
        fontSize: 12,
        fontFamily: 'Gilroy-M',
    },
    imageStyle: {
        width: "100%",
        height: 200,
        borderRadius: 8,
    },
    viewDetailsContainer: {
        width: '100%',
        flexDirection: 'row',
        paddingVertical: 4,
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
})