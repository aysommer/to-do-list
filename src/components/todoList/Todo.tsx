import type { TodoType } from "../../types"
import {
   memo,
   useCallback,
   ChangeEvent,
   KeyboardEvent,
   FC,
   useRef,
   useEffect,
} from "react";
import { CheckBox } from "../checkBox";
import { useTodoListStore } from "../../store";

import "./Todo.css";

type TodoProps = TodoType;

const Todo: FC<TodoProps> = memo(({
   id,
   text,
   isCompleted,
   date,
}) => {
   const inputRef = useRef<HTMLInputElement>(null);
   const addTodo = useTodoListStore((state) => state.addTodo);
   const deleteTodo = useTodoListStore((state) => state.deleteTodo);
   const changeTodo = useTodoListStore((state) => state.changeTodo);

   useEffect(() => {
      inputRef?.current?.focus();
   }, []);

   const handleChangeData = useCallback((event: ChangeEvent<HTMLInputElement>) => {
      changeTodo({
         id,
         [event.target.name]: event.target.value
      });
   }, [changeTodo, id]);

   const handleCheckTodo = useCallback(() => {
      changeTodo({ id, isCompleted: !isCompleted });
   }, [changeTodo, id, isCompleted])

   const handleDeleteTodo = useCallback(() => {
      deleteTodo(id);
   }, [deleteTodo, id]);

   const handleBlur = useCallback(() => {
      if (!text.length) {
         deleteTodo(id);
      }
   }, [deleteTodo, id, text.length]);

   const handleKeyDown = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
      if (text.length && event.key === 'Enter') {
         addTodo();
      }
   }, [addTodo, text.length]);

   return (
      <div>
         <CheckBox
            id={id}
            checked={isCompleted}
            onChange={handleCheckTodo}
         />
         <input
            ref={inputRef}
            className="todo__text"
            placeholder="Type some text..."
            type="text"
            name="text"
            value={text}
            onKeyDown={handleKeyDown}
            onChange={handleChangeData}
            onBlur={handleBlur}
         />
         <input
            className="todo__date"
            type="date"
            name="date"
            value={date}
            onChange={handleChangeData}
         />
         <button onClick={handleDeleteTodo}>x</button>
      </div>
   )
});

export default Todo;