import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <FirstComponent></FirstComponent>
      <Student name="Eftekher" dept="CSE"></Student>
      <Student name="Manik" dept="EEE"></Student>
      <Student name="Durjoy" dept="CSE"></Student>
      <Person name="Mr. Karim" age={35}></Person>
      <Person name="Mr. Rahim"></Person>
    </>
  )
}


function Person(props) {
  const { name, age = 0 } = props; //destructuring here, also set default value.
  return (
    <div>
      <h2>Name : {name}</h2>
      <h3>Age : {age}</h3>
    </div>
  );
}

function Student(props) {

  return (
    <div>
      <h2>Name : {props.name}</h2>
      <h3>Department : {props.dept}</h3>
    </div>
  );
}

function FirstComponent() {

  const objHeadingStyle = {
    color: "green",
    padding: "10px",
    border: "2px solid tomato",
    borderRadius: "10px"
  }

  return (
    <div>
      {/* Adding class from App.css file */}
      <h1 className='heading'>My First Component</h1>
      <h1 style={objHeadingStyle}>My First Component</h1>
    </div>
  );
}

export default App
