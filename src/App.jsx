import { Routes, Route } from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import Nav from './components/Nav'

function App() {

  return (
    <>
     <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  )
}

export default App
