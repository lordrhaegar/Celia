import { StyleSheet } from "react-native"

export const upcomingAppointmentStyles = StyleSheet.create({
    joinMeetingContainer: {
        width: 166,
        padding: 12,
        backgroundColor: '#B0E3E3',
        borderRadius: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: "row"
    },
    joinMeetingContainerText: {
        color: '#666B6E',
        fontSize: 14,
        fontFamily: 'Gilroy-M',
        fontWeight: '600',
        lineHeight: 20,
    },
    diagnosisReportContainer: {
        width: '100%',
        padding: 12,
        backgroundColor: 'transparent',
        borderRadius: 8,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 12,
    },
    diagnosisReportItemContainer: {
        width: '100%',
        padding: 12,
        backgroundColor: '#F3F5F6',
        borderRadius: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    box: {
        gap: 10, 
        borderTopColor: '#868C8F', 
        borderTopWidth: 0.5, 
        width: "100%", 
        paddingVertical: 12 
    },
    rescheculeOrCancelContainer: {
        width: '100%', 
        paddingTop: 20, 
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        gap: 20
    }
})