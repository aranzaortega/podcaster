import { Link } from 'react-router-dom'

const Nav = ({ podcastsLoading }) => {
  return (
    <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Podcaster</Link>
            {podcastsLoading && (
              <div className="spinner-border text-primary m-2" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            )}
        </div>
    </nav>
  )
}

export default Nav