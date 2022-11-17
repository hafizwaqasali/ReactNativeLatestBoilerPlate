import { StyleSheet } from 'react-native';
import { height, width } from '~utills/Dimension';
import AppColors from '../../../utills/AppColors';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    backgroundColor: AppColors.white,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: AppColors.black,
    fontWeight: 'bold',
    fontSize: width(4),
    marginBottom: height(2)
  },
  //calender days
  calendarContainer: {
    height: height(15),
    backgroundColor: "#FFFFFF",
    width: width(90),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
    borderRadius: width(3)
  },
  headerWrapper: {
    flexDirection: "row",
    marginVertical: height(1.5),
    marginHorizontal: width(4),
    justifyContent: "space-between",
    alignItems: "center"
  },
  headerMonth: {
    color: "#273D52",
    fontSize: width(3.5),
    fontWeight: "500"
  },
  IconStyle: {
    height: height(2.5),
    width: width(5)
  },
  iconWrapper: {

  },
  bottomSection: {
    height: height(9),
    marginHorizontal: width(4),
  },
  days: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: width(1.8)
  },
  dates: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: height(1)
  },
  daysText: {
    color: "#273D52",
    fontSize: width(3)
  },
  datesBoxes: {
    backgroundColor: "#F6F8F9",
    height: height(4),
    width: height(4),
    borderRadius: height(2),
    alignItems: "center",
    justifyContent: "center"
  },
  datestxt: {
    fontSize: width(3.2),
    color: "#273D52"
  }
});
export default styles;
