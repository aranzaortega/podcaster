import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Context from '../context/Context'

const Nav = () => {
  const { loadingPodcasts, loadingPodcast, loadingEpisodes } = useContext(Context)

  return (
    <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Podcaster</Link>
            {(loadingPodcasts || loadingPodcast || loadingEpisodes) && (
              <div className="spinner-border text-primary m-2" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            )}
        </div>
    </nav>
  )
}

export default Nav