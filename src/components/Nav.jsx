import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Podcaster</Link>
        </div>
    </nav>
  )
}

export default Nav