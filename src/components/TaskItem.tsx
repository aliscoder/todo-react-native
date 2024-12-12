import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, IconButton, Card } from 'react-native-paper';
import { Task } from '../store/taskSlice';

type Props = {
  task: Task,
  onDelete: (id: number) => void
}

const TaskItem = ({ task, onDelete } : Props) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{task.title}</Text>
          </View>
          <IconButton
            icon="delete"
            size={20}
            onPress={() => onDelete(task.id)}
          />
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
    marginRight: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: 'gray',
  },
});

export default TaskItem;
