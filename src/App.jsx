import { Routes, Route } from "react-router-dom"
import './App.css'
import Nav from './components/Nav'
import Footer from "./components/Footer"
import Home from "./pages/Home"
import PodcastDetail from "./pages/PodcastDetail"

function App() {

  return (
    <>
     <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/podcast/:podcastId" element={<PodcastDetail />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
