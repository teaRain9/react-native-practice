import {Text, View, Pressable} from "react-native";
import {StyleSheet} from "react-native";

function GoalItem(props) {

  return (
    <View style={styles.goalListItems}>
      <Pressable onPress={props.onDeleteItem.bind(this, props.id)}
                 style={({ pressed}) => pressed && styles.pressedItem}
                 android_ripple={{color: '#210644'}}>
          <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>)
}

export default GoalItem;

const styles = StyleSheet.create({
  goalListItems: {
    backgroundColor: '#5e0acc',
    marginVertical: 8,
    borderRadius: 6,
  },
  goalText: {
    color: 'white',
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  pressedItem: {
    opacity: 0.5
  }
})