import {Text, View} from "react-native";
import {StyleSheet} from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalListItems}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  )
}
export default GoalItem;

const styles = StyleSheet.create({
  goalListItems: {
    backgroundColor: '#5e0acc',
    paddingVertical: 12,
    paddingHorizontal: 8,
    marginVertical: 8,
    borderRadius: 6,
  },
  goalText: {
    color: 'white',
  }
})