import type { FC } from "react";
import { TodoList } from "../todoList";
import { useTodoListStore } from "../../store";

import "./MainPanel.css";

const MainPanel: FC = () => {
   const activeTodos = useTodoListStore((state) => state.todos.filter((todo) => !todo.isCompleted));
   const completedTodos = useTodoListStore((state) => state.todos.filter((todo) => todo.isCompleted));

   return (
      <section className="main-panel">
         {(activeTodos.length) ? (
            <TodoList items={activeTodos} />
         ) : null}
         {(completedTodos.length) ? (
            <TodoList items={completedTodos} />
         ) : null}
         {(!activeTodos.length && !completedTodos.length) ? (
            <section className="main-panel__tasks-stub">
               <h2>No data</h2>
            </section>
         ) : null}
      </section>
   );
};

export default MainPanel;