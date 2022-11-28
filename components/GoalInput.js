import {Button, StyleSheet, TextInput, View, Modal, Image} from "react-native";
import {useState} from "react";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('')

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  }

  function onAddGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal visible={props.visible} animationType={'slide'}>
      <View style={styles.inputContainer}>
        <Image source={require('../assets/images/goal.png')} style={styles.image} />
        <TextInput
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
          placeholder='your course goal!' />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Cancel' onPress={props.onCancel} color='#f31282' />
          </View>
          <View style={styles.button}>
            <Button title='Add Goal' onPress={onAddGoalHandler} color='#b180f0' />
          </View>
        </View>
      </View>
    </Modal>

  )
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: 'center',
    borderBottomColor: '#ccc',
    flex: 1,
    padding: 8,
    backgroundColor: '#311b6b'
  },
  textInput: {
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    borderWidth: 1,
    borderRadius: 6,
    width: '100%',
    padding: 16,
    color: '#120438'
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  button: {
    width: 100,
    margin: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  }
})