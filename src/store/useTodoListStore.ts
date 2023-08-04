import type { TodoType } from '../types';
import { create } from 'zustand';

type ListStore = {
   todos: TodoType[];
   focusedTodo: TodoType['id'];
   addTodo(): void;
   changeTodo(todo: Partial<TodoType>): void;
   deleteTodo(id: TodoType['id']): void;
};

function getNewTodo(): TodoType {
   return {
      id: crypto.randomUUID(),
      text: '',
      isCompleted: false,
      date: new Date(),
      isEdited: false
   }
}

const useTodoListStore = create<ListStore>((set) => ({
   todos: [],
   focusedTodo: '',
   addTodo() {
      return set((state) => {
         return {
            ...state,
            todos: [...state.todos, getNewTodo()]
         }
      });
   },
   changeTodo(editableTask: TodoType) {
      return set((state) => {
         return {
            ...state,
            todos: state.todos.map((todo) => {
               return (editableTask.id === todo.id) ? {
                  ...todo,
                  ...editableTask
               } : todo;
            })
         }
      });
   },
   deleteTodo(id: TodoType['id']) {
      return set((state) => {
         return {
            ...state,
            todos: state.todos.filter((todo) => todo.id !== id)
         }
      });
   }
}));

export default useTodoListStore;