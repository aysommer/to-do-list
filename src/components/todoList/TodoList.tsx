import type { FC } from 'react';
import type { TodoType } from '../../types';
import Todo from './Todo';

type TodoListProps = {
   items: TodoType[];
};

const TodoList: FC<TodoListProps> = ({ items = [] }) => {
   return (
      <section>
         {items.map((item) => <Todo key={item.id} {...item}/>)}
      </section>
   )
}

export default TodoList;