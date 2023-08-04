import type { TodoType } from "../../types"
import { memo, useCallback, useState, ChangeEvent, useRef, useEffect } from "react";
import { useTodoListStore } from "../../store";

import "./Todo.css";

type TodoProps = TodoType;

const Todo = memo(({
   id,
   text,
   isCompleted,
   date,
   isEdited
}: TodoProps) => {
   const inputRef = useRef<HTMLInputElement>(null);
   const [cachedText, setCachedText] = useState(text);
   const deleteTodo = useTodoListStore((state) => state.deleteTodo);
   const changeTodo = useTodoListStore((state) => state.changeTodo);

   useEffect(() => {
      if (isEdited && inputRef.current) {
         inputRef.current.focus();
      }
   }, [inputRef, isEdited]);

   const handleBlur = useCallback(() => {
      changeTodo({ id, isEdited: false });
      if (text !== cachedText) {
         changeTodo({ id, text: cachedText });
      }
   }, [cachedText, changeTodo, id, text]);

   const handleChangeText = useCallback((event: ChangeEvent<HTMLInputElement>) => {
      setCachedText(event.target.value);
   }, []);

   const handleCheckTodo = useCallback(() => {
      changeTodo({ id, isCompleted: !isCompleted });
   }, [changeTodo, id, isCompleted])

   const handleDeleteTodo = useCallback(() => {
      deleteTodo(id);
   }, [deleteTodo, id]);

   return (
      <div>
         <input type="checkbox" id={id} checked={isCompleted} onChange={handleCheckTodo}/>
         <input
            className="todo__input"
            placeholder="Type some text..."
            ref={inputRef}
            type="text"
            value={cachedText}
            onChange={handleChangeText}
            onBlur={handleBlur}
         />
         <span>{date.toISOString()}</span>
         <button onClick={handleDeleteTodo}>x</button>
      </div>
   )
});

export default Todo;