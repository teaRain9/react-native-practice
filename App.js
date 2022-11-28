import {StyleSheet, View, Button, TextInput, FlatList} from 'react-native';
import {useState} from "react";
import {StatusBar} from "expo-status-bar";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function addGoalHandler(enteredText) {
    setCourseGoals((prevState) => [
      ...prevState,
      {text: enteredText, id: Math.random().toString()}
    ]);
    endAddGoalHandler()
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
       return currentCourseGoals.filter(goal => goal.id !== id)
    })
  }

  function startAddGoalHandler() {
    setModalIsVisible(true)
  }

  function endAddGoalHandler() {
    setModalIsVisible(false)
  }

  return (
    <>
      <StatusBar style="light"/>
      <View style={styles.appContainer}>
        <Button title={'Add New Goal'} color={'#a065ec'} onPress={startAddGoalHandler}/>
        <GoalInput onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} visible={modalIsVisible} />
        <View style={styles.goalContainer}>
          <FlatList
            data={courseGoals}
            renderItem={itemData => {
              return <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler}/>
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    marginTop:16,
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalContainer: {
    flex: 5,
  },



});
