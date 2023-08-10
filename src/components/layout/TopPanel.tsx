import type { FC } from "react";
import AddTodoButton from "./AddTodoButton";
import TodoMenuButton from "./TodoMenuButton";

import './TopPanel.css';

type TopPanelProps = {
   title: string;
};

const TopPanel: FC<TopPanelProps> = ({ title }) => {
   return (
      <section className="top-panel">
         <h1>{title}</h1>
         <section>
            <AddTodoButton />
            <TodoMenuButton />
         </section>
      </section>
   );
};

export default TopPanel