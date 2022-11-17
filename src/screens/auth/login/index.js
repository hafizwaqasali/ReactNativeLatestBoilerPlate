import React from "react";
import { FlatList, Text, View } from "react-native";
import styles from "./styles";
import { useDispatch } from "react-redux";
import { Button, ScreenWrapper } from "~components";
import { setIsLoggedIn, setUserMeta } from "~redux/slices/user";
import { setAppLoader } from "~redux/slices/config";
import CustomCalender from "~components/CustomCalender";
import dayjs from "dayjs";
export default function Login({ navigation, route }) {
  const dispatch = useDispatch();
  const getCurrentMonth = dayjs().format("MMMM").valueOf()
  const getCurrentYear = dayjs().format("YYYY").valueOf()
  const headerData = `${getCurrentMonth} ${getCurrentYear}`
  console.log(headerData);
  return (
    <ScreenWrapper>
      <View style={styles.mainViewContainer}>
        <FlatList />
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
