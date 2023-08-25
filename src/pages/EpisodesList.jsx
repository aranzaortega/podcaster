import { Link } from "react-router-dom";
import { formatDuration } from "../utils/formatDuration";
import { formatDate } from "../utils/formatDate";
import { formatTitle } from "../utils/formatTitle";

const EpisodesList = ({ podcastData, episodesData, podcastId }) => {
  const episodes = episodesData.children[0].children.filter(
    children => children.name === 'item');

  return (
    <div>
      <>
      <div className="card m-4 p-3">
        <h4>Episodes: {podcastData.results[0].trackCount}</h4>
      </div>
      <div className="card m-4 p-3">
        <div className="row">
          <div className="col-8">
            <h6>Title</h6>
            {episodes.map(episode => episode.children.filter(
              children => children.name === 'title'
              )).map(episodesTitles => episodesTitles.map((episodeTitle) => (
                <div key={episodeTitle.value}>
                  <Link className="text-decoration-none fw-bold"
                    to={`/podcast/${podcastId}/episode/${episodeTitle.value}`}>
                    <p dangerouslySetInnerHTML={{ __html:
                      formatTitle(episodeTitle.value)}}>
                    </p>
                  </Link>
                </div>
              ))
            )}
          </div>
          <div className="col-2">
            <h6>Date</h6>
            {episodes.map(episode => episode.children.filter(
              children => children.name === 'pubDate'
              )).map(episodesPubsDates => episodesPubsDates.map((episodePubDate) => (
                <div key={episodePubDate.value}>
                  <p>{formatDate(episodePubDate.value)}</p>
                </div>
              ))
            )}
          </div>
          <div className="col-2">
            <h6>Duration</h6>
            {episodes.map(episode => episode.children.filter(
              children => children.name === 'itunes:duration'
              )).map(episodesSeconds => episodesSeconds.map((episodeSeconds) => (
                <div key={episodeSeconds.value}>
                  <p>{formatDuration(episodeSeconds.value)}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      </>
    </div>
  )
}

export default EpisodesList