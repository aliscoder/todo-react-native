import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type Task = {id: number; title: string; completed?: boolean};

const initialState: Task[] = [];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      state.push({id: Date.now(), completed: false, title: action.payload});
    },
    completeTask: (state, action: PayloadAction<number>) => {
      const task = state.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    removeTask: (state, action: PayloadAction<number>) => {
      return state.filter(task => task.id !== action.payload);
    },
  },
});

export const {addTask, completeTask, removeTask} = tasksSlice.actions;
export default tasksSlice.reducer;
