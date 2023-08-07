import { TodoList } from "./components/todoList";
import { useTodoListStore } from "./store";

function TopPanel() {
   const addTodo = useTodoListStore((state) => state.addTodo);
   const todos = useTodoListStore((state) => state.todos);

   return (
      <div>
         <div>Todos: {todos.length}</div>
         <button onClick={addTodo}>
            Add todo
         </button>
      </div>
   )
}

function MainPanel() {
   const todos = useTodoListStore((state) => state.todos);

   return (
      <TodoList items={todos} />
   )
}

function App() {
   return (
      <main>
         <TopPanel />
         <MainPanel />
      </main>
   )
}

export default App;
