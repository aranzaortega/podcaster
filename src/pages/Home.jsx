import { useState } from "react";
import { Link } from "react-router-dom"
import { useFetchPodcasts } from "../hooks/useFetch"

const Home = () => {
  const { podcastsData } = useFetchPodcasts()
  const [query, setQuery] = useState('')

  return (
    <div className="container-fluid">
      <div className="row justify-content-end my-3">
        <div className="col-auto">
            <span className="badge rounded-pill text-bg-primary mt-2">
              {podcastsData?.feed?.entry?.filter(podcast => podcast['im:name'].label.toLowerCase().includes(query)
                || podcast['im:artist'].label.toLowerCase().includes(query))
                .length}
            </span>
        </div>
        <div className="col-auto">
          <input
            type="search"
            id="search"
            className="form-control"
            placeholder="Filter podcasts..."
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-4 g-2">
        {podcastsData?.feed?.entry?.filter(podcast => podcast['im:name'].label.toLowerCase().includes(query)
          || podcast['im:artist'].label.toLowerCase().includes(query))
          .map((podcast) => (
          <div className="col" key={podcast.id.attributes['im:id']}>
            <div className="card h-100 text-center p-1">
              <img className="rounded-circle mx-auto d-block" src={podcast['im:image'][2].label}/>
              <div className="card-body">
                <Link className="card-title text-decoration-none fs-4 fw-bold"
                  to={`/podcast/${podcast.id.attributes['im:id']}`}>
                  {podcast['im:name'].label.toUpperCase()}
                </Link>
                <p className="card-text">Author: {podcast['im:artist'].label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home