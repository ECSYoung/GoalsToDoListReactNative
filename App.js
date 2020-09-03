import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';


export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  // set state from input text
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [
      ...courseGoals, 
      { id: Math.random().toString(), value: enteredGoal }
    ]);
    // console.log(enteredGoal);
  };

  return (
    <View style={ styles.screen }>
      <View style={ styles.inputContainer }>
        <TextInput 
          placeholder="Course Goal" 
          style={ styles.input }
          onChangeText={goalInputHandler}
          value={enteredGoal} />
        <Button 
          title="ADD"
          onPress={addGoalHandler} />
      </View>
      <FlatList 
        keyExtractor={(item, index) => item.id}
        data={courseGoals} 
        renderItem={itemData => (
          <GoalItem title={itemData.item.value}/>
      )}
      />   
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  input: {
    borderColor: 'black', 
    borderWidth: 1, 
    padding: 10, 
    width: '80%'
  }
});
