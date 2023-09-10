import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <FirstComponent></FirstComponent>
    </>
  )
}

function FirstComponent() {
  return (
    <div>
      <h1>My First Component</h1>
      <p>By this component I am starting my journey with react app</p>
    </div>
  );
}

export default App
