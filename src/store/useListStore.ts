import type { Todo } from './../types';
import { create } from 'zustand';

type ListStore = {
   todos: Todo[];
   addTodo: () => void;
};

function getNewTodo() {
   return {
      id: crypto.randomUUID(),
      text: 'Type some text...',
      date: new Date()
   }
}

const useListStore = create<ListStore>((set) => ({
   todos: [],
   addTodo() {
      return set((state) => {
         return {
            ...state,
            todos: [...state.todos, getNewTodo()]
         }
      })
   }
}));

export default useListStore;