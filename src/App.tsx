// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import Header from './components/Header/Index';
// import Board from './components/Board/Index';
import KanbanBoard from './components/KanbanBoard/Index';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <KanbanBoard />
    </>
  );
}

export default App;
