import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {addTask} from '../store/taskSlice';
import TaskForm from '../components/TaskForm';
import {useNavigation} from '@react-navigation/native';

const AddTaskScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleAddTask = (task: string) => {
    dispatch(addTask(task));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TaskForm onSubmit={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default AddTaskScreen;
