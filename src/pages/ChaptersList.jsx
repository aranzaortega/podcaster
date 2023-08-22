import { Link } from "react-router-dom"

const ChaptersList = () => {
  return (
    <div>
      <div className="card m-4 p-3">
        <h4>Episodes: 0</h4>
      </div>
      <div className="card m-4 p-3">
        <Link to={`/podcast/1437402802/episode/1`}>
           Example
        </Link>
        <table className="table table-dark table-striped">
        </table>
      </div>
    </div>
  )
}

export default ChaptersList