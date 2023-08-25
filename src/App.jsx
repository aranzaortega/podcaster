import { Routes, Route } from "react-router-dom"
import './App.css'
import Nav from './components/Nav'
import Footer from "./components/Footer"
import Home from "./pages/Home"
import PodcastDetail from "./pages/PodcastDetail"
import EpisodeDetail from "./pages/EpisodeDetail"
import { ContextProvider } from "./context/Context"

function App() {
  return (
    <>
    <ContextProvider>
     <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/podcast/:podcastId" element={<PodcastDetail />}>
          <Route path="/podcast/:podcastId/episode/:episodeId" element={<EpisodeDetail />}/>
        </Route>
      </Routes>
      <Footer />
      </ContextProvider>
    </>
  )
}

export default App
