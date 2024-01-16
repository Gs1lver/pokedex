import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0) 
  const [soma, setSoma] = useState(0)
  //state -> info que estão na tela do app naquele momento

  // function clickado(){
  //   setCount((count) => count + 1)
  // }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + soma)}>
          count is {count}
        </button>
        <button onClick={() => setCount(0)}>
          resetar count
        </button>
        <button onClick={() => setSoma((soma) => soma + 1)}>
          +
        </button>
        {soma}
        <button onClick={() => setSoma((soma) => soma - 1)}>
          -
        </button>
       
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
