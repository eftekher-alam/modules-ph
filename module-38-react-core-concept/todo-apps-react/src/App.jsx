import './App.css'
import Counter from './Counter';
import Todo from './Todo'

function App() {
  return (
    <>
      <Counter></Counter>

      {/* <h3>Task List</h3>
      <button onClick={handlerNonParam} >Non-Parameterize</button>
      <button onClick={() => handlerParam("Eftekher")} >Parameterize</button>
      <ul>
        <Todo name="Finish all modules" isDone={false}></Todo>
        <Todo name="Academic Study" isDone={true}></Todo>
        <Todo name="Meet friend" isDone={true}></Todo>
        <Todo name="Attend class" isDone={false}></Todo>
      </ul> */}
    </>
  )
}

function handlerNonParam() {
  alert("Non-parameterize event occur..!")
}

function handlerParam(name) {
  alert("Welcome Mr. " + name);
}

export default App
