const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-end my-3">
        <div className="col-auto">
            <span className="badge rounded-pill text-bg-primary mt-2">100</span>
        </div>
        <div className="col-auto">
          <input type="search" id="search" className="form-control" placeholder="Filter podcasts..." />
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-4 g-2">
        <div className="col" >
          <div className="card h-100 text-center p-1">
            <img className="rounded-circle mx-auto d-block" />
            <div className="card-body">
              <a className="card-title text-decoration-none fs-4 fw-bold">name</a>
              <p className="card-text">author</p>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Home