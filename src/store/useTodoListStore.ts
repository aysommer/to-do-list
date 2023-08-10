import type { TodoType } from '../types';
import { create } from 'zustand';

type ListStore = {
   todos: TodoType[];
   addTodo(): void;
   changeTodo(todo: Partial<TodoType>): void;
   deleteTodo(id: TodoType['id']): void;
   cache(): void;
};

const LOCAL_STORAGE_KEYS = {
   TODOS: 'todos'
};

function getNewTodo(): TodoType {
   return {
      id: crypto.randomUUID(),
      text: '',
      isCompleted: false,
      date: new Date().toISOString().split('T')[0]
   }
}

function getTodosFromLocalStorage(): TodoType[] {
   const rawData = localStorage.getItem(LOCAL_STORAGE_KEYS.TODOS);
   if (!rawData) {
      return [];
   }
   return JSON.parse(rawData);
}

export function cacheTodos(items: TodoType[]): void {
   const parsedTodos = JSON.stringify(items);
   localStorage.setItem(LOCAL_STORAGE_KEYS.TODOS, parsedTodos);
}

export const useTodoListStore = create<ListStore>((set, get) => ({
   todos: getTodosFromLocalStorage(),
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
   },
   cache() {
      const state = get();
      cacheTodos(state.todos);
   }
}));
