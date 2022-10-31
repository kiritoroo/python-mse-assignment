import React, { useRef } from "react"
import MacScene from "./components/MacScene"
import Cursor from './components/Cursor'

const App = () => {
  const domContentRef = useRef()

  return (
    <div ref={domContentRef} className="w-screen h-screen content-container">
      <MacScene domContent={domContentRef}/>
      <Cursor />
    </div>
  )
}

export default App
