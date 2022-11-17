import React, { useState } from "react";
import { FlatList, Text, View, Image, TouchableOpacity, } from "react-native";
import styles from "./styles";
import Modal from "react-native-modal"
import { useDispatch } from "react-redux";
import { Button, ScreenWrapper } from "~components";
import { setIsLoggedIn, setUserMeta } from "~redux/slices/user";
import { setAppLoader } from "~redux/slices/config";
import Entypo from "react-native-vector-icons/Entypo";
import CustomCalender from "~components/CustomCalender";
import dayjs from "dayjs";
import { height, width } from "~utills/Dimension";
var localeData = require("dayjs/plugin/localeData");
var weekday = require("dayjs/plugin/weekday");
dayjs.extend(localeData);
dayjs.extend(weekday);
export default function Login({ navigation, route }) {
  const dispatch = useDispatch();
  let dayOfWeek = [];
  let daysstring = [];
  daysstring = dayjs.weekdaysShort();
  for (let i = 0; i < 7; i++) {
    const date = dayjs().day(i).date();
    dayOfWeek.push(date);
  }
  const getCurrentMonth = dayjs().format("MMMM").valueOf();
  const getCurrentYear = dayjs().format("YYYY").valueOf();
  const headerData = `${getCurrentMonth} ${getCurrentYear}`;
  const currentDate = dayjs().date()
  const [isVisible, setIsVisible] = useState(false)
  const CalenderModal = () => {
    return (

      <Modal
        isVisible={isVisible}
        style={{ alignItems: "center", backgroundColor: "#FFFFFF" }}
      >

        <CustomCalender />
        <TouchableOpacity onPress={() => setIsVisible(false)}>
          <Text style={{ color: "red", fontSize: height(2), marginTop: height(2) }}>Close</Text>
        </TouchableOpacity>
      </Modal>



    )
  }
  return (
    <ScreenWrapper>
      <View style={styles.mainViewContainer}>
        <CalenderModal />
        <View style={styles.calendarContainer}>
          <View style={styles.headerWrapper}>
            <Text style={styles.headerMonth}>{headerData}</Text>
            <TouchableOpacity onPress={() => setIsVisible(true)} style={styles.iconWrapper}>
              <Image
                source={require("../../../assets/Icons/down.png")}
                resizeMode="contain"
                style={styles.IconStyle}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.bottomSection}>
            <View style={styles.days}>
              {daysstring.map((item, index) => {
                return (
                  <View key={index}>
                    <Text style={styles.daysText}>{item}</Text>
                  </View>
                )
              })}
            </View>
            <View style={styles.dates}>
              {dayOfWeek.map((item, index) => {
                return (
                  <TouchableOpacity key={index} style={[styles.datesBoxes, currentDate == item && { backgroundColor: "#62BDBE" }]}>
                    <Text style={[styles.datestxt, currentDate == item && { color: "#FFFFFF" }]}>{item}</Text>
                  </TouchableOpacity>
                )
              })}
            </View>

          </View>
          <View>

          </View>
        </View>
        {/* <Text style={styles.title}>LOGIN SCREEN</Text>
        <Button
          title={"Login"}
          onPress={() => {
            dispatch(setAppLoader(true));
            setTimeout(() => {
              dispatch(setIsLoggedIn(true));
              dispatch(
                setUserMeta({
                  name: "John",
                  email: "John Doe",
                })
              );
              dispatch(setAppLoader(false));
            }, 600);
          }}
        /> */}
      </View>
    </ScreenWrapper>
  );
}
