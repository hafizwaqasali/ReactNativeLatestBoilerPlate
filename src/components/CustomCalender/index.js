import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from "./styles"
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { height } from '~utills/Dimension';

export default function CustomCalender() {
    return (
        <View>
            <Calendar style={styles.calenderContainer}
            />

        </View>
    )
}
