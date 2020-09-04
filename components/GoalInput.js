import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
  
    const goalInputHandler = enteredText => {
      setEnteredGoal(enteredText);
    };
  
    const addGoalHandler = () => {
      props.onAddGoal(enteredGoal);
      setEnteredGoal('');
    };

    return(
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                placeholder="Enter A Goal To Add"
                style={styles.input}
                onChangeText={goalInputHandler}
                value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="CANCEL" color="red" onPress={props.onCancel} />
                    </View>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={addGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    )
};


const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
      borderColor: 'black', 
      borderWidth: 1, 
      padding: 10, 
      width: '80%'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
    },
    button: {
        margin: 2,
        width: '40%'
    }
  });

export default GoalInput;