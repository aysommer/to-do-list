import { useListStore } from "./store";

function App() {
   const { todos, addTodo } = useListStore();

   return (
      <div>
         <button onClick={addTodo}>
            add todo
         </button>
         {todos.map((todo) => <div key={todo.id}>
            {todo.text}
         </div>)}
      </div>
   )
}

export default App;
