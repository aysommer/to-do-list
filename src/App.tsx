import { TodoList } from "./components/todoList";
import { useTodoListStore } from "./store";

function TopPanel() {
   const addTodo = useTodoListStore((state) => state.addTodo);

   return (
      <button onClick={addTodo}>
         add todo
      </button>
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
