import type { TodoType } from "../../types"
import { memo, useCallback, useState, ChangeEvent, useRef, useEffect } from "react";
import { useTodoListStore } from "../../store";

import "./Todo.css";

type TodoProps = TodoType;

const Todo = memo(({ id, text, date, isEdited }: TodoProps) => {
   const inputRef = useRef<HTMLInputElement>(null);
   const [cachedText, setCachedText] = useState(text);
   const deleteTodo = useTodoListStore((state) => state.deleteTodo);
   const changeTodo = useTodoListStore((state) => state.changeTodo);
   const focusedTodo = useTodoListStore((state) => state.focusedTodo);

   useEffect(() => {
      if (isEdited && inputRef.current) {
         inputRef.current.focus();
      }
   }, [inputRef, isEdited])


   const handleEnableEditing = useCallback(() => {
      changeTodo({ id: focusedTodo, isEdited: false });
      if (!isEdited) {
         changeTodo({ id, isEdited: true });
      }
   }, [changeTodo, focusedTodo, id, isEdited]);

   const handleBlur = useCallback(() => {
      changeTodo({ id, isEdited: false });
      if (text !== cachedText) {
         changeTodo({ id, text: cachedText });
      }
   }, [cachedText, changeTodo, id, text]);

   const handleChangeText = useCallback((event: ChangeEvent<HTMLInputElement>) => {
      setCachedText(event.target.value);
   }, []);

   const handleDeleteTodo = useCallback(() => {
      deleteTodo(id);
   }, [deleteTodo, id]);

   return (
      <div onClick={handleEnableEditing}>
         <input
            className="todo__input"
            placeholder="Type some text..."
            disabled={!isEdited}
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