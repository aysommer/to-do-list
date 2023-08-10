import { FC } from "react";
import { PlusIcon } from "../../icons/PlusIcon";
import { useTodoListStore } from "../../store";

import "./AddTodoButton.css";

const AddTodoButton: FC = () => {
   const addTodo = useTodoListStore((state) => state.addTodo);

   return (
      <PlusIcon onClick={addTodo} className="add-todo-button"/>
   );
};

export default AddTodoButton;
