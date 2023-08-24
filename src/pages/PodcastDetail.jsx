import { useParams } from "react-router-dom"
import { useFetchPodcast } from "../hooks/useFetch"
import { Link } from "react-router-dom"
import EpisodesList from "./EpisodesList";
import EpisodeDetail from "./EpisodeDetail";

const PodcastDetail = ({ podcastsData }) => {
  const { podcastId } = useParams();
  const { episodeId } = useParams();
  const { podcastData, podcastLoading, episodesData, episodesLoading } = useFetchPodcast(podcastId);

  return (
    <div className="container-fluid">
      {podcastLoading && episodesLoading ? (
        <div className="spinner-border text-primary m-2" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="row">
          <div className="col-4">
            <div className="card m-4 p-3">
              <img src={podcastData?.results[0].artworkUrl600} className="m-4 rounded" alt="..." />
              <div className="card-body">
                <Link className="card-title text-decoration-none fs-4 fw-bold" to={`/podcast/${podcastId}`}>
                  {podcastData?.results[0].collectionName}
                </Link>
                <p className="card-text">by {podcastData?.results[0].artistName}</p>
              </div>
              <div className="card-footer">
                <h6>Description:</h6>
                <small className="text-body-secondary">
                  {podcastsData?.feed.entry.filter(podcast => podcast['im:name'].label === podcastData?.results[0].collectionName).map((podcast) => podcast.summary.label)}
                </small>
              </div>
            </div>
          </div>
          <div className="col-8">
            {episodeId ? (
              <EpisodeDetail episodeId={episodeId} episodesData={episodesData} />
            ) : (
              <EpisodesList
                podcastData={podcastData}
                episodesData={episodesData}
                podcastId={podcastId}
              />
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default PodcastDetail