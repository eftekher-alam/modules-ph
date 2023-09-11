import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>Task List</h3>
      <ul>
        <Todo name="Finish all modules" isDone={false}></Todo>
        <Todo name="Academic Study" isDone={true}></Todo>
        <Todo name="Meet friend" isDone={true}></Todo>
        <Todo name="Attend class" isDone={false}></Todo>
      </ul>
    </>
  )
}

export default App
