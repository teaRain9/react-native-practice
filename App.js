import {StyleSheet, View, Button, TextInput, FlatList} from 'react-native';
import {useState} from "react";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])

  function addGoalHandler(enteredText) {
    setCourseGoals((prevState) => [
      ...prevState,
      {text: enteredText, id: Math.random().toString()}
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <View style={styles.goalContainer}>
        <FlatList
          data={courseGoals}
          renderItem={itemData => {
            return <GoalItem text={itemData.item.text}/>
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalContainer: {
    flex: 5,
  },



});
