import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import {  useDispatch } from 'react-redux';
import { FAB } from 'react-native-paper';
import TaskItem from '../components/TaskItem';
import { removeTask } from '../store/taskSlice';
import { useAppSelector } from '../hooks';
import { useNavigation } from '@react-navigation/native';

const TaskListScreen = () => {
  const navigation = useNavigation<any>()
  const tasks = useAppSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleRemoveTask = (id: number) => {
    dispatch(removeTask(id));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TaskItem task={item} onDelete={() => handleRemoveTask(item.id)} />
        )}
      />
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => navigation.navigate('Add Task')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default TaskListScreen;
