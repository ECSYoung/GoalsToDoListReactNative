import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...courseGoals, 
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
    // console.log(enteredGoal);
  };

  const removeGoalHandler = goalID => {
    setCourseGoals( currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalID);
    });
  } 

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={ styles.screen }>
      <View style={ styles.textStyle }>
        <Text style={ styles.text }>Click the button to start adding goals! Tap the goal to delete!</Text>
      </View>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
      <GoalInput 
        visible={isAddMode} 
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAdditionHandler} />
      <FlatList 
        keyExtractor={(item, index) => item.id}
        data={courseGoals} 
        renderItem={itemData => ( <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value}/> )}
      />   
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  textStyle: {
    marginBottom: 20
  }
});
