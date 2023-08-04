import type { TodoType } from '../../types';
import Todo from './Todo';

type TodoListProps = {
   items: TodoType[];
};

function TodoList({ items = [] }: TodoListProps) {
   return (
      <section>
         {items.map((item) => <Todo key={item.id} {...item}/>)}
      </section>
   )
}

export default TodoList;