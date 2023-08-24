import { Routes, Route } from "react-router-dom"
import './App.css'
import Nav from './components/Nav'
import Footer from "./components/Footer"
import Home from "./pages/Home"
import PodcastDetail from "./pages/PodcastDetail"
import ChapterDetail from "./pages/ChapterDetail"
import { useFetchPodcasts } from "./hooks/useFetch"

function App() {
  const { podcastsData, podcastsLoading } = useFetchPodcasts();

  return (
    <>
     <Nav podcastsLoading={podcastsLoading} />
      <Routes>
        <Route path="/" element={<Home podcastsData={podcastsData} />} />
        <Route path="/podcast/:podcastId" element={<PodcastDetail podcastsData={podcastsData}/>}>
          <Route path="/podcast/:podcastId/episode/:episodeId" element={<ChapterDetail />}/>
        </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
