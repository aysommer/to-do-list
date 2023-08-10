import { FC, useEffect } from "react";
import { MainPanel, TopPanel } from "./components/layout";
import { useTodoListStore } from "./store";

import "./App.css";

const App: FC = () => {
   const cache = useTodoListStore((state) => state.cache);

   useEffect(() => {
      window.addEventListener('pagehide', cache)
   }, []);

   return (
      <main className="app">
         <TopPanel title="Tasks" />
         <MainPanel />
      </main>
   )
}

export default App;
