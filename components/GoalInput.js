import {Button, StyleSheet, TextInput, View} from "react-native";
import {useState} from "react";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('')

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  }

  function onAddGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('')
  }



  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={enteredGoalText}
        placeholder='your course goal!' />
      <Button title='Add Goal' onPress={onAddGoalHandler}/>
    </View>

  )
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flex: 1
  },
  textInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
})