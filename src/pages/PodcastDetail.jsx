import { useParams } from "react-router-dom"
import { useFetch } from "../useFetch"
import { Link } from "react-router-dom"
import ChaptersList from "./ChaptersList";
import ChapterDetail from "./ChapterDetail";

const PodcastDetail = () => {
  const { podcastId } = useParams();
  const { episodeId } = useParams();
  const { data, loading } = useFetch(`https://api.allorigins.win/raw?url=https://itunes.apple.com/lookup?id=${podcastId}`);

  return (
    <div className="container-fluid">
      {loading && <div>Loading...</div>}
      <div className="row">
        <div className="col-4">
          <div className="card m-4 p-3">
            <img src={data?.results[0].artworkUrl600} className="m-4 rounded" alt="..." />
            <div className="card-body">
              <Link className="card-title text-decoration-none fs-4 fw-bold" to={`/podcast/${podcastId}`}>
                {data?.results[0].collectionName}
              </Link>
              <p className="card-text">by {data?.results[0].artistName}</p>
            </div>
            <div className="card-footer">
              <h6>Description:</h6>
              <small className="text-body-secondary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</small>
            </div>
          </div>
        </div>
        <div className="col-8">
          {episodeId ? (
            <ChapterDetail />
          ) : (
            <ChaptersList />
          )}
        </div>
      </div>
    </div>
  )
}

export default PodcastDetail