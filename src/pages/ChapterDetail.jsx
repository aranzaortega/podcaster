const ChapterDetail = ({ episodesData, episodeId }) => {
  const episodes = episodesData.children[0].children.filter(
    children => children.name === 'item');
  console.log( episodes.map(episode => episode.children.filter(
    children => children.name === 'description'
    ))[0][0].value)

  return (
    <div className="card m-4 p-3">
      <div>
        {episodes.map(episode => episode.children.filter(
          children => children.name === 'title'
          )).map(episodesTitles => episodesTitles.filter(
            episodeTitle => episodeTitle.value === episodeId
          ).map((episodeTitle) => (
            <h4 key={episodeTitle.value}>
              {episodeTitle.value}
            </h4>
          ))
        )}
      </div>
      <div dangerouslySetInnerHTML={{ __html: episodes.map(episode => episode.children.filter(
          children => children.name === 'description'
          ))[0][0].value}}>
      </div>
      <div>
        <audio controls>
          <source src={episodes.map(episode => episode.children.filter(
            children => children.name === 'media:content'
            ))[0][0].attributes.url}
          type="audio/mpeg" />
            This browser does not support the audio tag.
        </audio>
      </div>
    </div>
  )
}

export default ChapterDetail