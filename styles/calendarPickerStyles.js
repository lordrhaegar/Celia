import { StyleSheet } from "react-native";

export const calendarPickerStyles = StyleSheet.create({
    docAvailableText: {
        color: '#0D91DC',
        fontSize: 14,
        fontFamily: 'Gilroy',
        fontWeight: '600',
        lineHeight: 20,
    },
    scheduledDayandTimeBox: {
        width: '100%',
        padding: 12,
        backgroundColor: '#F3F5F6',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 8
    },
    dayOrNightimeText: {
        color: '#27292A',
        fontSize: 12,
        fontFamily: 'Gilroy',
        fontWeight: '500',
        lineHeight: 20,
    },
    scheduledDate: {
        gap: 10, 
        borderBottomColor: '#868C8F', 
        borderBottomWidth: 0.5, 
        width: "100%", 
        paddingBottom: 12 
    }
})