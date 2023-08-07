import { FC } from "react";
import { TodoList } from "./components/todoList";
import { useTodoListStore } from "./store";

const Counter: FC = () => {
   const length = useTodoListStore((state) => state.todos.length);

   return (
      <div>Todos: {length}</div>
   )
}

const AddTodoButton: FC = () => {
   const addTodo = useTodoListStore((state) => state.addTodo);

   return (
      <button onClick={addTodo}>
         Add todo
      </button>
   )
}

const TopPanel: FC = () => {
   return (
      <section>
         <Counter />
         <AddTodoButton />
      </section>
   )
}

const MainPanel: FC = () => {
   const activeTodos = useTodoListStore((state) => state.todos.filter((todo) => !todo.isCompleted));
   const completedTodos = useTodoListStore((state) => state.todos.filter((todo) => todo.isCompleted));

   return (
      <section>
         {(activeTodos.length) ? (
            <>
               <div>active</div>
               <TodoList items={activeTodos} />
            </>
         ) : null}
         {(completedTodos.length) ? (
            <>
               <div>completed</div>
               <TodoList items={completedTodos} />
            </>
         ) : null}
         {(!activeTodos.length && !completedTodos.length) ? (
            <div>add something...</div>
         ) : null}
      </section>
   )
}

const App: FC = () => {
   return (
      <main>
         <TopPanel />
         <MainPanel />
      </main>
   )
}

export default App;
